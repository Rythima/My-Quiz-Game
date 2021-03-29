var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
play(){
  questionElements.hide();
  textSize(30);
  text("The score is", 120, 100)
  contestant.contestantInfo();
  if(allContestants!== undefined){
    fill("blue");
    textSize(20);
    text("*NOTE : contestant who answered correct are highlighted in green color!",130,230);
     }
  }