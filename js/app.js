$(() => {

  var Game = Game || {};

  console.log('Hi');




  // const moveTimer =  window.setInterval(nextMove, 5000);
  const movesArr = [];
  let moveUp;
  let moveDown;
  let moveRight;
  let moveLeft;

  function moveTimer(){
    window.setInterval(nextMove, 2000);
  }

//I want to check which one between moveUp or moveDown or moveLeft or moveRight is defined each interval.


  function nextMove(){
    console.log('yo');

    let move = Math.random(); ///generate a random number for the computer to choose the next required move;
    if (move < 0.25 ){
      moveUp = move;
      moveDown = undefined;
      moveRight = undefined;
      moveLeft = undefined;
    }else if (move > 0.25 && move < 0.5){
      moveDown = move;
      moveUp = undefined;
      moveRight = undefined;
      moveLeft = undefined;
    }else if (move > 0.5 && move < 0.75){
      moveRight = move;
      moveDown = undefined;
      moveUp = undefined;
      moveLeft = undefined;
    }else{
      moveLeft = move;
      moveDown = undefined;
      moveRight = undefined;
      moveUp = undefined;
    }
    // console.log('move' + move);
    // console.log('move up ' + moveUp);
    // console.log('move down ' + moveDown);
    // console.log('move left ' + moveLeft);
    // console.log('move right ' + moveRight)
    if (moveUp !== undefined){
      console.log('YoUp!');
      $('#arrow').attr('src','images/arrows/arrow-icon-up.png');
    }else if(moveDown !== undefined){
      console.log('YoDown!');
      $('#arrow').attr('src','images/arrows/arrow-icon-down.png');
    }else if (moveLeft !== undefined){
      console.log('yoLeft!');
      $('#arrow').attr('src','images/arrows/arrow-icon-left.png');
    }else if (moveRight !== undefined){
      console.log('yoRight!');
      $('#arrow').attr('src','images/arrows/arrow-icon-right.png');
    }

  } // nextMove closing



  for (var i = 0; i <= movesArr.length; i++) {
    movesArr[i] = $(window).keypress(function(event){
      console.log(event.which);
      console.log('movesArr');
    });
  }
  // const $userMove = $(window).keypress(function(event){
  //   event.which;
  // });



  moveTimer();

































  // const $chrId = $('#chrId');
  //
  //
  // Game.gamemove = function() { //animation?!?
  //   $chrId.animate({
  //     left: '+500px'
  //   }, 1000);
  // };
  //
  // Game.keypress(Game.gameMove);



}); //doc ready closure
