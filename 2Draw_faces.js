// ----=  Faces  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

let maskImg;

function preload() {
  maskImg = loadImage('chromakopia mask.png'); // update path if needed
}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    // console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

// let noseTipX = face.keypoints[4].x;
// let noseTipY = face.keypoints[4].y;
// let mouthLeftX = face.keypoints[13].x;
// let mouthLeftY = face.keypoints[13].y;
// let eyeLeftX = face.keypoints[468].x;
// let eyeLeftY = face.keypoints[468].y;
/*
Start drawing on the face here
*/


imageMode(CENTER);
image(maskImg, faceCenterX, faceCenterY, faceWidth, faceheight);


noStroke();
fill(56,118,29); // green
triangle(
  face.keypoints[336].x, face.keypoints[336].y, // base left (top left of mask)
  face.keypoints[336].x + faceWidth * 0.25, face.keypoints[336].y - faceheight * 0.5, // tip (above mask)
  face.keypoints[336].x + faceWidth * 0.35, face.keypoints[336].y // base right (top left of mask)
);

// Right horn (connects to right top of mask)
triangle(
  face.keypoints[107].x, face.keypoints[107].y, // base right (top right of mask)
  face.keypoints[107].x - faceWidth * 0.25, face.keypoints[107].y - faceheight * 0.5, // tip (above mask)
  face.keypoints[107].x - faceWidth * 0.35, face.keypoints[107].y // base left (top right of mask)
);
    // noStroke()
    fill(56,118,29) // green
    beginShape()
    vertex(face.keypoints[127].x, face.keypoints[127].y)
    vertex(face.keypoints[34].x, face.keypoints[34].y)
    vertex(face.keypoints[139].x, face.keypoints[139].y)
    vertex(face.keypoints[162].x, face.keypoints[162].y)
    vertex(face.keypoints[21].x, face.keypoints[21].y)
    vertex(face.keypoints[54].x, face.keypoints[54].y)
    vertex(face.keypoints[103].x, face.keypoints[103].y)
    vertex(face.keypoints[67].x, face.keypoints[67].y)
    vertex(face.keypoints[109].x, face.keypoints[109].y)
    vertex(face.keypoints[10].x, face.keypoints[10].y)
    vertex(face.keypoints[338].x, face.keypoints[338].y)
    vertex(face.keypoints[297].x, face.keypoints[297].y)
    vertex(face.keypoints[332].x, face.keypoints[332].y)
    vertex(face.keypoints[284].x, face.keypoints[284].y)
    vertex(face.keypoints[251].x, face.keypoints[251].y)
    vertex(face.keypoints[389].x, face.keypoints[389].y)
    vertex(face.keypoints[356].x, face.keypoints[356].y)
    vertex(face.keypoints[454].x, face.keypoints[454].y)
    vertex(face.keypoints[323].x, face.keypoints[323].y)
    vertex(face.keypoints[361].x, face.keypoints[361].y)
    vertex(face.keypoints[288].x, face.keypoints[288].y)
    vertex(face.keypoints[397].x, face.keypoints[397].y)
    vertex(face.keypoints[365].x, face.keypoints[365].y)
    vertex(face.keypoints[379].x, face.keypoints[379].y)
    vertex(face.keypoints[378].x, face.keypoints[378].y)
    vertex(face.keypoints[400].x, face.keypoints[400].y)
    vertex(face.keypoints[377].x, face.keypoints[377].y)
    vertex(face.keypoints[152].x, face.keypoints[152].y)
    vertex(face.keypoints[148].x, face.keypoints[148].y)
    vertex(face.keypoints[176].x, face.keypoints[176].y)  
    vertex(face.keypoints[149].x, face.keypoints[149].y)  
    vertex(face.keypoints[150].x, face.keypoints[150].y)  
    vertex(face.keypoints[136].x, face.keypoints[136].y)  
    vertex(face.keypoints[172].x, face.keypoints[172].y)  
    vertex(face.keypoints[58].x, face.keypoints[58].y)  
    vertex(face.keypoints[132].x, face.keypoints[132].y)  
    vertex(face.keypoints[93].x, face.keypoints[93].y)  
    vertex(face.keypoints[234].x, face.keypoints[234].y)  
    vertex(face.keypoints[127].x, face.keypoints[127].y)
endShape(CLOSE);


erase();
// Eye holes
ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);
ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight);

// Mouth hole
ellipse(lipsCenterX, lipsCenterY, lipsWidth, lipsHeight);
noErase();


function fingerPuppet(x, y) {
  fill(255, 38, 219) // pink
  ellipse(x, y, 100, 20)
  ellipse(x, y, 20, 100)
  fill (24, 74, 240) // blue
  circle (x, y, 50) // draw center
  fill(255, 252, 48) // yellow
  ellipse(x, y, 20) // draw center 

}
// function fingerPuppet2 (x, y) {
//   fill(255, 38, 219) // pink
// ellipse(x, y, 150, 30)
// } 
function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}

// // Horns
// fill(56,118,29); // red horns, change color as you like


// Left horn (connects to left top of mask)
// noStroke();
// triangle(
//   face.keypoints[334].x, face.keypoints[334].y, // base left (top left of mask)
//   face.keypoints[334].x + faceWidth * 0.2, face.keypoints[334].y - faceheight * 0.5, // tip (above mask)
//   face.keypoints[334].x + faceWidth * 0.2, face.keypoints[334].y // base right (top left of mask)
// );

// // Right horn (connects to right top of mask)
// triangle(
//   face.keypoints[66].x, face.keypoints[66].y, // base right (top right of mask)
//   face.keypoints[66].x - faceWidth * 0.2, face.keypoints[66].y - faceheight * 0.5, // tip (above mask)
//   face.keypoints[66].x - faceWidth * 0.2, face.keypoints[66].y // base left (top right of mask)
// );
// // Left horn
// triangle(
//   faceCenterX - faceWidth * 0.4, faceCenterY - faceheight * 0.6, // base left
//   faceCenterX - faceWidth * 0.2, faceCenterY - faceheight * 0.95, // tip
//   faceCenterX - faceWidth * 0.1, faceCenterY - faceheight * 0.6  // base right
// );

// // Right horn
// triangle(
//   faceCenterX + faceWidth * 0.4, faceCenterY - faceheight * 0.6, // base right
//   faceCenterX + faceWidth * 0.2, faceCenterY - faceheight * 0.95, // tip
//   faceCenterX + faceWidth * 0.1, faceCenterY - faceheight * 0.6  // base left
// );

    // fill(get(leftEyeCenterX, leftEyeCenterY))

    // ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);
    // ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight);

    // ellipse(lipsCenterX, lipsCenterY, lipsWidth, lipsHeight);
    // // drawPoints(face.leftEye);
    // drawPoints(face.leftEyebrow);
    // drawPoints(face.lips);
    // drawPoints(face.rightEye);
    // drawPoints(face.rightEyebrow);

    // fingerPuppet(rightEyeCenterX,rightEyeCenterY);
    // fingerPuppet(leftEyeCenterX,leftEyeCenterY);

    // fingerPuppet2(mouthLeftX,mouthLeftY);


    // drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}