$(() => {

  var Game = Game || {};

  let userMove      = 0;
  let expectedMove  = 0;
  let moveUp;
  let moveDown;
  let moveRight;
  let moveLeft;
  let scoreCounter  = 0;
  const $gameFooter = $('.game-footer');
  const arrows      = [];
  let imgSrc;
  const upSrc       = 'images/arrows/arrow-icon-up.png';
  const downSrc     = 'images/arrows/arrow-icon-down.png';
  const leftSrc     = 'images/arrows/arrow-icon-left.png';
  const rightSrc    = 'images/arrows/arrow-icon-right.png';


  $('#start-btn').on('click', function(){
    $(this).css('display','none');
    $('.first').css('display','none');
    $('h2').css('display','none');
    $('header').css({
      'paddingTop': '40px',
      'height': '100px',
      'backgroundColor': 'tomato'
    });
    $('h1').css('color','white');
    $('body').css('backgroundColor','tomato');
    $('#game-wrapper').css({ display: 'block'});
    // document.getElementById('audio').play();

    function movesTimer(){
      window.setInterval(nextMove, 2000);
    }

    function nextMove(){

      const random = Math.random();///generates a random number for the computer to choose the next required move;
      if (random < 0.25 ){
        moveUp = random;
        moveDown = undefined;
        moveRight = undefined;
        moveLeft = undefined;

      } else if (random > 0.25 && random < 0.5){
        moveDown = random;
        moveUp = undefined;
        moveRight = undefined;
        moveLeft = undefined;

      } else if (random > 0.5 && random < 0.75){
        moveRight = random;
        moveDown = undefined;
        moveUp = undefined;
        moveLeft = undefined;

      } else{
        moveLeft = random;
        moveDown = undefined;
        moveRight = undefined;
        moveUp = undefined;
      }

//I need to take the src of the image with class danceNow and check whether this is top right left or bottom.
//then with an if statement assign the right expected move to each element found.

      function createArrows(){
        const $img = $('<img>');
        if (moveUp !== undefined){
          $img.attr('src', upSrc);
          $img.attr('data', '38');
          arrows.push($img);
        } else if(moveDown !== undefined){
          $img.attr('src',downSrc);
          $img.attr('data', '40');
          arrows.push($img);

        } else if (moveLeft !== undefined){
          $img.attr('src',leftSrc);
          $img.attr('data', '37');
          arrows.push($img);

        } else if (moveRight !== undefined){
          $img.attr('src',rightSrc);
          $img.attr('data', '39');
          arrows.push($img);

        }

        $gameFooter.append($img);
        $img.addClass('arrow');
        $img.animate({ left: `${$gameFooter.width() + $img.width() }px`},
          {
            duration: 15000,
            step: activateButtons,
            complete: removeAnimations
          });

        function removeAnimations() {
          $img.remove();
          arrows.shift();
        }

        function activateButtons() {
          const elemLeft = $(this).offset().left;
          if (elemLeft > ($gameFooter.width()*0.41) && elemLeft < ($gameFooter.width()*0.45)) {
            $(this).addClass('danceNow');
          } else if (elemLeft > ($gameFooter.width()*0.45) ) {
            $(this).removeClass('danceNow');
          }
        }

      } //end of createArrows
      createArrows();

      function innerTimer(){
        window.setInterval(scanSrc, 1000);
      }

      function scanSrc(){
        imgSrc = $('.danceNow').attr('src');
        console.log(imgSrc, upSrc)
        if (imgSrc === upSrc){
          expectedMove = 38;
        } else if(imgSrc === downSrc){
          expectedMove = 40;
        } else if(imgSrc === leftSrc){
          expectedMove = 37;
        } else {
          expectedMove = 39;
        }
      }
      innerTimer();
    } // nextMove closing

    function scoreCheck(){
      console.log(expectedMove, userMove, expectedMove === userMove);
      if (expectedMove === userMove){
        scoreCounter+=100;
        console.log(scoreCounter);
        $('#score').html(scoreCounter);
        $('.danceNow').clearQueue();
        $('.danceNow').animate({opacity: '1', backgroundColor: 'lime'}, '20');
        $('.danceNow').animate({opacity: '0.5', backgroundColor: 'transparent'}, '20');
      }else{
        scoreCounter-=100;
        console.log(scoreCounter);
        $('#score').html(scoreCounter);
        $('.danceNow').clearQueue();
        $('.danceNow').animate({opacity: '1', backgroundColor: 'red'}, '20');
        $('.danceNow').animate({opacity: '0.5', backgroundColor: 'transparent'}, '20');
      }
    }///scoreCheck ends

    $(document).on('keydown', function(e) {
      userMove = e.which;
      scoreCheck();
      switch(e.which) {
        case 37: // left
          $('.dancer').attr('src','images/char/TumpsDance11.png');
          break;
        case 38: // up
          $('.dancer').attr('src','images/char/TumpsDance20.png');
          break;
        case 39: // right
          $('.dancer').attr('src','images/char/TumpsDance10.png');
          break;
        case 40: // down
          $('.dancer').attr('src','images/char/TumpsDance14.png');
          break;
        default: return; // exit this handler for other keys
      }
      setTimeout(()=>{
        $('.dancer').attr('src','images/char/TumpsDance1.png');
      }, 500);
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////
    // function changeBackground(){
    //   window.setInterval(pickColor,150);
    // }
    // function pickColor(){
    //   var color = 'rgb(' + Math.floor(Math.random() * 255) + ','
    //     + Math.floor(Math.random() * 255) + ','
    //     + Math.floor(Math.random() * 255) + ')';
    //   $('#game-wrapper').css('backgroundColor', color);
    // }
    // changeBackground();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    movesTimer();//triggers the moves' timer


  });///end of click listener

}); //doc ready closure
