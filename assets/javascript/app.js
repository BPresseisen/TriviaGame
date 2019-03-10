window.onload = function() {
    $("#btnStart").on("click", start);
    $("#btnSkip").on("click", skip);
    $("#btnRestart").on("click", restart);    
    //$(".buttonclassname").on("click", checkAnswer); ... where checkAnswer is function
    // use a counter to advance the questions in the checkAnswer function

    $(document).on("click",".btnAns", twoMinuteDrill);
};

var intervalId;
var clockRunning = false;
var time = 20;
var q = "";
var btnAns=["","","",""];
var ans_Corr="";
var ans_Played="";
var qPlayed = false;
var ansCounter = 0;
var correct = 0;
var incorrect = 0;
var blank = 0;



var triviaObject = [{
  q: "Who is the mascot of the Philadelphia Flyers?",
  ans: ["Big Shot","Slapshot","Gritty","Skatey"],
  corr:2,
  image: "",
  qPlayed: false},
  {q: "Who is currently the longest-tenured coach among the Four for 4 teams?",
  ans:["Doug Pederson", "Gabe Kapler","Scott Gordon","Brett Brown"],
  ans_corr: 3,
  image: "",
  qPlayed: false},
  {q: "Who is the radio broadcast announcer for the Philadelphia 76ers",
  ans: ["Tom Chambers", "Tom Bodett","Tom McGinnis","Tom Thumb"],
  corr: 2,
  image: "",
  qPlayed: false},
];

alert("Welcome to the LOVE Philly Sports 2-Minute Drill Trivia Game! Click the Start button to begin. " +
"You have 20 seconds per question. " + 
"There are 10 questions total. " + 
"Click on the correct answer button. Good luck!")

function start() {

  $(".startStuff").css("visibility", "visible");
  
  if (!clockRunning) {
    $(".gameClock").html("<h3>" + "00:20"+ "</h3>");
    clearInterval(intervalId);

    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }

  $(".qRow").empty();

  var qView=$("<div>")
    qView
    .append("Question: " + triviaObject[ansCounter].q + "<br")
    $(".jumbotron").append(qView);
  
  renderButtons()

};

function skip() {

    
}


function restart() {
    $("#scoreCorr").html("0");
    $("#scoreIncorr").html("0");
    $("#scoreBlank").html("0");

    // time = 120;
    time = 20;
    // $(".gameClock").html("<h3>" + "02:00"+ "</h3>");
    $(".gameClock").html("<h3>" + "00:20"+ "</h3>");
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
    clockRunning = true;

    twoMinuteDrill();
};


function count() {

  time--;
  
// get the current time, pass that into the timeConverter function, and save the result in a variable.
  var converted = timeConverter(time);
  console.log(converted);
  
// use the variable we just created to show the converted time on the gameClock
  $(".gameClock").html("<h3>" + converted + "</h3>");

//  once number hits zero...
  if (time === 0 && ansCounter === triviaObject.length-1) {
  //if (converted === 0) {
  
//  ...run the stop function.
    restart();

//  Alert the user that time is up.
    alert("Time Up! Game will start over.");
  }else if(time===0 && ansCounter < triviaObject.length-1){

    //skip to next question
    ansCounter++;
    // restart();
    

  }
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
}

function twoMinuteDrill(){

      console.log(ansCounter);
      var ansVal = ($(this).attr("data-val"));
      ansVal= parseInt(ansVal);
      console.log(ansVal);

      if(ansVal === triviaObject[ansCounter].corr){

        // SetTimeOut...to pause the clock
        // grab triviaObject image and flash correct message
        // correct++

      }else {

        // SetTimeOut...to pause the clock
        // grab image flash incorrect message
        // incorrec++
      
      };

      // ansCounter++
      // start() ... advance to next question ... render buttons

}

// Function for displaying answers
function renderButtons() {

// Deleting the answers choices prior to adding new ones
// (this is necessary otherwise you will have repeat buttons)
  $(".btnRow").empty();

      // Looping through the array of answers
      for (var i = 0; i < btnAns.length; i++) {

        // Then dynamicaly generating buttons for each answer in triviaObject
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of btnAns to our button
        a.addClass("btnAns");
        // Adding a data-attribute
        a.attr("data-val", i);
        // Providing the initial button text
        a.text(triviaObject[ansCounter].ans[i]);
        // Adding the button to the buttons-view div
        $(".btnRow").prepend(a);
      }
    }
