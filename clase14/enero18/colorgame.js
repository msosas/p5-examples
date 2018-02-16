// Colorar este archivo al final, antes del cierre del body
// padding 30% en el css
// calcular el margen
// las variables no necesariamente van en el orden del enunciado

//antes de pasar al punto 10, dejar bien el titulo



// var color = ['rgb(144, 221, 2)', 'rgb(144, 221, 255)', 'rgb(144, 221, 255)', 'rgb(144, 221, 255)', 'rgb(144, 221, 255)', 'rgb(144, 221, 255)'] ;

var $squares = document.querySelectorAll('.square')
var $easyBtn = document.getElementById('easy-btn');
var $hardBtn = document.getElementById('hard-btn');
var $resetBtn = document.getElementById('reset');
var difficulty = 6;
var $message = document.getElementById('message');
var $title01 = document.getElementById('title01');
var gameStarted = false;
var color = generateRandomColors(difficulty);
var pickedColor = pickColor(color);

function changeColors(color) {
  for (var i = 0; i < $squares.length; i++) {
    $squares[i].classList.remove('hide-square');
    $squares[i].style.backgroundColor = color;        
  }
}

function pickColor(arr) {
  var randomIndex = Math.floor(Math.random() * difficulty);
  return arr[randomIndex];
}

function randomColor() {
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);

  return ('rgb(' + r + ', ' + g + ', ' + b +')');
}

function generateRandomColors(size) {
  var mockColors = []
  for (var i = 0; i < size; i++) {
    mockColors[i] = randomColor();
  }
  return mockColors;
}

function reset () {
  $message.innerText = '';
  $title01.style.backgroundColor = 'steelblue';
  color = generateRandomColors(difficulty);
  pickedColor = pickColor(color);
  document.getElementById('color-display').innerText = pickedColor;
  for (var i = 0; i < $squares.length; i++) {
    $squares[i].classList.add('hide');
  }
  for (var i = 0; i < difficulty; i++) {
    $squares[i].classList.remove('hide')
    $squares[i].style.backgroundColor = color[i];
  }
}

function main() {
  reset();
  for (var i = 0; i < difficulty; i++) {
    $squares[i].addEventListener('click', function() {
      var clickedColor = this.style.backgroundColor;
      console.log(pickedColor + ', ' + clickedColor);    
      if (clickedColor !== pickedColor) {
        this.style.backgroundColor = '#232323'
        this.classList.add('hide-square');
        $message.innerText = 'Try Again';
        // keep trying
      }
      else {
        changeColors(pickedColor);
        document.getElementById('message').innerText = 'Correct!';
        $title01.style.backgroundColor = pickedColor;
        $resetBtn.innerText = 'Play Again?'
        // won!
      }
    })
  }
}


main();



//***************************************** 10 


$easyBtn.addEventListener('click', function() {
  this.classList.add('selected');
  $hardBtn.classList.remove('selected');
  difficulty = 3;
  reset();
})

$hardBtn.addEventListener('click', function() {
  this.classList.add('selected')
  $easyBtn.classList.remove('selected');
  difficulty = 6;
  reset();
})

$resetBtn.addEventListener('click', function() {
  reset()
})
