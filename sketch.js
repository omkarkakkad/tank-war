var bg_Image;

var playerTank; 
var playerTankUp_Image,playerTankLeft_Image,playerTankRight_Image,playerTankDown_Image;

var player2Tank;
var player2TankUp_Image,player2TankLeft_Image,player3TankRight_Image,playe4TankDown_Image;

var shooter;

var shooter_ImageUp,shooter_ImageLeft,shooter_ImageRight,shooter_ImageDown;

var player2Shooter;

var player2Shooter_ImageUp,player2Shooter_ImageLeft,player2enemyShooter_ImageRight,player2enemyShooter_ImageDown;

var shooter_GroupUp,shooterGroupLeft,shooterGroupRight,shooterGroupDown;

var player2Shooter_GroupUp,player2ShooterGroupLeft,player2ShooterGroupRight,player2ShooterGroupDown;


var solid_Brick1;
var solidBrick_Image;

var break_Brick1;
var breakBrick_Image;

var diamond_Image;

var shoot_Sound;
var hit_Sound;
var die_Sound;

function preload(){
  bg_Image = loadImage("bg.png");

  playerTankUp_Image = loadImage("playerTankUp.png");
  playerTankLeft_Image = loadImage("playerTankLeft.png");
  playerTankRight_Image = loadImage("playerTankRight.png");
  playerTankDown_Image = loadImage("playerTankDown.png");

  player2TankUp_Image = loadImage("player2TankUp.png");
  player2TankLeft_Image = loadImage("player2TankLeft.png");
  player2TankRight_Image = loadImage("player2TankRight.png");
  player2TankDown_Image = loadImage("player2TankDown.png");
  
  shooter_ImageUp = loadImage("bullet.png");
  shooter_ImageLeft = loadImage("bullet.png");
  shooter_ImageRight = loadImage("bullet.png");
  shooter_ImageDown = loadImage("bullet.png");

  player2Shooter_ImageUp = loadImage("player2Bullet.png");
  player2Shooter_ImageLeft = loadImage("player2Bullet.png");
  player2Shooter_ImageRight = loadImage("player2Bullet.png");
  player2Shooter_ImageDown = loadImage("player2Bullet.png");

  solidBrick_Image = loadImage("solid_Brick.jpg");
  breakBrick_Image = loadImage("break_Brick.jpg");

  diamond_Image = loadImage("diamond_Image.png");

  shoot_Sound = loadSound("shoot_Sound.mp3");
  hit_Sound = loadSound("hit_Sound.mp3");
  die_Sound = loadSound("die_Sound.mp3");

}

function setup(){
  canvas = createCanvas(750,850);

  leftEdge = createSprite(2,425,10,850);
  leftEdge.visible = false;

  rightEdge = createSprite(748,425,10,850);
  rightEdge.visible = false;

  topEdge = createSprite(375,5,750,10);
  topEdge.visible = false;

  bottomEdge = createSprite(375,848,750,10);
  bottomEdge.visible = false;



  solid_Brick1 = createSprite(30,600);
  solid_Brick1.addImage("solid",solidBrick_Image);
  solid_Brick1.scale = 1.1;

  break_Brick1 = createSprite(85,600);
  break_Brick1.addImage("break",breakBrick_Image);
  break_Brick1.scale = 1.1;

  break_Brick2 = createSprite(85,655);
  break_Brick2.addImage("break",breakBrick_Image);
  break_Brick2.scale = 1.1;

  break_Brick3 = createSprite(85,710);
  break_Brick3.addImage("break",breakBrick_Image);
  break_Brick3.scale = 1.1;

  break_Brick333 = createSprite(85,765);
  break_Brick333.addImage("break",breakBrick_Image);
  break_Brick333.scale = 1.1;

  break_Brick4 = createSprite(85,820);
  break_Brick4.addImage("break",breakBrick_Image);
  break_Brick4.scale = 1.1;
  
  break_Brick5 = createSprite(200,655);
  break_Brick5.addImage("break",breakBrick_Image);
  break_Brick5.scale = 1.1;

  break_Brick6 = createSprite(200,710);
  break_Brick6.addImage("break",breakBrick_Image);
  break_Brick6.scale = 1.1;

  break_Brick7 = createSprite(200,765);
  break_Brick7.addImage("break",breakBrick_Image);
  break_Brick7.scale = 1.1;

  solid_Brick2 = createSprite(255,545);
  solid_Brick2.addImage("solid",solidBrick_Image);
  solid_Brick2.scale = 1.1;

  solid_Brick3 = createSprite(255,600);
  solid_Brick3.addImage("solid",solidBrick_Image);
  solid_Brick3.scale = 1.1;

  break_Brick8 = createSprite(310,545);
  break_Brick8.addImage("break",breakBrick_Image);
  break_Brick8.scale = 1.1;

  break_Brick9 = createSprite(310,600);
  break_Brick9.addImage("break",breakBrick_Image);
  break_Brick9.scale = 1.1;

  break_Brick10 = createSprite(310,655);
  break_Brick10.addImage("break",breakBrick_Image);
  break_Brick10.scale = 1.1;

  break_Brick11 = createSprite(310,710);
  break_Brick11.addImage("break",breakBrick_Image);
  break_Brick11.scale = 1.1;

  break_Brick12 = createSprite(310,765);
  break_Brick12.addImage("break",breakBrick_Image);
  break_Brick12.scale = 1.1;

  break_Brick13 = createSprite(310,820);
  break_Brick13.addImage("break",breakBrick_Image);
  break_Brick13.scale = 1.1;

  break_Brick14 = createSprite(365,655);
  break_Brick14.addImage("break",breakBrick_Image);
  break_Brick14.scale = 1.1;

  break_Brick15 = createSprite(420,545);
  break_Brick15.addImage("break",breakBrick_Image);
  break_Brick15.scale = 1.1;

  break_Brick16 = createSprite(420,600);
  break_Brick16.addImage("break",breakBrick_Image);
  break_Brick16.scale = 1.1;

  break_Brick17 = createSprite(420,655);
  break_Brick17.addImage("break",breakBrick_Image);
  break_Brick17.scale = 1.1;

  break_Brick18 = createSprite(420,710);
  break_Brick18.addImage("break",breakBrick_Image);
  break_Brick18.scale = 1.1;

  break_Brick19 = createSprite(420,765);
  break_Brick19.addImage("break",breakBrick_Image);
  break_Brick19.scale = 1.1;

  break_Brick20 = createSprite(420,820);
  break_Brick20.addImage("break",breakBrick_Image);
  break_Brick20.scale = 1.1;

  solid_Brick4 = createSprite(420,490);
  solid_Brick4.addImage("solid",solidBrick_Image);
  solid_Brick4.scale = 1.1;

  solid_Brick5 = createSprite(475,435);
  solid_Brick5.addImage("solid",solidBrick_Image);
  solid_Brick5.scale = 1.1;

  break_Brick21 = createSprite(550,550);
  break_Brick21.addImage("break",breakBrick_Image);
  break_Brick21.scale = 1.1;
  
  break_Brick22 = createSprite(550,715);
  break_Brick22.addImage("break",breakBrick_Image);
  break_Brick22.scale = 1.1;

  solid_Brick6 = createSprite(605,660);
  solid_Brick6.addImage("solid",solidBrick_Image);
  solid_Brick6.scale = 1.1;

  break_Brick23 = createSprite(660,495);
  break_Brick23.addImage("break",breakBrick_Image);
  break_Brick23.scale = 1.1;

  break_Brick24 = createSprite(660,550);
  break_Brick24.addImage("break",breakBrick_Image);
  break_Brick24.scale = 1.1;

  break_Brick25 = createSprite(660,605);
  break_Brick25.addImage("break",breakBrick_Image);
  break_Brick25.scale = 1.1;

  break_Brick26 = createSprite(660,660);
  break_Brick26.addImage("break",breakBrick_Image);
  break_Brick26.scale = 1.1;

  break_Brick27 = createSprite(660,715);
  break_Brick27.addImage("break",breakBrick_Image);
  break_Brick27.scale = 1.1;

  break_Brick28 = createSprite(660,770);
  break_Brick28.addImage("break",breakBrick_Image);
  break_Brick28.scale = 1.1;

  break_Brick29 = createSprite(660,820);
  break_Brick29.addImage("break",breakBrick_Image);
  break_Brick29.scale = 1.1;

  solid_Brick7 = createSprite(720,350);
  solid_Brick7.addImage("solid",solidBrick_Image);
  solid_Brick7.scale = 1.1;

  break_Brick30 = createSprite(665,350);
  break_Brick30.addImage("break",breakBrick_Image);
  break_Brick30.scale = 1.1;

  break_Brick31 = createSprite(90,490);
  break_Brick31.addImage("break",breakBrick_Image);
  break_Brick31.scale = 1.1;

  break_Brick32 = createSprite(145,490);
  break_Brick32.addImage("break",breakBrick_Image);
  break_Brick32.scale = 1.1;

  break_Brick33 = createSprite(200,490);
  break_Brick33.addImage("break",breakBrick_Image);
  break_Brick33.scale = 1.1;

  break_Brick34 = createSprite(315,430);
  break_Brick34.addImage("break",breakBrick_Image);
  break_Brick34.scale = 1.1;

  solid_Brick8 = createSprite(370,375);
  solid_Brick8.addImage("solid",solidBrick_Image);
  solid_Brick8.scale = 1.1;

  break_Brick35 = createSprite(530,380);
  break_Brick35.addImage("break",breakBrick_Image);
  break_Brick35.scale = 1.1;

  solid_Brick9 = createSprite(530,325);
  solid_Brick9.addImage("solid",solidBrick_Image);
  solid_Brick9.scale = 1.1;

  break_Brick36 = createSprite(530,275);
  break_Brick36.addImage("break",breakBrick_Image);
  break_Brick36.scale = 1.1;

  break_Brick37 = createSprite(530,220);
  break_Brick37.addImage("break",breakBrick_Image);
  break_Brick37.scale = 1.1;

  solid_Brick10 = createSprite(585,275);
  solid_Brick10.addImage("solid",solidBrick_Image);
  solid_Brick10.scale = 1.1;

  break_Brick38 = createSprite(640,275);
  break_Brick38.addImage("break",breakBrick_Image);
  break_Brick38.scale = 1.1;
  
  break_Brick39 = createSprite(640,220);
  break_Brick39.addImage("break",breakBrick_Image);
  break_Brick39.scale = 1.1;

  solid_Brick11 = createSprite(400,30);
  solid_Brick11.addImage("solid",solidBrick_Image);
  solid_Brick11.scale = 1.1;

  break_Brick40 = createSprite(400,85);
  break_Brick40.addImage("break",breakBrick_Image);
  break_Brick40.scale = 1.1;
  
  break_Brick41 = createSprite(400,140);
  break_Brick41.addImage("break",breakBrick_Image);
  break_Brick41.scale = 1.1;

  break_Brick42 = createSprite(345,140);
  break_Brick42.addImage("break",breakBrick_Image);
  break_Brick42.scale = 1.1;

  solid_Brick12 = createSprite(200,30);
  solid_Brick12.addImage("solid",solidBrick_Image);
  solid_Brick12.scale = 1.1;

  solid_Brick13 = createSprite(200,85);
  solid_Brick13.addImage("solid",solidBrick_Image);
  solid_Brick13.scale = 1.1;

  solid_Brick14 = createSprite(200,140);
  solid_Brick14.addImage("solid",solidBrick_Image);
  solid_Brick14.scale = 1.1;

  break_Brick43 = createSprite(80,140);
  break_Brick43.addImage("break",breakBrick_Image);
  break_Brick43.scale = 1.1;

  break_Brick44 = createSprite(80,195);
  break_Brick44.addImage("break",breakBrick_Image);
  break_Brick44.scale = 1.1;

  break_Brick45 = createSprite(80,250);
  break_Brick45.addImage("break",breakBrick_Image);
  break_Brick45.scale = 1.1;

  break_Brick46 = createSprite(195,250);
  break_Brick46.addImage("break",breakBrick_Image);
  break_Brick46.scale = 1.1;

  break_Brick47 = createSprite(195,400);
  break_Brick47.addImage("break",breakBrick_Image);
  break_Brick47.scale = 1.1;

  break_Brick48 = createSprite(720,90);
  break_Brick48.addImage("break",breakBrick_Image);
  break_Brick48.scale = 1.1;

  break_Brick49 = createSprite(665,90);
  break_Brick49.addImage("break",breakBrick_Image);
  break_Brick49.scale = 1.1;

  break_Brick50 = createSprite(610,90);
  break_Brick50.addImage("break",breakBrick_Image);
  break_Brick50.scale = 1.1;

  
  diamond = createSprite(363,800);
  diamond.addImage("diamond",diamond_Image);
  diamond.scale = 0.6;

  playerTank = createSprite(100,50);

  playerTank.addImage("playerdown",playerTankDown_Image);
  playerTank.addImage("playerup",playerTankUp_Image);
  playerTank.addImage("playerleft",playerTankLeft_Image);
  playerTank.addImage("playerright",playerTankRight_Image);


  playerTank.scale = 0.8;

  player2Tank = createSprite(500,50);

  player2Tank.addImage("player2down",player2TankDown_Image);
  player2Tank.addImage("player2up",player2TankUp_Image);
  player2Tank.addImage("player2left",player2TankLeft_Image);
  player2Tank.addImage("player2right",player2TankRight_Image);


  player2Tank.scale =0.8;


  shooterGroupUp = new Group();
  shooterGroupLeft = new Group();
  shooterGroupRight = new Group();
  shooterGroupDown = new Group();

  player2ShooterGroupUp = new Group();
  player2ShooterGroupLeft = new Group();
  player2ShooterGroupRight = new Group();
  player2ShooterGroupDown = new Group();


}

function draw(){
  background(bg_Image);

  playerTank.collide(player2Tank);
  player2Tank.collide(playerTank);

  playerTank.collide(leftEdge);
  playerTank.collide(rightEdge);
  playerTank.collide(topEdge);
  playerTank.collide(bottomEdge);

  playerTank.collide(break_Brick1);
  playerTank.collide(break_Brick2);
  playerTank.collide(break_Brick3);
  playerTank.collide(break_Brick333);
  playerTank.collide(break_Brick4);
  playerTank.collide(break_Brick5);
  playerTank.collide(break_Brick6);
  playerTank.collide(break_Brick7);
  playerTank.collide(break_Brick8);
  playerTank.collide(break_Brick9);
  playerTank.collide(break_Brick10);
  playerTank.collide(break_Brick11);
  playerTank.collide(break_Brick12);
  playerTank.collide(break_Brick13);
  playerTank.collide(break_Brick14);
  playerTank.collide(break_Brick15);
  playerTank.collide(break_Brick16);
  playerTank.collide(break_Brick17);
  playerTank.collide(break_Brick18);
  playerTank.collide(break_Brick19);
  playerTank.collide(break_Brick20);
  playerTank.collide(break_Brick21);
  playerTank.collide(break_Brick22);
  playerTank.collide(break_Brick23);
  playerTank.collide(break_Brick24);
  playerTank.collide(break_Brick25);
  playerTank.collide(break_Brick26);
  playerTank.collide(break_Brick27);
  playerTank.collide(break_Brick28);
  playerTank.collide(break_Brick29);
  playerTank.collide(break_Brick30);
  playerTank.collide(break_Brick31);
  playerTank.collide(break_Brick32);
  playerTank.collide(break_Brick33);
  playerTank.collide(break_Brick34);
  playerTank.collide(break_Brick35);
  playerTank.collide(break_Brick36);
  playerTank.collide(break_Brick37);
  playerTank.collide(break_Brick38);
  playerTank.collide(break_Brick39);
  playerTank.collide(break_Brick40);
  playerTank.collide(break_Brick41);
  playerTank.collide(break_Brick42);
  playerTank.collide(break_Brick43);
  playerTank.collide(break_Brick44);
  playerTank.collide(break_Brick45);
  playerTank.collide(break_Brick46);
  playerTank.collide(break_Brick47);
  playerTank.collide(break_Brick48);
  playerTank.collide(break_Brick49);
  playerTank.collide(break_Brick50);
 
  playerTank.collide(solid_Brick1);
  playerTank.collide(solid_Brick2);
  playerTank.collide(solid_Brick3);
  playerTank.collide(solid_Brick4);
  playerTank.collide(solid_Brick5);
  playerTank.collide(solid_Brick6);
  playerTank.collide(solid_Brick7);
  playerTank.collide(solid_Brick8);
  playerTank.collide(solid_Brick9);
  playerTank.collide(solid_Brick10);
  playerTank.collide(solid_Brick11);
  playerTank.collide(solid_Brick12);
  playerTank.collide(solid_Brick13);
  playerTank.collide(solid_Brick14);

  player2Tank.collide(leftEdge);
  player2Tank.collide(rightEdge);
  player2Tank.collide(topEdge);
  player2Tank.collide(bottomEdge);

  player2Tank.collide(break_Brick1);
  player2Tank.collide(break_Brick2);
  player2Tank.collide(break_Brick3);
  player2Tank.collide(break_Brick333);
  player2Tank.collide(break_Brick4);
  player2Tank.collide(break_Brick5);
  player2Tank.collide(break_Brick6);
  player2Tank.collide(break_Brick7);
  player2Tank.collide(break_Brick8);
  player2Tank.collide(break_Brick9);
  player2Tank.collide(break_Brick10);
  player2Tank.collide(break_Brick11);
  player2Tank.collide(break_Brick12);
  player2Tank.collide(break_Brick13);
  player2Tank.collide(break_Brick14);
  player2Tank.collide(break_Brick15);
  player2Tank.collide(break_Brick16);
  player2Tank.collide(break_Brick17);
  player2Tank.collide(break_Brick18);
  player2Tank.collide(break_Brick19);
  player2Tank.collide(break_Brick20);
  player2Tank.collide(break_Brick21);
  player2Tank.collide(break_Brick22);
  player2Tank.collide(break_Brick23);
  player2Tank.collide(break_Brick24);
  player2Tank.collide(break_Brick25);
  player2Tank.collide(break_Brick26);
  player2Tank.collide(break_Brick27);
  player2Tank.collide(break_Brick28);
  player2Tank.collide(break_Brick29);
  player2Tank.collide(break_Brick30);
  player2Tank.collide(break_Brick31);
  player2Tank.collide(break_Brick32);
  player2Tank.collide(break_Brick33);
  player2Tank.collide(break_Brick34);
  player2Tank.collide(break_Brick35);
  player2Tank.collide(break_Brick36);
  player2Tank.collide(break_Brick37);
  player2Tank.collide(break_Brick38);
  player2Tank.collide(break_Brick39);
  player2Tank.collide(break_Brick40);
  player2Tank.collide(break_Brick41);
  player2Tank.collide(break_Brick42);
  player2Tank.collide(break_Brick43);
  player2Tank.collide(break_Brick44);
  player2Tank.collide(break_Brick45);
  player2Tank.collide(break_Brick46);
  player2Tank.collide(break_Brick47);
  player2Tank.collide(break_Brick48);
  player2Tank.collide(break_Brick49);
  player2Tank.collide(break_Brick50);
 
  player2Tank.collide(solid_Brick1);
  player2Tank.collide(solid_Brick2);
  player2Tank.collide(solid_Brick3);
  player2Tank.collide(solid_Brick4);
  player2Tank.collide(solid_Brick5);
  player2Tank.collide(solid_Brick6);
  player2Tank.collide(solid_Brick7);
  player2Tank.collide(solid_Brick8);
  player2Tank.collide(solid_Brick9);
  player2Tank.collide(solid_Brick10);
  player2Tank.collide(solid_Brick11);
  player2Tank.collide(solid_Brick12);
  player2Tank.collide(solid_Brick13);
  player2Tank.collide(solid_Brick14);

  if(playerTank.isTouching(diamond)){
    diamond.visible = false;

    playerTank.visible = false;
    player2Tank.destroy();

    fill("black");
    stroke("white");
    strokeWeight(5);
    textSize(55);
    text("player1 win",225,300);
  
    fill("black");
    stroke("white");
    strokeWeight(5);
    textSize(55);
    text("press f5 to play again",125,465);

    break_Brick1.destroy();
    break_Brick2.destroy();
    break_Brick3.destroy();
    break_Brick333.destroy();

    break_Brick4.destroy();
    break_Brick5.destroy();
    break_Brick6.destroy();
    break_Brick7.destroy();
    break_Brick8.destroy();
    break_Brick9.destroy();
    break_Brick10.destroy();
    break_Brick11.destroy();
    break_Brick12.destroy();
    break_Brick13.destroy();
    break_Brick14.destroy();
    break_Brick15.destroy();
    break_Brick16.destroy();
    break_Brick17.destroy();
    break_Brick18.destroy();
    break_Brick19.destroy();
    break_Brick20.destroy();
    break_Brick21.destroy();
    break_Brick22.destroy();
    break_Brick23.destroy();
    break_Brick24.destroy();
    break_Brick25.destroy();
    break_Brick26.destroy();
    break_Brick27.destroy();
    break_Brick28.destroy();
    break_Brick29.destroy();
    break_Brick30.destroy();
    break_Brick31.destroy();
    break_Brick32.destroy();
    break_Brick33.destroy();
    break_Brick34.destroy();
    break_Brick35.destroy();
    break_Brick36.destroy();
    break_Brick37.destroy();
    break_Brick38.destroy();
    break_Brick39.destroy();
    break_Brick40.destroy();
    break_Brick41.destroy();
    break_Brick42.destroy();
    break_Brick43.destroy();
    break_Brick44.destroy();
    break_Brick45.destroy();
    break_Brick46.destroy();
    break_Brick47.destroy();
    break_Brick48.destroy();
    break_Brick49.destroy();
    break_Brick50.destroy();

    solid_Brick1.destroy();
    solid_Brick2.destroy();
    solid_Brick3.destroy();
    solid_Brick4.destroy();
    solid_Brick5.destroy();
    solid_Brick6.destroy();
    solid_Brick7.destroy();
    solid_Brick8.destroy();
    solid_Brick9.destroy();
    solid_Brick10.destroy();
    solid_Brick11.destroy();
    solid_Brick12.destroy();
    solid_Brick13.destroy();
    solid_Brick14.destroy();




  }

  if(player2Tank.isTouching(diamond)){
    diamond.visible = false;
    player2Tank.visible = false;

    playerTank.destroy();

    fill("black");
    stroke("white");
    strokeWeight(5);
    textSize(55);
    text("player2 win",225,300);
  
    fill("black");
    stroke("white");
    strokeWeight(5);
    textSize(55);
    text("press f5 to play again",125,465);

    break_Brick1.destroy();
    break_Brick2.destroy();
    break_Brick3.destroy();
    break_Brick333.destroy();
    break_Brick4.destroy();
    break_Brick5.destroy();
    break_Brick6.destroy();
    break_Brick7.destroy();
    break_Brick8.destroy();
    break_Brick9.destroy();
    break_Brick10.destroy();
    break_Brick11.destroy();
    break_Brick12.destroy();
    break_Brick13.destroy();
    break_Brick14.destroy();
    break_Brick15.destroy();
    break_Brick16.destroy();
    break_Brick17.destroy();
    break_Brick18.destroy();
    break_Brick19.destroy();
    break_Brick20.destroy();
    break_Brick21.destroy();
    break_Brick22.destroy();
    break_Brick23.destroy();
    break_Brick24.destroy();
    break_Brick25.destroy();
    break_Brick26.destroy();
    break_Brick27.destroy();
    break_Brick28.destroy();
    break_Brick29.destroy();
    break_Brick30.destroy();
    break_Brick31.destroy();
    break_Brick32.destroy();
    break_Brick33.destroy();
    break_Brick34.destroy();
    break_Brick35.destroy();
    break_Brick36.destroy();
    break_Brick37.destroy();
    break_Brick38.destroy();
    break_Brick39.destroy();
    break_Brick40.destroy();
    break_Brick41.destroy();
    break_Brick42.destroy();
    break_Brick43.destroy();
    break_Brick44.destroy();
    break_Brick45.destroy();
    break_Brick46.destroy();
    break_Brick47.destroy();
    break_Brick48.destroy();
    break_Brick49.destroy();
    break_Brick50.destroy();

    solid_Brick1.destroy();
    solid_Brick2.destroy();
    solid_Brick3.destroy();
    solid_Brick4.destroy();
    solid_Brick5.destroy();
    solid_Brick6.destroy();
    solid_Brick7.destroy();
    solid_Brick8.destroy();
    solid_Brick9.destroy();
    solid_Brick10.destroy();
    solid_Brick11.destroy();
    solid_Brick12.destroy();
    solid_Brick13.destroy();
    solid_Brick14.destroy();


  }

  if(shooterGroupUp.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick333)){
    break_Brick333.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(solid_Brick1)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();
  }

  
  if(shooterGroupUp.isTouching(solid_Brick2)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick3)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick4)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick5)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick6)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick7)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();


  }

  
  if(shooterGroupUp.isTouching(solid_Brick8)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick9)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick10)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick11)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick12)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick13)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick14)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  if(shooterGroupLeft.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupLeft.destroyEach();
  }

  if(shooterGroupLeft.isTouching(break_Brick333)){
    break_Brick333.destroy();
    shooterGroupLeft.destroyEach();
  }

  if(shooterGroupLeft.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupLeft.destroyEach();
  }

  if(shooterGroupLeft.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupLeft.destroyEach();
  }

  if(shooterGroupLeft.isTouching(solid_Brick1)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick2)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick3)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick4)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick5)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick6)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick7)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick8)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick9)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick10)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick11)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick12)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick13)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick14)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  if(shooterGroupRight.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupRight.destroyEach();
    

  }

  if(shooterGroupRight.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick333)){
    break_Brick333.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(solid_Brick1)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick2)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick3)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick4)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick5)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick6)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick7)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick8)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick9)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick10)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick11)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick12)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick13)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick14)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

if(shooterGroupRight.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupRight.destroyEach();
    

  }

  if(shooterGroupRight.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick333)){
    break_Brick333.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(solid_Brick1)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick2)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick3)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick4)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick5)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick6)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick7)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick8)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick9)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick10)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick11)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick12)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick13)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick14)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  if(shooterGroupDown.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick333)){
    break_Brick333.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(solid_Brick1)){
    shooterGroupDown.destroyEach();
  }

  
  if(shooterGroupDown.isTouching(solid_Brick2)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }


  
  if(shooterGroupDown.isTouching(solid_Brick3)){
    shooterGroupDown.destroyEach();  
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick4)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick5)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick6)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick7)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick8)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick9)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick10)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick11)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick12)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick13)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick14)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }


  if(shooterGroupUp.isTouching(player2Tank)){
    player2Tank.destroy();
    shooterGroupUp.destroyEach();
    die_Sound.play();
  }


  if(shooterGroupRight.isTouching(player2Tank)){
    player2Tank.destroy();
    shooterGroupRight.destroyEach();
    die_Sound.play();

  }

  if(shooterGroupLeft.isTouching(player2Tank)){
    player2Tank.destroy();
    shooterGroupLeft.destroyEach();
    die_Sound.play();

  }

  if(shooterGroupDown.isTouching(player2Tank)){
    player2Tank.destroy();
    shooterGroupDown.destroyEach();
    die_Sound.play();

  }

  //player2

  if(player2ShooterGroupUp.isTouching(break_Brick1)){
    break_Brick1.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick2)){
    break_Brick2.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick3)){
    break_Brick3.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick333)){
    break_Brick333.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick4)){
    break_Brick4.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick5)){
    break_Brick5.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick6)){
    break_Brick6.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick7)){
    break_Brick7.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick8)){
    break_Brick8.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick9)){
    break_Brick9.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick10)){
    break_Brick10.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick11)){
    break_Brick11.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick12)){
    break_Brick12.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick13)){
    break_Brick13.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick14)){
    break_Brick14.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick15)){
    break_Brick15.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick16)){
    break_Brick16.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick17)){
    break_Brick17.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick18)){
    break_Brick18.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick19)){
    break_Brick19.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick20)){
    break_Brick20.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick21)){
    break_Brick21.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick22)){
    break_Brick22.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick23)){
    break_Brick23.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick24)){
    break_Brick24.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick25)){
    break_Brick25.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick26)){
    break_Brick26.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick27)){
    break_Brick27.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick28)){
    break_Brick28.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick29)){
    break_Brick29.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick30)){
    break_Brick30.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick31)){
    break_Brick31.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick33)){
    break_Brick33.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick34)){
    break_Brick34.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick35)){
    break_Brick35.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick36)){
    break_Brick36.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick37)){
    break_Brick37.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick38)){
    break_Brick38.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick39)){
    break_Brick39.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick40)){
    break_Brick40.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick41)){
    break_Brick41.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick42)){
    break_Brick42.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick43)){
    break_Brick43.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick44)){
    break_Brick44.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick45)){
    break_Brick45.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick46)){
    break_Brick46.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick47)){
    break_Brick47.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick48)){
    break_Brick48.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick49)){
    break_Brick49.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(solid_Brick1)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick2)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick3)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick4)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick5)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick6)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick7)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick8)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick9)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick10)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick11)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick12)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick13)){
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick14)){
    player2ShooterGroupUp.destroyEach();
  }



  if(player2ShooterGroupLeft.isTouching(break_Brick1)){
    break_Brick1.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick2)){
    break_Brick2.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick3)){
    break_Brick3.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick333)){
    break_Brick333.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick4)){
    break_Brick4.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick5)){
    break_Brick5.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick6)){
    break_Brick6.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick7)){
    break_Brick7.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick8)){
    break_Brick8.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick9)){
    break_Brick9.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick10)){
    break_Brick10.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick11)){
    break_Brick11.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick12)){
    break_Brick12.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick13)){
    break_Brick13.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick14)){
    break_Brick14.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick15)){
    break_Brick15.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick16)){
    break_Brick16.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick17)){
    break_Brick17.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick18)){
    break_Brick18.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick19)){
    break_Brick19.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick20)){
    break_Brick20.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick21)){
    break_Brick21.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick22)){
    break_Brick22.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick23)){
    break_Brick23.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick24)){
    break_Brick24.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick25)){
    break_Brick25.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick26)){
    break_Brick26.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick27)){
    break_Brick27.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick28)){
    break_Brick28.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick29)){
    break_Brick29.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick30)){
    break_Brick30.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick31)){
    break_Brick31.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick32)){
    break_Brick32.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick33)){
    break_Brick33.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick34)){
    break_Brick34.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick35)){
    break_Brick35.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick36)){
    break_Brick36.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick37)){
    break_Brick37.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick38)){
    break_Brick38.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick39)){
    break_Brick39.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick40)){
    break_Brick40.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick41)){
    break_Brick41.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick42)){
    break_Brick42.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick43)){
    break_Brick43.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick44)){
    break_Brick44.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick45)){
    break_Brick45.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick46)){
    break_Brick46.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick47)){
    break_Brick47.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick48)){
    break_Brick48.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick49)){
    break_Brick49.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(solid_Brick1)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick2)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick3)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick4)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick5)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick6)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick7)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick8)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick9)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick10)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick11)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick12)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick13)){
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick14)){
    player2ShooterGroupLeft.destroyEach();
  }




  if(player2ShooterGroupRight.isTouching(break_Brick1)){
    break_Brick1.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick2)){
    break_Brick2.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick3)){
    break_Brick3.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick333)){
    break_Brick333.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick4)){
    break_Brick4.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick5)){
    break_Brick5.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick6)){
    break_Brick6.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick7)){
    break_Brick7.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick8)){
    break_Brick8.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick9)){
    break_Brick9.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick10)){
    break_Brick10.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick11)){
    break_Brick11.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick12)){
    break_Brick12.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick13)){
    break_Brick13.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick14)){
    break_Brick14.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick15)){
    break_Brick15.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick16)){
    break_Brick16.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick17)){
    break_Brick17.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick18)){
    break_Brick18.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick19)){
    break_Brick19.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick20)){
    break_Brick20.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick21)){
    break_Brick21.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick22)){
    break_Brick22.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick23)){
    break_Brick23.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick24)){
    break_Brick24.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick25)){
    break_Brick25.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick26)){
    break_Brick26.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick27)){
    break_Brick27.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick28)){
    break_Brick28.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick29)){
    break_Brick29.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick30)){
    break_Brick30.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick31)){
    break_Brick31.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick32)){
    break_Brick32.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick33)){
    break_Brick33.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick34)){
    break_Brick34.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick35)){
    break_Brick35.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick36)){
    break_Brick36.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick37)){
    break_Brick37.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick38)){
    break_Brick38.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick39)){
    break_Brick39.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick40)){
    break_Brick40.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick41)){
    break_Brick41.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick42)){
    break_Brick42.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick43)){
    break_Brick43.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick44)){
    break_Brick44.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick45)){
    break_Brick45.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick46)){
    break_Brick46.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick47)){
    break_Brick47.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick48)){
    break_Brick48.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick49)){
    break_Brick49.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(solid_Brick1)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick2)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick3)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick4)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick5)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick6)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick7)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick8)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick9)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick10)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick11)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick12)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick13)){
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick14)){
    player2ShooterGroupRight.destroyEach();
  }




  if(player2ShooterGroupDown.isTouching(break_Brick1)){
    break_Brick1.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick2)){
    break_Brick2.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick3)){
    break_Brick3.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick333)){
    break_Brick333.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick4)){
    break_Brick4.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick5)){
    break_Brick5.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick6)){
    break_Brick6.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick7)){
    break_Brick7.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick8)){
    break_Brick8.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick9)){
    break_Brick9.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick10)){
    break_Brick10.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick11)){
    break_Brick11.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick12)){
    break_Brick12.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick13)){
    break_Brick13.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick14)){
    break_Brick14.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick15)){
    break_Brick15.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick16)){
    break_Brick16.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick17)){
    break_Brick17.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick18)){
    break_Brick18.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick19)){
    break_Brick19.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick20)){
    break_Brick20.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick21)){
    break_Brick21.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick22)){
    break_Brick22.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick23)){
    break_Brick23.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick24)){
    break_Brick24.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick25)){
    break_Brick25.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick26)){
    break_Brick26.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick27)){
    break_Brick27.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick28)){
    break_Brick28.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick29)){
    break_Brick29.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick30)){
    break_Brick30.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick31)){
    break_Brick31.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick32)){
    break_Brick32.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick33)){
    break_Brick33.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick34)){
    break_Brick34.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick35)){
    break_Brick35.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick36)){
    break_Brick36.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick37)){
    break_Brick37.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick38)){
    break_Brick38.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick39)){
    break_Brick39.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick40)){
    break_Brick40.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick41)){
    break_Brick41.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick42)){
    break_Brick42.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick43)){
    break_Brick43.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick44)){
    break_Brick44.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick45)){
    break_Brick45.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick46)){
    break_Brick46.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick47)){
    break_Brick47.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick48)){
    break_Brick48.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick49)){
    break_Brick49.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(solid_Brick1)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick2)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick3)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick4)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick5)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick6)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick7)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick8)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick9)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick10)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick11)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick12)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick13)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick14)){
    player2ShooterGroupDown.destroyEach();
  }


  


  if(player2ShooterGroupUp.isTouching(playerTank)){
    playerTank.destroy();
    player2ShooterGroupUp.destroyEach();
    die_Sound.play();
  }

  if(player2ShooterGroupLeft.isTouching(playerTank)){
    playerTank.destroy();
    player2ShooterGroupLeft.destroyEach();
    die_Sound.play();

  }

  if(player2ShooterGroupRight.isTouching(playerTank)){
    playerTank.destroy();
    player2ShooterGroupRight.destroyEach();
    die_Sound.play();
  }

  if(player2ShooterGroupDown.isTouching(playerTank)){
    playerTank.destroy();
    player2ShooterGroupDown.destroyEach();
    die_Sound.play();

  }
 
  
  if(keyDown("up_arrow")){
    playerTank.changeImage("playerup",playerTankUp_Image);
    playerTank.y = playerTank.y-4;
    
    if(keyDown("space")){
      shoot_Sound.play();
      createShooterUp();
    }

}

  if(keyDown("down_arrow")){
    playerTank.changeImage("playerdown",playerTankDown_Image);
    playerTank.y = playerTank.y+4;

    if(keyDown("space")){
      shoot_Sound.play();

      createShooterDown();
    }

  }

  if(keyDown("left_arrow")){
    playerTank.changeImage("playerleft",playerTankLeft_Image);
    playerTank.x = playerTank.x-4;

    if(keyDown("space")){
      shoot_Sound.play();

      createShooterLeft();
    }
   
    
  }

  if(keyDown("right_arrow")){
    playerTank.changeImage("playerright",playerTankRight_Image);
    playerTank.x = playerTank.x+4;

    if(keyDown("space")){
      shoot_Sound.play();

      createShooterRight();
    }
  
  }

  //player2

  if(keyDown("w")){
    player2Tank.changeImage("player2up",player2TankUp_Image);
    player2Tank.y = player2Tank.y-4;

    if(keyDown("i")){
      shoot_Sound.play();

      createPlayer2ShooterUp();
    }

}

  if(keyDown("s")){
    player2Tank.changeImage("player2down",player2TankDown_Image);
    player2Tank.y = player2Tank.y+4;

   if(keyDown("i")){
    shoot_Sound.play();

      createPlayer2ShooterDown();
    }

  }

  if(keyDown("a")){
    player2Tank.changeImage("player2left",player2TankLeft_Image);
    player2Tank.x = player2Tank.x-4;
    if(keyDown("i")){
      shoot_Sound.play();

      createPlayer2ShooterLeft();
    }
    
   
    
  }

  if(keyDown("d")){
    player2Tank.changeImage("player2right",player2TankRight_Image);
    player2Tank.x = player2Tank.x+4;
    if(keyDown("i")){
      shoot_Sound.play();

      createPlayer2ShooterRight();
    }
   
  
  }


  
  
  drawSprites();
}

function createShooterUp(){
  shooter = createSprite(playerTank.x,playerTank.y);
  shooter.addImage("fireup",shooter_ImageUp);
  playerTank.changeImage("playerup",playerTankUp_Image);

  shooterGroupUp.add(shooter);
  shooter.velocityY=-16;
  shooter.scale =  4.5;
  }

function createShooterLeft(){
  shooter = createSprite(playerTank.x,playerTank.y);
  shooter.addImage("fireleft",shooter_ImageLeft);
  playerTank.changeImage("playerleft",playerTankLeft_Image);

  shooterGroupLeft.add(shooter);
  shooter.velocityX=-16;
  shooter.scale =  4.5;
}

function createShooterRight(){
  shooter = createSprite(playerTank.x,playerTank.y);
  shooter.addImage("fireright",shooter_ImageRight);
  playerTank.changeImage("playerright",playerTankRight_Image);

  shooterGroupRight.add(shooter);
  shooter.velocityX=+16;
  shooter.scale = 4.5;
}

function createShooterDown(){
  shooter = createSprite(playerTank.x,playerTank.y);
  shooter.addImage("firedown",shooter_ImageDown);
  playerTank.changeImage("playerdown",playerTankDown_Image);

  shooterGroupDown.add(shooter);
  shooter.velocityY=+16;
  shooter.scale = 4.5;
}

//player2

function createPlayer2ShooterUp(){
  player2Shooter = createSprite(player2Tank.x,player2Tank.y);
  player2Shooter.addImage("up",player2Shooter_ImageUp);
  playerTank.changeImage("player2up",player2TankUp_Image);

  player2ShooterGroupUp.add(player2Shooter);
  player2Shooter.velocityY=-16;
  player2Shooter.scale =  4.5;
  }

function createPlayer2ShooterLeft(){
  player2Shooter = createSprite(player2Tank.x,player2Tank.y);
  player2Shooter.addImage("left",player2Shooter_ImageLeft);
  playerTank.changeImage("player2left",player2TankLeft_Image);

  player2ShooterGroupLeft.add(player2Shooter);
  player2Shooter.velocityX=-16;
  player2Shooter.scale = 4.5;
}

function createPlayer2ShooterRight(){
  player2Shooter = createSprite(player2Tank.x,player2Tank.y);
  player2Shooter.addImage("right",player2Shooter_ImageRight);
  playerTank.changeImage("player2right",player2TankRight_Image);

  player2ShooterGroupRight.add(player2Shooter);
  player2Shooter.velocityX=+16;
  player2Shooter.scale = 4.5;
}

function createPlayer2ShooterDown(){
  player2Shooter = createSprite(player2Tank.x,player2Tank.y);
  player2Shooter.addImage("down",player2Shooter_ImageDown);
  playerTank.changeImage("player2down",player2TankDown_Image);

  player2ShooterGroupDown.add(player2Shooter);
  player2Shooter.velocityY=+16;
  player2Shooter.scale = 4.5;
}