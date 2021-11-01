// @ts-check
import { aumentaRound, cubetti, initZone, numRound, zone } from './init.js';
import { links, points } from './mappa.js';

export let modificati = 0;

export function printZona() {
	let str = '';
	for (const punto in zone) {
		str += punto + ': ' + zone[punto] + '\n';
	}
	console.log(str);
}

/**
 * Solo zone. se più di bianca cala di uno e gli altri crescono di 1
 */
export function algoritmo1() {
	const ricevutoDa = [];
	const zoneCopiata = [];
	modificati = 0;
	for (const punto of points) {
		if (zone[punto] > 0) {
			zoneCopiata[punto] = zone[punto] - 1;
			modificati++;
			for (const collegato of links[punto]) {
				if (zone[collegato] < 4) {
					if (!ricevutoDa[collegato] || !ricevutoDa[collegato].includes[punto]) {
						if (!ricevutoDa[collegato]) {
							ricevutoDa[collegato] = [];
						}
						ricevutoDa[collegato].push(punto);
						zoneCopiata[collegato] = zone[collegato] + 1;
						modificati++;
					}
				}
			}
		}
	}
	for (const zona in zoneCopiata) {
		zone[zona] = zoneCopiata[zona];
	}
}

/**
 * Cubetti e zone. Se più di bianca cala di uno (cubo) e gli altri crescono di 1 (cubo). in base al numero di cubi poi si cambia la zona
 */
export function algoritmoOriginal() {
	const ricevutoDa = [];
	const cubettiCopiati = [];
	modificati = 0;
	for (const punto of points) {
		if (zone[punto] > 0) {
			cubettiCopiati[punto] = cubetti[punto] - 1;
			modificati++;
			for (const collegato of links[punto]) {
				if (!ricevutoDa[collegato] || !ricevutoDa[collegato].includes[punto]) {
					if (!ricevutoDa[collegato]) {
						ricevutoDa[collegato] = [];
					}
					ricevutoDa[collegato].push(punto);
					cubetti[collegato]++;
					modificati++;
				}
			}
		}
	}
	for (const zona of points) {
		if (cubettiCopiati[zona] != undefined) {
			cubetti[zona] = cubettiCopiati[zona];
		}
		if (cubetti[zona] > 9) {
			zone[zona] = 4;
		} else if (cubetti[zona] > 6) {
			zone[zona] = 3;
		} else if (cubetti[zona] > 3) {
			zone[zona] = 2;
		} else if (cubetti[zona] > 0) {
			zone[zona] = 1;
		} else {
			zone[zona] = 0;
		}
	}
}

export function inizializza(punto) {
	initZone();
	cubetti[punto] = 3;
	zone[punto]++;
	aumentaRound();
	modificati = 0;
	mostraZone();
}

export function round() {
	if (numRound > -1) {
		algoritmoOriginal();
		aumentaRound();
		mostraZone();
	}
}

export function mostraZone() {
	for (const zona in zone) {
		const div = document.getElementById(zona);
		if (zone[zona] == 0) {
			div.style.backgroundColor = '#ffffff';
		} else if (zone[zona] == 1) {
			div.style.backgroundColor = 'var(--giallo)';
		} else if (zone[zona] == 2) {
			div.style.backgroundColor = 'var(--arancione)';
		} else if (zone[zona] == 3) {
			div.style.backgroundColor = 'var(--rosso)';
		} else {
			div.style.backgroundColor = 'var(--nero)';
		}
		if (cubetti[zona]) {
			div.innerHTML = '' + cubetti[zona];
		} else {
			div.innerHTML = '';
		}
	}
	document.getElementById('numRound').innerHTML = '' + numRound;
	document.getElementById('modificati').innerHTML = '' + modificati;
}

export function test1infezione(quante) {
	initZone();
	zone['ASE']++;
	for (let i = 0; i < quante; i++) {
		algoritmo1();
	}
	printZona();
}
