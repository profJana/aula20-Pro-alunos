
const Engine = Matter.Engine; //referenciando Engine da biblioteca Matter, para usar motor de física
const World = Matter.World; //referenciando World da biblioteca Matter, para criar novos mundos
const Bodies = Matter.Bodies; //referenciando Bodies, para criar novos objetos que habitam o mundo
const Body = Matter.Body; //referenciando Body, para criar formatos

//variáveis que serão usadas ao longo do programa
let engine;
let world;
var ball;
var ground;
var rock;

function setup() {

  createCanvas(400, 400); //criando a tela
  engine = Engine.create(); //criando o motor de física
  world = engine.world; //criando um novo mundo

  var ball_options = { //criando propriedades para a bola
    restitution: 0.95, //elasticidade da bola, o quanto pula
    frictionAir: 0.01 // atrituto com o ar, altera a velocidade
  }

  ball = Bodies.circle(100, 10, 20, ball_options); //criando o corpo do tipo circulo, posicao x 100, y 10, raio 20 com as propriedades de fisica
  World.add(world, ball); //adicionando a bola ao mundo

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {

  background(51); //cor de fundo
  Engine.update(engine); //atualizando o motor de fisica a cada quadro

  ellipse(ball.position.x, ball.position.y, 20); //desenhando na tela o circulo
}

