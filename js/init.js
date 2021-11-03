// @ts-check
import { inizializzaNew, round } from './bigpharma.js';
import { points } from './mappa.js';

// @ts-ignore
window.initPage = initPage;

export function initPage() {
	initZone();
	for (const punto of points) {
		document.getElementById(punto).addEventListener('click', function () { inizializzaNew(); }, false);
	}
	document.getElementById('Round1').addEventListener('click', round, false);
}

/**
 * @type {number[]}
 */
export let zone = [];
/**
 * @type {number[]}
 */
export let cubetti = [];

export let numRound = 0;

export function initZone() {
	for (const punto of points) {
		zone[punto] = 0;
		cubetti[punto] = 0;
	}
	numRound = -1;
}

export function aumentaRound() {
	numRound++;
}


