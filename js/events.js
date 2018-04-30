//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
<<<<<<< HEAD
    $('img').addClass("tasty");
  });
}

function pressIt() {
   $('input').on('keydown', function(key) {
     if (parseInt(key.which) === 71) {
       alert('G has been pressed.');
     }
   });
}

function submitIt() {
  $('form').on("submit", function() {
    alert('Your form is going to be submitted now.');
=======
    $('img').append('class="tasty"');
>>>>>>> d6dd039397ccd618f636637c80ed0b4bd216b862
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
