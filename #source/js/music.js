// ======== Как при нажатии воспроизвести музыку ========

var radio = new Audio();
//Путь к песне
radio.src = "../../songs/kizaru_feat_og_maco-sunny_drive.mp3";

document.querySelector('.radioPlay').onclick = function() {
	// крутим диск
	$('.album__disk').toggleClass('active');
    /* проверяем если музыка не на паузе воспроизводим*/
    if (radio.paused == true) {
    	radio.play();
    	document.querySelector('.radioPlay').innerHTML = '<div class="album__icon"><img src="../../images/icons/pause1.svg" alt=""></div> Play Now';
  	} else {
    	radio.pause();
    	document.querySelector('.radioPlay').innerHTML = '<div class="album__icon"><img src="../../images/icons/play.svg" alt=""></div> Play Now';
  	}
};

// ======== /Как при нажатии воспроизвести музыку ========

// ======== Несколько песен с музыкой ========

var songs = ['../../songs/song1.mp3','../../songs/song2.mp3','../../songs/song3.mp3','../../songs/song4.mp3','../../songs/song5.mp3','../../songs/song6.mp3','../../songs/song7.mp3','../../songs/song8.mp3']
var song = new Audio();
var currentSong = 0;
song.src = songs[currentSong];
$('.songs__play').click(function(event) {
	currentSong = $(this).attr('id');
	song.src = songs[currentSong];
    song.play();
});
$('.songs__pause').click(function(event) {
    song.pause();
});

// ======== /Несколько песен с музыкой ========