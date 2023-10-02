var capture;
var tracker
var w = 640;
var h = 480;
let initialDist44_50, initialDist24_26, initialDist20_63, initialDist47_53;
var positions;


function setup() {
  
  capture = createCapture({
    audio: false,
    video: {
      width: w,
      height: h
    }
  }, function() {
    console.log('capture ready.')
  });

  capture.elt.setAttribute('playsinline', '');
  createCanvas(w, h*2);
  capture.size(w, h);
  capture.hide();

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
  
  let btn = select('#captureBtn');
  btn.mousePressed(function() {
    console.log('Button Pressed'); 
    captureEmotion();
  });
}



function draw() {
  //background(0);
  image(capture, 0, 0, w, h);
  positions = tracker.getCurrentPosition();
    if (positions && positions.length == 71 && initialDist44_50 === undefined) {
    console.log('Setting Initial Distances');
    console.log('Positions length:', positions.length);
    console.log('Positions:', positions);
    initialDist44_50 = dist(positions[44][0], positions[44][1], positions[50][0], positions[50][1]);
    initialDist24_26 = dist(positions[24][0], positions[24][1], positions[26][0], positions[26][1]);
    initialDist20_63 = dist(positions[20][0], positions[20][1], positions[63][0], positions[63][1]);
    initialDist47_53 = dist(positions[47][0], positions[47][1], positions[53][0], positions[53][1]);
  }


  let outline = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let left_eyebrow = [15,16,17,18];
  let right_eyebrow = [19,20,21,22];
  let left_eye = [28,67,29,68,30,69,31,70];
  let right_eye = [23,63,24,64,25,65,26,66];
  let nose_height = [33,41,62];
  let nose = [34,35,36,42,37,43,38,39,40];
  let mouth_outer = [44,45,46,47,48,49,50,51,52,53,54,55];
  let mouth_inner = [44,61,60,59,50,58,57,56];


  noFill();
  stroke(255);
  strokeWeight(5.0);
  
  if (positions.length == 71) {
    beginShape();
    for (var i = 0; i < outline.length; i++) {
      vertex(positions[outline[i]][0], positions[outline[i]][1]);
    }
    endShape();
    
    beginShape();
    for( var i = 0; i < left_eyebrow.length; i++ ){
      vertex(positions[left_eyebrow[i]][0],
             positions[left_eyebrow[i]][1]);
    }
    endShape();
    
    beginShape();
    for( var i = 0; i < right_eyebrow.length; i++ ){
      vertex(positions[right_eyebrow[i]][0],
             positions[right_eyebrow[i]][1]);
    }
    endShape();
    
    beginShape();
    for( var i = 0; i < left_eye.length; i++ ){
      vertex(positions[left_eye[i]][0],
             positions[left_eye[i]][1]);
    }
    endShape(CLOSE);
    
    beginShape();
    for( var i = 0; i < right_eye.length; i++ ){
      vertex(positions[right_eye[i]][0],
             positions[right_eye[i]][1]);
    }
    endShape(CLOSE);
    
    beginShape();
    for( var i = 0; i < nose_height.length; i++ ){
      vertex(positions[nose_height[i]][0],
             positions[nose_height[i]][1]);
    }
    endShape(CLOSE);
    
    beginShape();
    for( var i = 0; i < nose.length; i++ ){
      vertex(positions[nose[i]][0],
             positions[nose[i]][1]);
    }
    endShape(CLOSE);
    
    beginShape();
    for( var i = 0; i < mouth_outer.length; i++ ){
      vertex(positions[mouth_outer[i]][0],
             positions[mouth_outer[i]][1]);
    }
    endShape(CLOSE);
    
    beginShape();
    for( var i = 0; i < mouth_inner.length; i++ ){
      vertex(positions[mouth_inner[i]][0],
             positions[mouth_inner[i]][1]);
    }
    endShape(CLOSE);
  }
}

function captureEmotion() {
  console.log('Capture Emotion Called'); 
  if (positions && positions.length == 71) {
    console.log('Positions Available'); 
    let dist44_50 = dist(positions[44][0], positions[44][1], positions[50][0], positions[50][1]);
    let dist24_26 = dist(positions[24][0], positions[24][1], positions[26][0], positions[26][1]);
    let dist20_63 = dist(positions[20][0], positions[20][1], positions[63][0], positions[63][1]);
    let dist47_53 = dist(positions[47][0], positions[47][1], positions[53][0], positions[53][1]);

    let emotion = 'neutral';
    let maxChange = 0;

    if (dist44_50 > initialDist44_50 && dist44_50 - initialDist44_50 > maxChange) {
      maxChange = dist44_50 - initialDist44_50;
      emotion = 'happy';
    }

    if (dist24_26 < initialDist24_26 && initialDist24_26 - dist24_26 > maxChange) {
      maxChange = initialDist24_26 - dist24_26;
      emotion = 'sad';
    }

    if (dist20_63 > initialDist20_63 && dist20_63 - initialDist20_63 > maxChange) {
      maxChange = dist20_63 - initialDist20_63;
      emotion = 'angry';
    }

    if (dist47_53 > initialDist47_53 && dist47_53 - initialDist47_53 > maxChange) {
      maxChange = dist47_53 - initialDist47_53;
      emotion = 'surprised';
    }
    console.log('Distances:', dist44_50, dist24_26, dist20_63, dist47_53);
console.log('Conditions:', dist44_50 - initialDist44_50 > maxChange, dist24_26 - initialDist24_26 > maxChange);

    // Display the emotion on a new page
    if (emotion) {
      window.location.href = `../Result/emotion.html?emotion=${emotion}`;
      console.log('Distances:', dist44_50, dist24_26, dist20_63, dist47_53);
      console.log('Determined Emotion:', emotion);
    }
    if (!emotion) {
  console.log('Unable to determine your emotion');
}
    
  } else {
    console.log('Positions Not Available or Incomplete');
  }
}
