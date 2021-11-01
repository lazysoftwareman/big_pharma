// @ts-check
import { aumentaRound, initZone, numRound, zone } from './init.js';
import { links, points } from './mappa.js';

export let modificati = 0;

export function printZona() {
	let str = '';
	for (const punto in zone) {
		str += punto + ': ' + zone[punto] + '\n';
	}
	console.log(str);
}

// io calo di uno e collegati aumentano di 1
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

export function inizializza(punto) {
	initZone();
	zone[punto]++;
	aumentaRound();
	modificati = 0;
	mostraZone();
}

export function round() {
	if (numRound > -1) {
		algoritmo1();
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
