<h5>Matteo Morandini</h5>


 <img src="https://raw.githubusercontent.com/mmorandini/wdi-project-1/master/images/other/DTD-background.png">
 

<small>My first project for the WDI course at General Assembly London.</small>
<p>Online game built using <strong>ES6 Javascript</strong> for the logic, <strong>CSS3</strong> for the layout, and <strong>HTML5</strong> for the structure.</p>


<h2>Objectives</h2>

My goal was to build a simple-but-effective game that was fun to play (it is a game afterall!) but I also wanted to make it attractive and "trendy" in a way. Hence the topic chosen. 

I was obviously inspired by a cult such as "Dance Revolution", which I then transformed in this outragious, politically in-correct masterpiece.


<h2>Rules</h2>

The scope of TDT is to follow randomly generated dance moves, and try to matching them with the directional arrows on the keyboard.

The user is given a starting time of 15 secs, which will either increase by five is the entered move matches the expected move, or decrease by ten if it doesn't.

<h2>Planning</h2>

The planning took place on a Friday, right after I'd chosen what game I was going to build.

I came out with a first guideline to follow, in order to build the game logic:

- Think of a way for randomly generating the required moves.
- Find out how know when the user is pressing a key, and which key it is, and then compare it with the required move.
- Create a timer.
- Add styling.

<h2>Development</h2>

I'm now going to explain the logic of the game.

For generating the required moves I have basically generated a random number using Math.random, and I set the function to fire every 600ms using an intervall.

```
function nextMove(){
  // generates a random number for the computer to choose the next required move;
  const random = Math.random();
  if (random < 0.225 ){
    createArrow('up');
  } else if (random > 0.225 && random < 0.45){
    createArrow('down');
  } else if (random > 0.45 && random < 0.675){
    createArrow('right');
  } else if (random > 0.675 && random < 0.9){
    createArrow('left');
  } else {
    createArrow('space');
  }

}

```

There is a 90% chance that the next required move will be one of the directional arrows (22.5% for each of them), and then a 10% of chance that the next required move will be the special move, which the user will have to match using the space bar rather than one of the arrows.

I have then created a function to get the user input, and gets the ASCII value of that particular key and changes the image of the character, making it dance:

```
function userMoves(e) {
  userMove = e.which;

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
    case 32: // space
      $('.dancer').attr('src','images/char/Punte.png');
      break;
    default: return; // exit this handler for other keys
  }

```

To check the user's input against the required move I then did: 

```
function scoreCheck(userMove){
  if ($activeArrow === undefined) return;

  expectedMove = (parseFloat($activeArrow.attr('data')));
  if (timeLeft > 0){
    if (expectedMove === userMove){
    timeLeft += 3;
    $score.html(timeLeft);
    $activeArrow.addClass('hit');
    } else if (expectedMove !== userMove || userMove === 0){
      if (timeLeft >= 10){
        timeLeft -= 10;
        $score.html(timeLeft);
        $activeArrow.addClass('fail');
      } else {
        timeLeft -= timeLeft;
        $score.html(timeLeft);
        $activeArrow.addClass('fail');
      }
    
    }
  } else return;
  
}

```
Note that I had previously added a number (37, 38, 39, 40 or 32) to the attribute "data" of the object arrow, so that when one of the arrows would become active by reaching the center of the screen, I just needed to check the value of the user input against the value of `$activeArrow.attr('data')`.

<h2>Technologies</h2>

- Javascript
- HTML5
- CSS3
- jQuery

-----------------------------------------------------------------------------

Copyright © 2017 Matteo Morandini
