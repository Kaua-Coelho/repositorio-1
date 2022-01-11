var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["db20d492-1161-4887-a48d-7b59f6ec481f"],"propsByKey":{"db20d492-1161-4887-a48d-7b59f6ec481f":{"name":"bronze_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RTJET6.nqd4s3Krg4TQzqywTrzJpWoaY/category_board_games_and_cards/bronze.png","frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":2,"version":"RTJET6.nqd4s3Krg4TQzqywTrzJpWoaY","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":516,"y":86},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RTJET6.nqd4s3Krg4TQzqywTrzJpWoaY/category_board_games_and_cards/bronze.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gamestate = "server";
var moeda = createSprite(200, 200);
moeda.setAnimation("bronze_1");
var trofeu = createSprite(334, 192, 20, 20);
var ball1 = createSprite(96, 240, 15, 15);
var ball2 = createSprite(153, 133, 15, 15);
var ball3 = createSprite(200, 240, 15, 15);
var ball4 = createSprite(250, 133, 15, 15);
var Sam = createSprite(40, 190, 17, 17);
var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,50,3);
  var wall11 = createSprite(18,190,3,40);
moeda.visible = false;
var wall12 = createSprite(361,190,3,40);
Sam.shapeColor = "Green";
ball4.shapeColor = "red";
ball3.shapeColor = "red";
ball2.shapeColor = "red";
ball1.shapeColor = "red";
trofeu.shapeColor = "yellow";
ball1.velocityY = -5;
ball2.velocityY = 5;
ball3.velocityY = -5;
ball4.velocityY = 5;
  
  function draw() {
    background("white");
    textSize(18);
    fill("marron");
    text("Pressione Espaço para atacar", 120, 180);
    if (Sam.isTouching(trofeu)) {
      ball1.velocityY = 0;
      ball2.velocityY = 0;
      ball3.velocityY = 0;
      ball4.velocityY = 0;
      moeda.visible = true;
    }
    if (keyDown("right")) {
      Sam.x = Sam.x+5;
    }
    if (keyDown("left")) {
      Sam.x = Sam.x-5;
    }
    if (Sam.isTouching(ball1) || Sam.isTouching(ball2) || Sam.isTouching(ball3) || Sam.isTouching(ball4)) {
      Reset();
    }
    createEdgeSprites();
    ball1.bounceOff(wall1);
    ball1.bounceOff(wall2);
    ball2.bounceOff(wall1);
    ball2.bounceOff(wall2);
    ball3.bounceOff(wall1);
    ball3.bounceOff(wall2);
    ball4.bounceOff(wall1);
    ball4.bounceOff(wall2);
    noStroke();
    fill("yellow");
    rect(310, 170, 48, 40);
    fill("lightblue");
    rect(19, 170, 48, 40);
    drawSprites();
    
  }
function Reset() {
  Sam.x = 40;
  Sam.y = 190;
}
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
