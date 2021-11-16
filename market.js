/* active Klassen ändern*/
/* mit querySelectorAll erhält man eine NodeList, die ähnlich wie ein Array ist*/
const panels = document.querySelectorAll('.panel');

function playSong(){
    const music= new Audio ("GoodBMusic.mp3");
	music.play();
}

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		/*die aktive Klasse inaktivieren; */
		removeActiveClasses();
		/*und dem angeklickten Element die aktive Klasse zuweisen*/
		panel.classList.add('active');
		playSong();
	});
});

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active')
	});
}




