
//json
var userData = {
  name:'',
  email:'',
  html: {likes:[], dislikes:[]},
  css: {likes:[], dislikes:[]},
  js: {likes:[], dislikes:[]},
  strength:{css:'',js:'',html:''},
  currentQuestion: '#welcome'
  //have to look in the logic of the above line
};
console.log(localStorage.getItem('userData'));

if(localStorage.getItem('userData')){
  console.log("accessing localStorage");
  userData = JSON.parse(localStorage.getItem('userData'));
  $('#welcome').hide();
  $(userData.currentQuestion).show();
  $('#name').val(userData.name);
  $('#email').val(userData.email);
} else{
  localStorage.setItem('userData', JSON.stringify(userData)); //specify the key and the value here
}

//start button onClick
$('#start').click(function(){
  console.log("start");
  $('#welcome').hide();
  $('#q1').show();
  userData.currentQuestion ="#q1" ;
  localStorage.setItem('userData', JSON.stringify(userData));
});

//Checking name input value
$('name').change(function(event){
  console.log(s('#name').val());
})

//checking email input value
$('email').change(function (event) {
  console.log(s('#email').val());
  //check email validation otherwise throw an error in "q1Next"

})

//Q1 Next button onClick
$('#q1Next').click(function(){
  console.log("Q1 NEXT");
  if($('#name').val() && $('#email').val()){
    userData.name = $('#name').val();
    userData.email = $('#email').val();
    localStorage.setItem('userData',JSON.stringify(userData)); //converts object to a string
    $('#q1').hide();
    $('#q2').show();
    }
  else{
      alert('Pleast enter your name & email.') //showing alert if no input is given
  }
});

//html button onClick
$('#htmlbtn').click(function(){
  console.log("HTML Button");
  $('#q2').hide();
  $('#q2a').show();
});

//css button onClick
$('#cssbtn').click(function(){
  console.log("CSS Button");
  $('#q2').hide();
  $('#q2b').show();
});

//js button onClick
$('#jsbtn').click(function(){
  console.log("HTML Button");
  $('#q2').hide();
  $('#q2c').show();
});

//HTML previous button
$('#q2aPrevious').click(function(){
  console.log("Q2a previous button");
  $('#q2a').hide();
  $('#q2').show();
});

//HTML Next Button
$('#q2aNext').click(function(){
  console.log("Q2a Next button");
  $('#q2a').hide();
  $('#q2').show();
});

//CSS previous button
$('#q2bPrevious').click(function(){
  console.log("Q2b previous button");
  $('#q2b').hide();
  $('#q2').show();
});
//CSS next button
$('#q2bNext').click(function(){
  console.log("Q2b next button");
  $('#q2b').hide();
  $('#q2').show();
});


//JS previous button
$('#q2cPrevious').click(function(){
  console.log("Q2c previous button");
  $('#q2c').hide();
  $('#q2').show();
});
//JS next button
$('#q2cNext').click(function(){
  console.log("Q2c next button");
  $('#q2c').hide();
  $('#q2').show();
});

$(document).ready(function () {
  $("#q2aNext").validate({
  rules: {
      "likesHTML[]": {
        required: function (element) {
                var html_LU = $('.checkbox');
                if (html_LU.filter(':checked').length < 1) {
                    return false;
                }
                return true;
            },
            minlength: 1
        }

  },
  messages: {
      "likesHTML[]": {
          required: "You must check at least 1 box",
          alert("wtf");
          //minlength: "Check 1 or more boxes"
      }
  }
  });



  });
