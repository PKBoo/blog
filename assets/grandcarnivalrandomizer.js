var medium = ['L', 'L', 'L', 'L','L','Straight','Straight','Straight','Straight','Straight']
var large = ['Straight','Straight','Z','Z','L','L', 'Square','Square','T', 'T']
var giant = ['Straight','U','Long Z','Symmetric Z','Isoceles L','Tall L', 'T', 'Cross','L with little square', 'Straight with bit', 'Square with bit', 'W']

function newQuote(players) {
    if (players == 2) {
        players = 5
    }
    else if (players == 3) {
        players = 6
    }
    else{
        players = 8
    }
	shuffleArray(medium)
    var dismedium = medium.slice(0,players)
	document.getElementById('mediumDisplay').innerHTML = dismedium
	shuffleArray(large)
    var dislarge = large.slice(0,players)
	document.getElementById('largeDisplay').innerHTML = dislarge

	shuffleArray(giant)
    var disgiant = giant.slice(0,players)
	document.getElementById('giantDisplay').innerHTML = disgiant

}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}