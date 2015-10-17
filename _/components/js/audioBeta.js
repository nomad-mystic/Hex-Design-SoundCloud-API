/*
	Promgrammer = Keith Murphy 
	File = audioBeta.js
	date Created = 3-10-2015
	Last Mod = 3-10-2015
*/
////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
var context = new AudioContext();

// Here's where most of the work happens
function processAudio(e) {
  var buffer = e.inputBuffer.getChannelData(0);
  var out = e.outputBuffer.getChannelData(0);
  var amp = 0;

  // Iterate through buffer to get the max amplitude for this frame
  for (var i = 0; i < buffer.length; i++) {
    var loud = Math.abs(buffer[i]);
    if(loud > amp) {
      amp = loud;
    }
    // write input samples to output unchanged
    out[i] = buffer[i];
  } // end for loop 
   //////////////////////////////////////////////////////
   var fillEffects = {
		fills : function(shape, color) {
			shape.animate({
			fill: color
			}, 2000, mina.easein);
		}
	}
  	
  



  // set the svg circle's radius according to the audio's amplitude
  
  // circle.setAttribute('stroke-width', 1  + (amp * 2));
  var strokeWidth = 5  + (amp * 15);
  
  circle.setAttribute('r', 50 + (amp * 5));
  
  // set the circle's color according to the audio's amplitude
  var color = Math.round(amp * 100);
  color = 'rgb(' + 35 + ',' + color + ',' + 35 + ')';
  //clickShape1.setAttribute('fill', color);
  
  //console.log(amp);
  // testing out some amp settings
  if (amp > .50) {
  	clickShape2.setAttribute('fill', color);
  } else {
  	clickShape2.setAttribute('fill', '#000');
  }
}// end audioprocessor 

var clickShape2 = document.getElementById('group1piece4');
var clickShape1 = document.getElementById('group1piece5');
 

 //////////////////////////////////
clickShape1.addEventListener('click', function(amp) {
	var circle = document.getElementById('circle');
  	
  // Add an audio element
  var audio = new Audio();
  audio.src = '_/audio/minorCause.mp3';
  audio.controls = true;
  audio.preload = true;
  document.body.appendChild(audio);


  audio.addEventListener('canplaythrough',function() {
    var node = context.createMediaElementSource(audio);

    // create a node that will handle the animation, but won't alter the audio
    // in any way        
    var processor = context.createScriptProcessor(2048,1,1);
    processor.onaudioprocess = processAudio;

    // connect the audio element to the node responsible for the animation
    node.connect(processor);

    // connect the "animation" node to the output
    processor.connect(context.destination);

    // play the sound
    audio.play();
  });
});
////////////////////////////////////////////////////////////////////////////////////////