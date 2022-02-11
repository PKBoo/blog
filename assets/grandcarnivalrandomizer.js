var medium = ['3L', '3L', '3L', '3L','3L','3I','3I','3I','3I','3I']
var large = ['4I','4I','4Z','4Z','4L','4L', '4O','4O','4T', '4T']
var giant = ['5I','5U','5offZ','5evenZ','5evenL','5evenL', '5T', '5+','5off+', '5offT', '5offO', 'W']

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