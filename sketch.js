var bola, pista, pedra, ponto;

function preload(){
bola = loadImage("bola-vermelha.png");
pista = loadImage("Pista.png");
pedra = loadImage("Pedra.png");
ponto = loadImage("Esmeralda.png");
}

function setup() {
 createCanvas(400,400);

 ground = createSprite(200,210);
 ground.addImage("ground",pista);
 ground.scale = 1.9;

 corredor = createSprite(30,200);
 corredor.addImage("corredor",bola);
 corredor.scale = 0.04;

 var rand =  Math.round(random(1,100));
 console.log(rand);
 score = 0;

 

}

function draw() {
 background("gray");
 drawSprites();
 spawnObstaculo();
 spawnEsmeralda();
 console.log(frameCount);
 text("Score: "+score,5,20);
 corredor.y = World.mouseY;

 
}

function spawnObstaculo(){
   if(frameCount%50===0){
   obstaculo = createSprite(411,222);
   obstaculo.addImage("obstaculo",pedra);
   obstaculo.scale = 0.2;
   obstaculo.velocityX=-7;
   obstaculo.y=Math.round(random(30,370));
   obstaculo.lifetime = 89;
  }
  
}

function spawnEsmeralda(){
  if(frameCount%300===0){
    esmeralda = createSprite(410,222);
    esmeralda.addImage("esmeralda",ponto);
    esmeralda.scale = 0.1;
    esmeralda.velocityX=-5;
    esmeralda.y=Math.round(random(30,370));
    esmeralda.lifetime = 140;
  }
  
}

function debug(){

}