$(document).ready(function() {
	//var myAudio = new Audio('_/audio/minorCause.mp3');
	// creating th handlers to the DOM
	var container = $('.container'),
		cover = $('.cover'),
		play = $('#play'),
		pause = $('#pause'),
		mute = $('#mute'),
		muted = $('#muted'),
		close = $('#close'),
		song = new Audio('_/audio/minorCause.mp3'),
		duration = song.duration;
	// This checks to see if the broswers can play mp3
	if (song.canPlayType('autio/mpeg;')) {
		song.type = 'autio/mpeg';
		song.src = '_/audio/minorCause.mp3';
	} else {
		song.type = 'audio/ogg';
		song.src = '_/audio/minorCause.mp3';
	}
	// this is where the magic happens for the play() and pause() functions
	play.on('click', function(e) {
		e.preventDefault();
		song.play();

		// We are using the jquery replaceWith Method to switch play button to pause 
		$(this).replaceWith('<a class="button gradient" id="pause" href="" tittle=""></a>');
		container.addClass('containerLarge');
		cover.addClass('coverLarge');
		$('#close').fadeIn(300);
		$('#seek').attr('max', song.duration);
	});
	
	pause.on('click', function(e) {
		e.preventDefault;
		song.pause();
		$(this).replaceWith('<a class="button gradient" id="play" href="" title=""></a>');
	});
	// This is for the mute effects 
	mute.on('click', function(e) {
		e.preventDefault;
		song.volume = 0;
		$(this).replaceWith('<a class="button gradient" id="muted" href="" title=""></a>');
	});
	muted.on('click', function(e) {
		e.preventDefault;
		song.volume = 1;
		$(this).replaceWith('<a class="button gradient" id="mute" href="" title=""></a>');
	});
}); // end ready 