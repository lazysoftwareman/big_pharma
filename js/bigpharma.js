// @ts-check
import { aumentaRound, cubetti, initZone, numRound, zone } from './init.js';
import { links, points } from './mappa.js';

export let modificati = 0;
/**
 * @type {string[]}
 */
export let mazzoInfette = [];
/**
 * @type {string[]}
 */
export let mazzoPulite = [];

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

/**
 * INIT: 1 posto da 3, 1 da 2 e 1 da 1
 * Ogni turno di un giocatore (con 2 giocatori quindi 24 turni) si pesca 1 carta (nell'originale sono 2)
 * e si aggiunge un cubetto. Ogni 4 round (8 turni in 2 giocatori) epidemia -> città casuale con 3 cubetti
 * e poi si pesca solo tra queste.
 * QUINDI: per 3 round espansione di 1 cubetto su 2 nuovi punti, poi 3 cubetti su un punto e da lì in poi 
 * si espandono solo quelli
 * 
 */
export function algoritmoPandemic() { }

/**
 * DA CAPIRE, ma la base è che ogni zona cala o diffonde dopo un timer,
 * tipo dopo 1 turno si diffonde e dopo un altro turno cala
 * 
 */
export function algoritmoTimer() { }

/**
 * INIT: TODO (ma femo finta 3 gialli, inizializzaNew)
 * A ogni fine turno si pesca da mazzo infetti e mazzo nuovi, e sulle carte pescate si aumenta di zona
 * e anche attorno. Poi si pesca ancora 1 (o 2) dal mazzo infetti e queste calano.
 * Si mescola il nuovo mazzo infetti (che quindi è aumentato di 1) e via così, quindi
 * - fine 1o -> 3+1
 * - fine 2o -> 4+1
 * - fine 12o -> 14+1
 */
export function algoritmoSimilPandemic() {
	modificati = 0;
	const cartaInfetta = mazzoInfette[0];
	const cartaPulita = mazzoPulite[0];
	mazzoPulite.splice(0, 1);
	// prima pulita
	if (zone[cartaPulita] < 4) {
		zone[cartaPulita]++;
		modificati++;
	}
	for (const collegato of links[cartaPulita]) {
		if (zone[collegato] < 4) {
			zone[collegato]++;
			modificati++;
		}
	}
	// poi carta infetta	
	if (zone[cartaInfetta] < 4) {
		zone[cartaInfetta]++;
		modificati++;
	}
	for (const collegato of links[cartaInfetta]) {
		if (zone[collegato] < 4) {
			zone[collegato]++;
			modificati++;
		}
	}
	// poi le altre 2 calano
	for (let i = 1; i < 3; i++) {
		const cartaCalante = mazzoInfette[i];
		if (zone[cartaCalante] > 0) {
			zone[cartaCalante]--;
			modificati++;
		}
	}
	// poi upgrade mazzo infette e mescolo
	mazzoInfette.push(cartaPulita);
	mazzoInfette = shuffle(mazzoInfette);
}

export function inizializzaNew() {
	initZone();
	mazzoInfette = [];
	mazzoPulite = shuffle(points);
	for (let i = 0; i < 3; i++) {
		mazzoInfette.push(mazzoPulite[0]);
		mazzoPulite.splice(0, 1);
	}
	for (const punto of mazzoInfette) {
		zone[punto]++;
	}
	mazzoInfette = shuffle(mazzoInfette);
	aumentaRound();
	modificati = 0;
	mostraZone();
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
		algoritmoSimilPandemic();
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

function shuffle(original) {
	let array = [...original];
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}
	return array;
}

export function test1infezione(quante) {
	initZone();
	zone['ASE']++;
	for (let i = 0; i < quante; i++) {
		algoritmo1();
	}
	printZona();
}
