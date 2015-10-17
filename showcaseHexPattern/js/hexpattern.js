/*
	Programmer = Keith Murphy
	File = hexPattern.js
	Date Created = 2-16-2015
	Last Mod = 3-1-2015
*/

$(document).ready(function() { 
	// What I want this to do is have a few events built in for click mouseover and mouse off 
	// I want shapes to fade in and out and disspear when clicked 
	// Going to creat some effect methods
	// This creates the handler for the SVG shapes 	
	var s = Snap('#SVG');

	
//////////////////////////////////////////////////////////////////
	// Theses are going to be the base speeds for the line drawings 
	var aniLineSpeeds = {
		'slow': 5000,
		'mid': 3000,
		'fast': 1500
	}
	// These are going to be the line animations 
	var aniLines = {
		drawLine: function(line,x1,y1,x2,y2,fill,stroke,aniLineSpeeds,lineWidth,opacity) {
			line.animate({
				fill: fill,
				stroke: stroke,
				strokeWidth: lineWidth,
				opacity: opacity,
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2
			}, aniLineSpeeds , mina.easein);
			console.log(line)
		}

	};
	// handlers for the lines animations
	var lineCenterRightLeft = s.select('#lineCenterRightLeft'),
		lineCenterLeftRight = s.select('#lineCenterLeftRight'),
		lineCenterUpRight	= s.select('#lineCenterUpRight'),
		lineCenterUpLeft	= s.select('#lineCenterUpLeft');

		
	var lineEventMethods = {
		// This makes center lines center right and left
		centerLineAniAdd: function() {
		aniLines.drawLine(lineCenterRightLeft,40,500,500,500,'#999','#999',aniLineSpeeds.mid,12,.5);
		aniLines.drawLine(lineCenterLeftRight,960,500,500,500,'#999','#999',aniLineSpeeds.mid,12,.5);
		
		},
		centerLineAniRemove: function() {
		// This makes center lines center right and left
		aniLines.drawLine(lineCenterLeftRight,500,500,960,500,'#fff','#fff',aniLineSpeeds.mid,10,.4);
		aniLines.drawLine(lineCenterRightLeft,500,500,40,500,'#fff','#fff',aniLineSpeeds.mid,10,.4);
		},
		lineAniSecStageAdd: function() {
			// This is going to make the second stage of line animation 
		aniLines.drawLine(lineCenterUpRight,740,350,960,500,'#999','#999',aniLineSpeeds.mid,12,.5);
		}
	}
	// These are the events for the lines 
	$('#group5piece5').on('click', function() {
		//aniLines.drawLightLine(500,500,500,500);
		lineEventMethods.centerLineAniAdd();
		lineEventMethods.centerLineAniRemove();
	});
	// $('#group5piece5').on('dblclick', function() {
	// 	lineEventMethods.lineAniSecStageAdd();
	// });
///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
	var fillEffects = {
		darkToLight1 : function(shape, speed) {
			shape.animate({
			fill: '#65A58A'
			}, speed, mina.easein);
		},
		lightToDark1: function(shape, speed) {
			shape.animate({
				fill: '#044429'
			}, speed, mina.easeout);
		},
		darkTolight2: function(shape, speed) {
			shape.animate({
				fill: '#CBE3D9'
			}, speed, mina.easeout);
		},
		lightToDark2: function(shape, speed) {
			shape.animate({
				fill: '#044429'
			}, speed , mina.easein);
		},
		centerDesignClick1: function(shape, speed) {
			shape.animate({
				fill: '#90305A'
			}, speed, mina.easein);
		},
		bottomLeftCenterClick: function(shape, speed) {
			shape.animate({
				fill: '#90305A'
			}, speed, mina.easein);
		},
		removeShapes: function(shape, speed) {
			shape.animate({
				fill: '#fff'
			}, speed, mina.easeout);
		},
		testSounds: function(shape, speed, amps) {
			shape.animate({
				fill: amps
			}, speed, mina.easein);
		},
		resetFill: function(shape, speed) {
			shape.animate({
				fill: '#044429'
			}, speed, mina.easein);
		}
	};
	// These are going to be the base speeds for the fill animations 
	var aniFillSpeeds = {
		'slow': 5000,
		'mid': 2000,
		'fast': 1500
	};
	// This is going to change the fill colors of the center peices mouseenter
	var darkToLightCenter = function() {
		fillEffects.darkToLight1(group5piece8, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group5piece2, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group6piece3, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group4piece3, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group3piece4, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group3piece5, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group3piece6, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group7piece4, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group7piece5, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group7piece6, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group6piece7, aniFillSpeeds.mid);
		fillEffects.darkToLight1(group4piece7, aniFillSpeeds.mid);
	}
	var lightToDarkCenter = function() {
		fillEffects.lightToDark1(group5piece8, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group5piece2, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group6piece3, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group4piece3, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group3piece4, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group3piece5, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group3piece6, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group7piece4, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group7piece5, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group7piece6, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group6piece7, aniFillSpeeds.mid);
		fillEffects.lightToDark1(group4piece7, aniFillSpeeds.mid);
	}
// This is going to start the fillEffect style2
	var darkTolightInnerOuter = function() {
		fillEffects.darkTolight2(group9piece5, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group8piece5, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group8piece4, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group8piece6, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece3, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece2, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece1, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece1, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece2, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group2piece4, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group2piece5, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group2piece6, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group1piece5, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece3, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece7, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece8, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece9, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece7, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece8, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece9, aniFillSpeeds.mid);
	};
	var lightTodarkInnerOuter = function() {
		fillEffects.lightToDark2(group9piece5, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group8piece5, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group8piece4, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group8piece6, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece3, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece2, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece1, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece1, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece2, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group2piece4, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group2piece5, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group2piece6, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group1piece5, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece3, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece7, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece8, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece9, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece7, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece8, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece8, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece9, aniFillSpeeds.mid);

	};
	// THis is going to be the right side mouseover and out fill ani 
	var lightToDarkDownLeft = function() {
		fillEffects.lightToDark2(group1piece1, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group2piece2, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group2piece3, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece4, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece5, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group3piece6, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group2piece7, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group2piece8, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group1piece9, aniFillSpeeds.mid);

	};
	var darkToLightDownLeft = function() {
		fillEffects.darkTolight2(group1piece1, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group2piece2, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group2piece3, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece4, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece5, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group3piece6, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group2piece7, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group2piece8, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group1piece9, aniFillSpeeds.mid);

	};
	var lightToDarkDownRight = function() {
		fillEffects.lightToDark2(group9piece1, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group8piece2, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group8piece3, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece4, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece5, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group7piece6, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group8piece7, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group8piece8, aniFillSpeeds.mid);
		fillEffects.lightToDark2(group9piece9, aniFillSpeeds.mid);
	};
	var darkToLightDownRight = function() {
		fillEffects.darkTolight2(group9piece1, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group8piece2, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group8piece3, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece4, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece5, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group7piece6, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group8piece7, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group8piece8, aniFillSpeeds.mid);
		fillEffects.darkTolight2(group9piece9, aniFillSpeeds.mid);
	};
////////////////////////////////////////////////////////////////////////
	// This is going to be the click event for the center design 
	var centerDesign1 = function() {
		fillEffects.centerDesignClick1(group5piece5, aniFillSpeeds.fast);
		fillEffects.centerDesignClick1(group4piece4, aniFillSpeeds.fast);
		fillEffects.centerDesignClick1(group6piece4, aniFillSpeeds.fast);
		fillEffects.centerDesignClick1(group5piece6, aniFillSpeeds.fast);
		fillEffects.centerDesignClick1(group5piece5, aniFillSpeeds.fast);
	};
// This will remove the shpaes when their is a click event that is true 
	var removeCenterOnClick = function() {
		fillEffects.removeShapes(group5piece3, aniFillSpeeds.fast);
	};
// THis is ging to start the fill animation work from the centerBottom 
// THis is linked to click event that cahges colors to red 
	var bottomLeftCenterDesign = function() {
		fillEffects.bottomLeftCenterClick(group4piece6, aniFillSpeeds.fast);
		fillEffects.bottomLeftCenterClick(group3piece7, aniFillSpeeds.fast);
		fillEffects.bottomLeftCenterClick(group3piece8, aniFillSpeeds.fast);
		fillEffects.bottomLeftCenterClick(group2piece9, aniFillSpeeds.fast);
		fillEffects.bottomLeftCenterClick(group1piece9, aniFillSpeeds.fast);
	};
	var bottomRightCenterDesign = function() {
		fillEffects.bottomLeftCenterClick(group6piece6, aniFillSpeeds.fast);
		fillEffects.bottomLeftCenterClick(group7piece7, aniFillSpeeds.fast);
		fillEffects.bottomLeftCenterClick(group7piece8, aniFillSpeeds.fast);
		fillEffects.bottomLeftCenterClick(group8piece9, aniFillSpeeds.fast);
		fillEffects.bottomLeftCenterClick(group9piece9, aniFillSpeeds.fast);
	};
// This is going to start a click animation for removing shapes 
	var rightToleftRemoveShapes = function() {
		fillEffects.removeShapes(group8piece5, aniFillSpeeds.slow);
		fillEffects.removeShapes(group8piece6, aniFillSpeeds.slow);
		fillEffects.removeShapes(group8piece4, aniFillSpeeds.slow);
		fillEffects.removeShapes(group7piece3, aniFillSpeeds.slow);
		fillEffects.removeShapes(group6piece2, aniFillSpeeds.slow);
		fillEffects.removeShapes(group5piece1, aniFillSpeeds.slow);
		fillEffects.removeShapes(group4piece2, aniFillSpeeds.slow);
		fillEffects.removeShapes(group3piece3, aniFillSpeeds.slow);
		fillEffects.removeShapes(group2piece4, aniFillSpeeds.slow);
		fillEffects.removeShapes(group2piece5, aniFillSpeeds.slow);
		fillEffects.removeShapes(group2piece6, aniFillSpeeds.slow);
		fillEffects.removeShapes(group3piece7, aniFillSpeeds.slow);
		fillEffects.removeShapes(group4piece8, aniFillSpeeds.slow);
		fillEffects.removeShapes(group5piece9, aniFillSpeeds.slow);
		fillEffects.removeShapes(group6piece8, aniFillSpeeds.slow);
		fillEffects.removeShapes(group7piece7, aniFillSpeeds.slow);
		return true;
		
	}
//////////////////////////////////////////////////////
// THese will be the fluter effects with varing speeds 
// THis is for the center colunm hover effect  
	var oddGroupsFillEvent = $('#group5, #group7, #group3').mouseover(function() {
		lightTodarkInnerOuter();
	})
	.mouseout(function() {
		darkTolightInnerOuter();
		
	});
// This is goin got be the inner out fill style2 hover 
	var sidesCenterFillEvent = $('#group1, #group5, #group9').mouseover(function() {
		lightToDarkCenter();
	})
	.mouseout(function() {
		darkToLightCenter();
		
	});
	// This is going to be corner click events to fill shapes down right and left sides
	var downLeftSideFillEvent = $('#group1piece1, #group1piece9').mouseover(function() {
		lightToDarkDownLeft();
		lightToDarkDownRight();

	}).mouseout(function() {
		darkToLightDownLeft();
		darkToLightDownRight();
	});
	var downRightSideFillEvent = $('#group9piece1, #group9piece9').mouseover(function() {
		lightToDarkDownRight();
		lightToDarkDownLeft();

	}).mouseout(function() {
		darkToLightDownRight();
		darkToLightDownLeft();
	});

///////////////////////////////////////////////////
// THis is for the center Design piece
	var centerPieceClick =  $('#group5piece5').on('click', function() {
		centerDesign1();
		
		return true
	});

// This is going to start he animations for the reaching pieces out the of the centerBottom
	var removeOuterLeftClick = $('#group4piece6').on('click', function() {
		bottomLeftCenterDesign();
	});
	var removeOuterRightClick = $('#group6piece6').on('click', function() {
		bottomRightCenterDesign();
	});
// This is going to call the right Remove shapes event 
	var removeCenter = $('#group9piece5, #group1piece5, #group5piece1, #group5piece9').on('click', function() {
		var fillCenter = rightToleftRemoveShapes();
		if (fillCenter  === true) {
			centerDesign1();
		}
		return true;
	});
// I want this to remove the center pieces surrounding the middle piece if 
// if g9p5, g1p5, g5p1, g5p9 is clicked 
	if (removeCenter === true) {
		removeCenterOnClick();
	}
/////////////////////////////////////////////////////////////////////////////
// THis is the start of the audio elements of the piece 
$('#group6piece5').on('click', function() {
	// this resets the pieces to start fill 
	// lightToDarkDownLeft().stop(true, true);
	// lightToDarkDownRight().stop(true, true);
	// fillEffects.allPiecesRest();
	console.log(oddGroupsFillEvent);
	// if (oddGroupsFillEvent) {
	$('#group5, #group7, #group3').remove('mouseover mouseleave');
	// }
});






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
  }
 }













/////////////////////////////////////////////////////////////////////////////	
// Going to create the handlers for the groups 
// This doesn't seem to work that well won't effect groups of shapes 
	var group1 = s.select('#group1'),
		group2 = s.select('#group2'),
		group3 = s.selectAll('#group3'),
		group4 = s.selectAll('#group4'),
		group5 = s.selectAll('#group5'),
		group6 = s.selectAll('#group6'),
		group7 = s.selectAll('#group7'),
		group8 = s.selectAll('#group8'),
		group9 = s.selectAll('#group9');
	//These are the pieces 
	var test = s.select('#group2piece9');
	// This is group 1 
	var group1piece9 = s.select('#group1piece9'),
		group1piece8 = s.select('#group1piece8'),
		group1piece7 = s.select('#group1piece7'),
		group1piece6 = s.select('#group1piece6'),
		group1piece5 = s.select('#group1piece5'),
		group1piece4 = s.select('#group1piece4'),
		group1piece3 = s.select('#group1piece3'),
		group1piece2 = s.select('#group1piece2'),
		group1piece1 = s.select('#group1piece1');
	// This is group2
	var group2piece9 = s.select('#group2piece9'),
		group2piece8 = s.select('#group2piece8'),
		group2piece7 = s.select('#group2piece7'),
		group2piece6 = s.select('#group2piece6'),
		group2piece5 = s.select('#group2piece5'),
		group2piece4 = s.select('#group2piece4'),
		group2piece3 = s.select('#group2piece3'),
		group2piece2 = s.select('#group2piece2'),
		group2piece1 = s.select('#group2piece1');
	// This is group3
	var group3piece9 = s.select('#group3piece9'),
		group3piece8 = s.select('#group3piece8'),
		group3piece7 = s.select('#group3piece7'),
		group3piece6 = s.select('#group3piece6'),
		group3piece5 = s.select('#group3piece5'),
		group3piece4 = s.select('#group3piece4'),
		group3piece3 = s.select('#group3piece3'),
		group3piece2 = s.select('#group3piece2'),
		group3piece1 = s.select('#group3piece1');
	// This is group4
	var group4piece9 = s.select('#group4piece9'),
		group4piece8 = s.select('#group4piece8'),
		group4piece7 = s.select('#group4piece7'),
		group4piece6 = s.select('#group4piece6'),
		group4piece5 = s.select('#group4piece5'),
		group4piece4 = s.select('#group4piece4'),
		group4piece3 = s.select('#group4piece3'),
		group4piece2 = s.select('#group4piece2'),
		group4piece1 = s.select('#group4piece1');
	// This is group5
	var group5piece9 = s.select('#group5piece9'),
		group5piece8 = s.select('#group5piece8'),
		group5piece7 = s.select('#group5piece7'),
		group5piece6 = s.select('#group5piece6'),
		group5piece5 = s.select('#group5piece5'),
		group5piece4 = s.select('#group5piece4'),
		group5piece3 = s.select('#group5piece3'),
		group5piece2 = s.select('#group5piece2'),
		group5piece1 = s.select('#group5piece1');
	// This is group6
	var group6piece9 = s.select('#group6piece9'),
		group6piece8 = s.select('#group6piece8'),
		group6piece7 = s.select('#group6piece7'),
		group6piece6 = s.select('#group6piece6'),
		group6piece5 = s.select('#group6piece5'),
		group6piece4 = s.select('#group6piece4'),
		group6piece3 = s.select('#group6piece3'),
		group6piece2 = s.select('#group6piece2'),
		group6piece1 = s.select('#group6piece1');
	// This is group7
	var group7piece9 = s.select('#group7piece9'),
		group7piece8 = s.select('#group7piece8'),
		group7piece7 = s.select('#group7piece7'),
		group7piece6 = s.select('#group7piece6'),
		group7piece5 = s.select('#group7piece5'),
		group7piece4 = s.select('#group7piece4'),
		group7piece3 = s.select('#group7piece3'),
		group7piece2 = s.select('#group7piece2'),
		group7piece1 = s.select('#group7piece1');
	// This is group8
	var group8piece9 = s.select('#group8piece9'),
		group8piece8 = s.select('#group8piece8'),
		group8piece7 = s.select('#group8piece7'),
		group8piece6 = s.select('#group8piece6'),
		group8piece5 = s.select('#group8piece5'),
		group8piece4 = s.select('#group8piece4'),
		group8piece3 = s.select('#group8piece3'),
		group8piece2 = s.select('#group8piece2'),
		group8piece1 = s.select('#group8piece1');
	// This is group9
	var group9piece9 = s.select('#group9piece9'),
		group9piece8 = s.select('#group9piece8'),
		group9piece7 = s.select('#group9piece7'),
		group9piece6 = s.select('#group9piece6'),
		group9piece5 = s.select('#group9piece5'),
		group9piece4 = s.select('#group9piece4'),
		group9piece3 = s.select('#group9piece3'),
		group9piece2 = s.select('#group9piece2'),
		group9piece1 = s.select('#group9piece1');
	// interact will all pieces 
	var allPiecesRest = function() {
		// Group 1
		fillEffects.resetFill(group1piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group1piece1, aniFillSpeeds.mid);
		// Group 2
		fillEffects.resetFill(group2piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group2piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group2piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group2piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group2piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group2piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group2piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group2piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group2piece1, aniFillSpeeds.mid);
		// group 3
		fillEffects.resetFill(group3piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group3piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group3piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group3piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group3piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group3piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group3piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group3piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group3piece1, aniFillSpeeds.mid);
		// group 4
		fillEffects.resetFill(group4piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group4piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group4piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group4piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group4piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group4piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group4piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group4piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group4piece1, aniFillSpeeds.mid);
		// group 5 
		fillEffects.resetFill(group5piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group5piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group5piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group5piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group5piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group5piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group5piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group5piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group5piece1, aniFillSpeeds.mid);
		// group 6
		fillEffects.resetFill(group6piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group6piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group6piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group6piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group6piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group6piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group6piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group6piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group6piece1, aniFillSpeeds.mid);
		// group 7
		fillEffects.resetFill(group7piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group7piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group7piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group7piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group7piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group7piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group7piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group7piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group7piece1, aniFillSpeeds.mid);
		//group 8
		fillEffects.resetFill(group8piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group8piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group8piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group8piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group8piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group8piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group8piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group8piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group8piece1, aniFillSpeeds.mid);
		// group 9
		fillEffects.resetFill(group9piece9, aniFillSpeeds.mid);
		fillEffects.resetFill(group9piece8, aniFillSpeeds.mid);
		fillEffects.resetFill(group9piece7, aniFillSpeeds.mid);
		fillEffects.resetFill(group9piece6, aniFillSpeeds.mid);
		fillEffects.resetFill(group9piece5, aniFillSpeeds.mid);
		fillEffects.resetFill(group9piece4, aniFillSpeeds.mid);
		fillEffects.resetFill(group9piece3, aniFillSpeeds.mid);
		fillEffects.resetFill(group9piece2, aniFillSpeeds.mid);
		fillEffects.resetFill(group9piece1, aniFillSpeeds.mid);
	}
}); // end the ready 