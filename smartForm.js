
//json
var userData = {
    name:'',
    email:'',
    html: {likes:[], dislikes:[]},
    css: {likes:[], dislikes:[]},
    js: {likes:[], dislikes:[]},
    strength:{css:'',js:'',html:''},
    currentQuestion: '#welcome'

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
    $('#welcome').fadeOut("fast");
    $('#q1').slideDown("slow");
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

      var checkname =  /^[a-zA-Z ]{2,30}$/;
      // var res1 = checkname.test($('#name').val());
      var checkmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      // var res2 = checkmail.test($('#email').val());

          if($('#email').val().match(checkmail) && $('#name').val().match(checkname)){

              userData.name = $('#name').val();
              localStorage.setItem('userData',JSON.stringify(userData));

              userData.email = $('#email').val();
              localStorage.setItem('userData',JSON.stringify(userData)); //converts object to a string
              $('#q1').fadeOut("fast");
              $('#q2').slideDown("slow");
          }
          else{
            alert('Please enter valid name & email.')
          }

    }
    else{
        alert('Pleast enter your name & email.') //showing alert if no input is given
    }
});

//html button onClick

$('#htmlbtn').click(function(){
    console.log("HTML Button");
    $('#q2').fadeOut("fast");
    $('#q2a').slideDown("slow");
});

//css button onClick

$('#cssbtn').click(function(){
    console.log("CSS Button");
    $('#q2').fadeOut("fast");
    $('#q2b').slideDown("slow");
});

//js button onClick

$('#jsbtn').click(function(){
    console.log("HTML Button");
    $('#q2').fadeOut("fast");
    $('#q2c').slideDown("slow");
});

//HTML previous button

$('#q2aPrevious').click(function(){
    console.log("Q2a previous button");
    $('#q2a').fadeOut("fast");
    $('#q2').slideDown("slow");
});

//HTML Next Button

$('#q2aNext').click(function(){
  console.log("Q2a Next button");
 var i;
  var counter = 0;
//  var document.getElementsByName("likesHTML")= document.getElementsByName("likesHTML");
  // var htmlDisLikes = document.getElementsByName("dislikesHTML");

  // if($("input[name='likesHTML']:checked").length && $("input[name='dislikesHTML']:checked").length){
  //   userData.html.likes = $("input[name='likesHTML']:checked").val();
  //   localStorage.setItem('userData',JSON.stringify(userData));
  //
  //   userData.html.dislikes = $("input[name='dislikesHTML']:checked").val();
  //   localStorage.setItem('userData',JSON.stringify(userData));



  for (var i = 0; i < document.getElementsByName('likesHTML').length; i++) {
      if (document.getElementsByName('likesHTML')[i].checked) {
        userData.html.likes.push(document.getElementsByName('likesHTML')[i].value);
        localStorage.setItem('userData', JSON.stringify(userData));
      //  givePassforLikes = true;
      }
  }
  for (var i = 0; i < document.getElementsByName("dislikesHTML").length; i++) {
                if(document.getElementsByName("dislikesHTML")[i].checked){
                userData.html.dislikes.push(document.getElementsByName('dislikesHTML')[i].value);
                  localStorage.setItem('userData',JSON.stringify(userData));
                  counter++;
           }
        }

         if (counter == 0){
            console.log("html selecting alert");
            alert("Please select atleast one option");
          }
          else {
            console.log("Is this working?");
            $('#q2a').fadeOut("fast");
            $('#q2b').slideDown("slow");
          }

});

//CSS previous button
$('#q2bPrevious').click(function(){

  console.log("Q2b previous button");

  $('#q2b').fadeOut("fast");
  $('#q2').slideDown("slow");

});

//CSS next button
$('#q2bNext').click(function(){


  var counter = 0;
  var cssLikes = document.getElementsByName("likesCSS");
  var cssDisLikes = document.getElementsByName("dislikesCSS");


  // if($("input[name='likesCSS']:checked").length && $("input[name='dislikesCSS']:checked").length){
  //   userData.css.likes = $("input[name='likesCSS']:checked").val();
  //   localStorage.setItem('userData',JSON.stringify(userData));
  //
  //   userData.css.dislikes = $("input[name='dislikesCSS']:checked").val();
  //   localStorage.setItem('userData',JSON.stringify(userData));
  //
  //   $('#q2b').fadeOut("fast");
  //   $('#q2c').slideDown("slow");
  // }
  // else{
  //
  //   alert("Please select atleast one option from likes and another from dislikes");
  //
  // }


  for (var i = 0; i < cssLikes.length; i++) {
    console.log(cssLikes.length);
          if(cssLikes[i].checked == true){
            userData.css.likes.push(cssLikes[i].value);
            localStorage.setItem('userData',JSON.stringify(userData));
            counter++;
          }
        }
  for (var i = 0; i < cssDisLikes.length; i++) {
                if(cssDisLikes[i].checked == true){
                  userData.css.dislikes.push(cssDisLikes[i].value);
                  localStorage.setItem('userData',JSON.stringify(userData));
                  counter++;
           }
        }
         if (counter == 0){
            console.log("css selecting alert");
            alert("Please select atleast one option");
          }
        else{
          console.log("Q2b next button");

          $('#q2b').fadeOut("fast");
          $('#q2c').slideDown("slow");
        }

});


//JS previous button
$('#q2cPrevious').click(function(){
    console.log("Q2c previous button");
    $('#q2c').fadeOut("fast");
    $('#q2b').slideDown("slow");
});

//JS next button
$('#q2cNext').click(function(){


    var counter = 0;
    var jsLikes = document.getElementsByName("likesJS");
    var jsDisLikes = document.getElementsByName("dislikesJS");


      // if($("input[name='likesJS']:checked").length && $("input[name='dislikesJS']:checked").length){
      //
      //   userData.js.likes = $("input[name='likesJS']:checked").val();
      //   localStorage.setItem('userData',JSON.stringify(userData));
      //
      //   userData.js.dislikes = $("input[name='dislikesJS']:checked").val();
      //   localStorage.setItem('userData',JSON.stringify(userData)); console.log("JS dislikes");
      //
      //   console.log("Q2c next button");
      //   $('#q2c').fadeOut("fast");
      //   $('#q3').slideDown("slow");
      //
      //       if($("input[name='inlineHTMLRadioOptions']:checked").length && $("input[name='inlineCSSRadioOptions']:checked").length && $("input[name='inlineJSRadioOptions']:checked").length){
      //           userData.strength.html = $("input[name='inlineHTMLRadioOptions']:checked").val();
      //           localStorage.setItem('userData',JSON.stringify(userData));
      //
      //           userData.strength.css = $("input[name='inlineCSSRadioOptions']:checked").val();
      //           localStorage.setItem('userData',JSON.stringify(userData));
      //
      //           userData.strength.js = $("input[name='inlineJSRadioOptions']:checked").val();
      //           localStorage.setItem('userData',JSON.stringify(userData));
      //       }
      //
      //       else{
      //
      //           alert("Please select strength from at least one field.")
      //
      //       }
      //
      //
      // }
      // else{
      //
      //   alert("Please select atleast one option from likes and another from dislikes");
      //
      // }



    for (var i = 0; i < jsLikes.length; i++) {
            if(jsLikes[i].checked == true){
              userData.js.likes.push(jsLikes[i].value);
              localStorage.setItem('userData',JSON.stringify(userData));
              counter++;
            }
          }
    for (var i = 0; i < jsDisLikes.length; i++) {
                  if(jsDisLikes[i].checked == true){
                    userData.js.dislikes.push(jsDisLikes[i].value);
                    localStorage.setItem('userData',JSON.stringify(userData));
                    counter++;
             }
          }
           if (counter == 0){
              console.log("js selecting alert");
              alert("Please select atleast one option");
            }
          else{
          console.log("Q2c next button");
          $('#q2c').fadeOut("fast");
          $('#q3').slideDown("slow");
        }

});

//Q3 Previous Button

$('#q3previous').click(function(){
      console.log("q3 previous clicked");
      $("#q3").fadeOut("fast");
      $("#q2c").slideDown("slow");

});

//Q3 Next Button

$('#q3next').click(function(){
  var counter1 = 0;
  var counter2 = 0;
  var counter3 = 0;

  for (var i = 0; i < document.getElementsByName('inlineHTMLRadioOptions').length; i++) {
                if(document.getElementsByName('inlineHTMLRadioOptions')[i].checked == true){
                    console.log(document.getElementsByName('inlineHTMLRadioOptions')[i].value);
                  userData.strength.html =document.getElementsByName('inlineHTMLRadioOptions')[i].value;
                  localStorage.setItem('userData',JSON.stringify(userData));
                  counter1++;
           }
           // else{
           //   console.log('loop kaj kore na');
           // }
        }


  for (var i = 0; i < document.getElementsByName('inlineJSRadioOptions').length; i++) {
                        if(document.getElementsByName('inlineJSRadioOptions')[i].checked == true){
                            console.log(document.getElementsByName('inlineJSRadioOptions')[i].value);
                          userData.strength.js=document.getElementsByName('inlineJSRadioOptions')[i].value;
                          localStorage.setItem('userData',JSON.stringify(userData));
                          counter2++;
                   }
                   // else{
                   //   console.log('loop kaj kore na');
                   // }
                }


    for (var i = 0; i <document.getElementsByName('inlineCSSRadioOptions').length; i++) {
                                if(document.getElementsByName('inlineCSSRadioOptions')[i].checked == true){
                                  console.log(document.getElementsByName('inlineCSSRadioOptions')[i].value);
                                  userData.strength.css =document.getElementsByName('inlineCSSRadioOptions')[i].value;
                                  localStorage.setItem('userData',JSON.stringify(userData));
                                  counter3++;
                           }
                           // else{
                           //   console.log('loop kaj kore na');
                           // }
                        }
          if (counter3 == 0 || counter2 ==0 || counter1 ==0){
            console.log("counter3"+counter3);
              console.log("counter2"+counter2);
                console.log("counter1"+counter1);
                console.log("selecting alert");
                alert("error");
                }

      else{
        console.log("q3 next clicked");
      $("#q3").fadeOut("fast");
      $("#thanks").slideDown("slow");
      // localStorage.setItem('userData',JSON.stringify(userData));
      // $("#thanks").fadeOut("fast");

    }
  });

    $('#viewAns').click(function() {
      userData = JSON.parse(localStorage.getItem('userData'));
      $("#SurveyAnswer").slideDown("slow");
       localStorage.setItem('userData',JSON.stringify(userData));
      if (userData) {
        $('#thanks').fadeOut("fast");
        $('#answers').fadeIn(1000);
        document.getElementById('#name').innerHTML = userData.name;
        document.getElementById('#email').innerHTML = userData.email;
        var List = "";
        for (var i = 0; i < userData.html.likes.length; i++) {
          nameList = "<li>" + userData.html.likes[i] + "</li>";
          document.getElementById("likes_HTML").innerHTML += nameList;
        }
        var List = "";
        for (var i = 0; i < userData.html.dislikes.length; i++) {
          nameList = "<li>" + userData.html.dislikes[i] + "</li>";
          document.getElementById("dislikes_HTML").innerHTML += nameList;
        }

        for (var i = 0; i < userData.css.likes.length; i++) {
          nameList = "<li>" + userData.css.likes[i] + "</li>";
          document.getElementById("likes_CSS").innerHTML += nameList;
        }
        var List = "";
        for (var i = 0; i < userData.css.dislikes.length; i++) {
          nameList = "<li>" + userData.css.dislikes[i] + "</li>";
          document.getElementById("dislikes_CSS").innerHTML += nameList;
        }

        for (var i = 0; i < userData.js.likes.length; i++) {
          nameList = "<li>" + userData.js.likes[i] + "</li>";
          document.getElementById("likes_JS").innerHTML += nameList;
        }
        var List = "";
        for (var i = 0; i < userData.js.dislikes.length; i++) {
          nameList = "<li>" + userData.js.dislikes[i] + "</li>";
          document.getElementById("dislikes_JS").innerHTML += nameList;
        }

        document.getElementById("strength_HTML").innerHTML = userData.strength.html;
        document.getElementById("strength_CSS").innerHTML = userData.strength.css;
        document.getElementById("strength_JS").innerHTML = userData.strength.js;
      } else {
        alert("No data available");
      }
});

//View Answers



//Delete Answers

$('#delAns').click(function(){
  alert("All your entries will be deleted!")
  localStorage.clear();
  $("#thanks").fadeOut("fast");
  $("#welcome").slideDown("slow");
})
