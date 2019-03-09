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
// var time = 120;
var time = 30;

var q = "";
var ans_A = "";
var ans_B= "";
var ans_C = "";
var ans_D = "";
var ans_Corr="";
var qPlayed = false;
var ansCounter = 0;
var triviaObject = [{
  q: "Who is the mascot of the Philadelphia Flyers?",
  q_level: 100,
  ans_A: "Big Shot", 
  ans_B: "Slapshot",
  ans_C: "Gritty",
  ans_D: "Skatey",
  ans_corr_value: "C",
  ans_corr_text: "Gritty",
  image: ""},
  {q: "Who is currently the longest-tenured coach among the Four for 4 teams?",
  q_level: 300,
  ans_A: "Doug Pederson", 
  ans_B: "Gabe Kapler",
  ans_C: "Scott Gordon",
  ans_D: "Brett Brown",
  ans_corr: "D",
  ans_corr_text: "Brett Brown, ",
  image: ""},
  {q: "Who is the radio broadcast announcer for the Philadelphia 76ers",
  q_level: 500,
  ans_A: "Tom Chambers", 
  ans_B: "Tom Bodett",
  ans_C: "Tom McGinnis",
  ans_D: "Tom Thumb",
  ans_corr: "C",
  ans_corr_text: "Tom McGinnis, ",
  image: ""},
];

function start() {

  // use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    // $(".gameClock").html("<h3>" + "02:00"+ "</h3>");
    $(".gameClock").html("<h3>" + "00:30"+ "</h3>");
    clearInterval(intervalId);

    // SetTimeOut...to pause the clock


    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }

  twoMinuteDrill();
};

function skip() {

    
}


function restart() {
    $("#corr_score").html("0");
    $("#incorr_score").html("0");
    $("#blank_score").html("0");

    // time = 120;
    time = 30;
    // $(".gameClock").html("<h3>" + "02:00"+ "</h3>");
    $(".gameClock").html("<h3>" + "00:30"+ "</h3>");
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
  }else if(time===0 && ansCounter <9{

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

   


      q=triviaObject[ansCounter].q;
      $(".question").html(q);
      ans_A=triviaObject[ansCounter].ans_A;
      $(".ans_a_col").html(ans_A);
      ans_B=triviaObject[ansCounter].ans_B;
      $(".ans_b_col").html(ans_B);
      ans_C=triviaObject[ansCounter].ans_C;
      $(".ans_c_col").html(ans_C);
      ans_D=triviaObject[ansCounter].ans_D;
      $(".ans_d_col").html(ans_D);

      var ans_Corr=triviaObject[ansCounter].a
  }
