/*
	Promgrammer = Keith Murphy 
	File = soundCloud.js
	date Created = 3-10-2015
	Last Mod = 3-10-2015
*/
$(document).ready(function() {	
		// This is going to start the user input 
		
	var trackArray = [];

	// THis is where alll the functions are for the search click events
	var searchButton = document.getElementById('searchButton');
	searchButton.addEventListener('click', function(evnt) {
			evnt.preventDefault();
			var searchedTitle = searchTitle();
			getTracks(searchedTitle);
	}, false);// End searchButton 
	
	// THis gets the value for the search input to send to the SC.get() function 
	var searchTitle = function() {
		var serachTitle = document.getElementById('serachTitle');
		var searchedTitle = serachTitle.value; 
		
		return searchedTitle;
	};
	
	// THis is going to initialize my key for the app
	SC.initialize({
		client_id: 'e9a719bdc5f31a321c113282cb48387d'
	});

	var getTracks = function(searchedTitle) {
		// This sets up the strings system for the SC.get() function 
		var titleString = "'" + searchedTitle + "'";
		var tracksString = '/tracks';
		
		SC.get(tracksString, {limit: 20, q: titleString }, function(tracks){
		  
		  
			// This outouts the tracks title to the li in the DOM
			var output = '';
			for (key in tracks) {
				output += '<li id="' + [key] + '">' +  tracks[key].title + '</li>';
			}
			// This creates the array used for user click 
			for (key in tracks) {
			 	trackArray.push(tracks[key].stream_url);
			}
			
			  // THis outputs the li searched for with the SC.get() function 
			  var update = document.getElementById('info');
			  update.innerHTML = output;
		}); // End SC.get 
	}; // End getTracks 
			  
	// This is where the user DBclicks for the track they want to stream 
	var title = document.querySelector('.info');
	title.addEventListener('click', function(e) {
		var trackStreamURI = findTrackStreamURI(e);
		trackStreamURI.toString();
		// This removes the 'stream' for the end of the Stream_URI 
		var pushTrackStreamURI = trackStreamURI.substring(26, trackStreamURI.length - 7);
		
		var pushedTrackStreamURI = '"' + pushTrackStreamURI + '"';
		// This is going to stop the Stream if they are allready playing 
		
		// var stringPushedTrackStreamURI = pushedTrackStreamURI.toString();
		// THis is where the stream magic happens 
		console.log(pushedTrackStreamURI);
		
		SC.stream('/tracks/213094795', function(sound){
			console.log(trackArray);
			sound.play();
		}); // End SC.strean
	}, false); // end the title click event
			  	
		// This is going to be the functions where the program checks to see which song they want to stream 
		var findTrackStreamURI = function(e) {
			if (e.srcElement.id === '0') {
			   return trackArray[0];
			} 
			else if (e.srcElement.id === '1') {
				 return trackArray[1];
			}
			else if (e.srcElement.id === '2') {
				 return trackArray[2];
			}
			else if (e.srcElement.id === '3') {
				 return trackArray[3];
			}
			else if (e.srcElement.id === '4') {
				 return trackArray[4];
			}
			else if (e.srcElement.id === '5') {
				 return trackArray[5];
			}
			else if (e.srcElement.id === '6') {
				 return trackArray[6];
			}
			else if (e.srcElement.id === '7') {
				 return trackArray[7];
			}
			else if (e.srcElement.id === '8') {
				 return trackArray[8];
			}
			else if (e.srcElement.id === '9') {
				 return trackArray[9];
			}
		};



}); // End Ready 

