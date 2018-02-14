
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

if(localStorage.getItem(userData)){
  userData = JSON.parse(localStorage.getItem('userData'));
  $(userData.currentQuestion).show();
  $('#welcome').hide();
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
  $('#q2a').hide();
  $('#q2').show();
});
