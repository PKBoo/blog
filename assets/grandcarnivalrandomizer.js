var medium = ['L', 'L', 'L', 'L','L','Straight','Straight','Straight','Straight','Straight']
var large = ['Straight','Straight','Z','Z','L','L', 'Square','Square','T', 'T']
var giant = ['Straight','U','Long Z','Symmetric Z','Isoceles L','Tall L', 'Square', 'T', 'Cross','L with little square', 'Long T', 'Square with bit', 'W']

function newQuote(players) {
    
	shuffleArray(medium)
    let dismedium = medium.slice(0,players)
	document.getElementById('mediumDisplay').innerHTML = dismedium

    let dislarge = large.slice(0,players)
	document.getElementById('largeDisplay').innerHTML = dislarge

    let disgiant = giant.slice(0,players)
	document.getElementById('giantDisplay').innerHTML = disgiant

}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}