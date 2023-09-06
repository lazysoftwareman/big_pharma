// @ts-check
import { inizializzaNew, round, auto9, medie } from './bigpharma.js';
import { points, rotella } from './mappa.js';

// @ts-ignore
window.initPage = initPage;

export function initPage() {
	initZone();
	for (const punto of points) {
		document.getElementById(punto).addEventListener('click', function () { inizializzaNew(); }, false);
	}
	document.getElementById('Round1').addEventListener('click', round, false);
	document.getElementById('Auto9').addEventListener('click', auto9, false);
	document.getElementById('Medie').addEventListener('click', medie, false);
}

/**
 * @type {number[]}
 */
export let zone = [];
/**
 * @type {number[]}
 */
export let cubetti = [];

export let numRound = 1;

export function initZone() {
	for (const punto of points) {
		zone[punto] = 0;
		rotella[punto] = 0;
		cubetti[punto] = 0;
	}
	numRound = 0;
}

export function aumentaRound() {
	numRound++;
}


