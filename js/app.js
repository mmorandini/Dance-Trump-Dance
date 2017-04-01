$(() => {
  var Game = Game || {};
  let userMove = 0;
  let expectedMove = 0;
  let moveUp;
  let moveDown;
  let moveRight;
  let moveLeft;
  let scoreCounter = 0;

  function movesTimer(){
    window.setInterval(nextMove, 750);
  }

  function scoreCheck(){
    if (expectedMove === userMove){
      scoreCounter+=100;
      console.log(scoreCounter);
      $('#score').html(scoreCounter);
      $('#arrow').animate({height: '140px', opacity: '1'}, '100');
      $('#arrow').animate({height: '100px', opacity: '0.5'}, '100');
    }else{
      scoreCounter-=100;
      console.log(scoreCounter);
      $('#score').html(scoreCounter);
      $('#arrow').animate({height: '140px', opacity: '1', backgroundColor: 'red'}, '100');
      $('#arrow').animate({height: '100px', opacity: '0.5', backgroundColor: 'lime'}, '100');
    }
  }

  //I want to check which one between moveUp or moveDown or moveLeft or moveRight is defined each interval.
  function nextMove(){
    const move = Math.random();///generates a random number for the computer to choose the next required move;
    if (move < 0.25 ){
      moveUp = move;
      moveDown = undefined;
      moveRight = undefined;
      moveLeft = undefined;
      expectedMove = 119;

    }else if (move > 0.25 && move < 0.5){
      moveDown = move;
      moveUp = undefined;
      moveRight = undefined;
      moveLeft = undefined;
      expectedMove = 115;

    }else if (move > 0.5 && move < 0.75){
      moveRight = move;
      moveDown = undefined;
      moveUp = undefined;
      moveLeft = undefined;
      expectedMove = 100;

    }else{
      moveLeft = move;
      moveDown = undefined;
      moveRight = undefined;
      moveUp = undefined;
      expectedMove = 97;

    }
    //Picks the right arrow image.
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
  //collect values of the keys pressed by the user and store them into an array
  $(window).on('keypress', function(event) {
    userMove = event.which;
    console.log(event.which);
    console.log(userMove);
    console.log(expectedMove);
    scoreCheck();

    function dance() {
      if (event.which === 119){
        $('.dancer').attr('src','images/char/char5.png');
      }else if(event.which === 115){
        $('.dancer').attr('src','images/char/char2.png');
      }else if(event.which === 100){
        $('.dancer').attr('src','images/char/char3.png');
      }else{
        $('.dancer').attr('src','images/char/char4.png');
      }
    }
    dance();
  });
  //triggers the moves' timer

  movesTimer();





































}); //doc ready closure
