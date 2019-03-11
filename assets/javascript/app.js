var intervalId;
var clockRunning = false;
var time = 20;
var q = "";
var qPlayed = false;
var ansCounter = 0;
var correct = 0;
var incorrect = 0;
var blank = 0;

var triviaObject = [{
  q: "Who became the mascot of the Philadelphia Flyers in the 2018-2019 season?",
  ans: ["Big Shot","Slapshot","Gritty","Skatey"],
  corr:2,
  image: "",
  qPlayed: false},
  {q: "In the 2018-2019 season, who is currently the longest-tenured coach among the four major Philadelphia teams?",
  ans:["Doug Pederson", "Gabe Kapler","Scott Gordon","Brett Brown"],
  corr: 3,
  image: "",
  qPlayed: false},
  {q: "Who is the radio broadcast announcer for the Philadelphia 76ers?",
  ans: ["Tom Chambers", "Tom Bodett","Tom McGinnis","Tom McCann"],
  corr: 2,
  image: "",
  qPlayed: false},
  {q: "Who is the sensational rookie goaltender for the Philadelphia Flyers in the 2018-2019 season?",
  ans: ["Carter Hart", "Gary Hart","Bret Neidhart","Jim Neidhart"],
  corr: 0,
  image: "",
  qPlayed: false},
  {q: "Which popular ballpark item is purchased for just $1 on promotional nights at Philadelphia Phillies games?",
  ans: ["Hot Peanuts", "Hot Popcorn", "Hot Pretzel", "Hot Dog"],
  corr: 3,
  image: "",
  qPlayed: false},{
  q: "Which 76ers legend had his #2 retired by the team in the 2018-2019 season?",
  ans: ["Moses Malone","Jeff Ruland","Maurice Cheeks","Christian Welp"],
  corr: 0,
  image: "",
  qPlayed: false},
  {q: "In the 2018-2019 season, which player for the Philadelphia Eagles lead the team in receptions?",
  ans:["Alshon Jeffrey","Nelson Agholor","Darren Sproles","Zach Ertz"],
  corr: 3,
  image: "",
  qPlayed: false},
  {q: "When the Philadelphia Phillies begin the 2019 season, who will be their opening day pitcher?",
  ans: ["Christopher Nolan", "Nolan Ryan","Aaron Copland","Aaron Nola"],
  corr: 3,
  image: "",
  qPlayed: false},
  {q: "When the Philadelphia Phillies begin the 2019 season, which last names of players will appear on the uniforms for their opening day Right Fielder and First Baseman?",
  ans: ["Harper and Hopkins","Hopkins and Harper", "Herrera and Hopkins","Harper and Herrera"],
  corr: 0,
  image: "",
  qPlayed: false},
  {q: "On the Philadelphia 76ers, which player said the following about himself: 'I don't get disrespected; I do the disrespecting.'",
  ans: ["Ben Simmons", "Tobias Harris","Jimmy Butler","Joel Embiid"],
  corr: 3,
  image: "",
  qPlayed: false},
];

window.onload = function() {
  $("#btnStart").on("click", start);
  $("#btnSkip").on("click", skip);
  $("#btnRestart").on("click", restart);    
  $(document).on("click",".btnAns", twoMinuteDrill);
};

alert("Welcome to the LOVE Philly Sports 2-Minute Drill Trivia Game! Click the Start button to begin. " +
"You have 20 seconds per question. " + 
"There are 10 questions total. " + 
"Click on the correct answer button. Good luck!")

function start() {

  $(".startStuff").css("visibility", "visible");
  
  // if (!clockRunning) {
  //   $(".gameClock").html("<h3>" + "00:20"+ "</h3>");
  //   clearInterval(intervalId);

  //   intervalId = setInterval(count, 1000);
  //   clockRunning = true;
  // }

  // $(".qRow").empty();

  console.log("the ansCounter is: " + ansCounter);
  console.log("the button pressed is: " + ($(this).text()));

  if(ansCounter>9){

    console.log("the ansCounter is:" + ansCounter);
    console.log("the correct score is: " &  correct);
    console.log("the incorrect score is: " &  incorrect);
    console.log("the blank score is: " &  blank);
    ansCounter = 0;
    correct = 0;
    incorrect = 0;
    blank = 0;
    $(".scoreCorr").html("0");
    $(".#scoreIncorr").html("0");
    $(".scoreBlank").html("0");

  }else if (($(this).text()!=="SKIP")){

    
    $(".jumbotron").empty();

  };

  var qView=$("<div>")
    qView
    .append("Question: " + triviaObject[ansCounter].q + "<br")
    // console.log("Question: " + triviaObject[ansCounter].q );
    // if(ansCounter===0){
      $(".jumbotron").append(qView);
    // }else{
      // $(".qRow").empty();
      // $(".qRow").append(qView);
    // };
      
  renderButtons()

};

function skip() {

  console.log("the button pressed is: " + ($(this).text()));
  blank ++
  console.log("the blank counter is: " + blank);
  $(".scoreBlank").html(blank);
  console.log("the ansCounter is: " + ansCounter)
  ansCounter ++
  console.log("the ansCounter is: " + ansCounter)

  console.log("the ansCounter is: " + ansCounter);

  $(".scoreBlank").html(blank);

  if (ansCounter === triviaObject.length) {

    //  custom-image/message letting user know BOTH time is up AND game-over
    alert("Thank you for playing the LOVE Philly Sports 2-Minute Drill Trivia Game! Your final score appears at bottom.")
    // restart();
    $(".jumbotron").empty();

  //  Alert the user that time is up.
  }else if(ansCounter < triviaObject.length){

    // maybe try to replace the alert with an custom-image
    start();
  };
};  

function restart() {

    console.log("the button pressed is: " + ($(this).text()));
    ansCounter = 0;
    correct = 0;
    incorrect = 0;
    blank = 0;
    $(".scoreCorr").html("0");
    $(".scoreIncorr").html("0");
    $(".scoreBlank").html("0");

    // time = 20;
    // $(".gameClock").html("<h3>" + "00:20"+ "</h3>");
    // clearInterval(intervalId);
    // intervalId = setInterval(count, 1000);
    // clockRunning = true;

    $(".jumbortron").empty();
    start();
};


function count() {

  time--;
  
// get the current time, pass that into the timeConverter function, and save the result in a variable.
  var converted = timeConverter(time);
  // console.log(converted);
  
// use the variable we just created to show the converted time on the gameClock
  $(".gameClock").html("<h3>" + converted + "</h3>");

//  once number hits zero...
  if (time === 0 && ansCounter === triviaObject.length-1) {

    blank++
    $(".scoreBlank").html(blank);
    $(".jumbotron").empty();
    //  custom-image/message letting user know BOTH time is up AND game-over
    alert("Thank you for playing the LOVE Philly Sports 2-Minute Drill Trivia Game! Your final score appears at bottom.")
    restart();

//  Alert the user that time is up.
  }else if(time===0 && ansCounter < triviaObject.length-1){

    blank++
    $(".scoreBlank").html(blank);
    // maybe try to replace the alert with an custom-image
    alert("Time is Up! On to the next question!");
    ansCounter++;
    start();
  };
};

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
};

function twoMinuteDrill(){

      // console.log("the answer counter is: " + ansCounter);
      var ansVal = ($(this).attr("data-val"));
      // console.log("the correct answer for this question is: " + ansVal);
      ansVal= parseInt(ansVal);
      // console.log("the parsed correct answer value is: " + ansVal);
      
      // console.log("the correct value for this in the triviaObject is: " + triviaObject[ansCounter].corr); 

      var corr=triviaObject[ansCounter].corr;

      if(ansVal === corr){

        // SetTimeOut...to pause the clock
        // grab triviaObject image and flash correct message
        correct++
        $(".scoreCorr").html(correct);

      }else {

        // SetTimeOut...to pause the clock
        // grab image flash incorrect message
        incorrect++
        $(".scoreIncorr").html(incorrect);
      
      };

      ansCounter++

      if (ansCounter <= triviaObject.length-1){
          start()
      
      //last question
      }else {

        $(".jumbotron").empty();
        //  insert game-over image
        alert("Thank you for playing the LOVE Philly Sports 2-Minute Drill Trivia Game! Your final score appears at the bottom.")
      
      };
      
};

// Function for displaying answers
function renderButtons() {

// Deleting the answers choices prior to adding new ones
// (this is necessary otherwise you will have repeat buttons)
  // console.log("the ansCounter is: " + ansCounter);
  if(ansCounter !==0){
    
    $(".btnRow").empty();

  };

  // Looping through the array of answers

  // console.log("length is: " + triviaObject[ansCounter].ans.length);

  // console.log("the triviaObject length is: " + triviaObject[ansCounter].ans.length );
  for (var i = 0; i < triviaObject[ansCounter].ans.length; i++) {
  
    // Then dynamicaly generating buttons for each answer in triviaObject
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of btnAns to our button
    a.addClass("btnAns");
    // Adding a data-attribute
    // console.log("the value of this button is: " + i);
    a.attr("data-val", i);
    // Providing the initial button text
    // console.log("the button being made is: " + triviaObject[ansCounter].ans[i]);
    a.text(triviaObject[ansCounter].ans[i]);
    // Adding the button to the buttons-view div
    // $(".btnRow").prepend(a);
    // $(".btnRow").append(a);
    $(".jumbotron").append(a);
    // $(".jumbotron").prepend(a);
  };
};
