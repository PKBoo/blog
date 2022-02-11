var medium = ['3L.png', '3L.png', '3L.png', '3L.png','3L.png','3I.png','3I.png','3I.png','3I.png','3I']
var large = ['4I.png','4I.png','4Z.png','4Z.png','4L.png','4L.png', '4O.png','4O.png','4T.png', '4T']
var giant = ['5I.png','5U.png','5offZ.png','5evenZ.png','5evenL.png','5evenL.png', '5T.png', '5+.png','5off+.png', '5offT.png', '5offO.png', 'W']
var basepath = 'blog/images/grandcarnival/'

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
    dismedium.forEach(img => {
        var image =  '<img src="' + basepath + img + '"'
	    document.getElementById('mediumDisplay').innerHTML += image
    })
	shuffleArray(large)
    var dislarge = large.slice(0,players)
    dislarge.forEach(img => {
        var image =  '<img src="' + basepath + img + '"'
	    document.getElementById('largeDisplay').innerHTML = dislarge
    })

	shuffleArray(giant)
    var disgiant = giant.slice(0,players)
    disgiant.forEach(img => {
        var image =  '<img src="' + basepath + img + '"'
	    document.getElementById('giantDisplay').innerHTML = disgiant
    })

}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}