# TriviaGame aka The Philly 2-Minute Drill

How well does the user know some recent Philadelphia sports trivia? To find out, users take the Philly 2-Minute Drill which is a trivia game consisting of 10 multiple-choice questions with 00:00:20 seconds to respond. 

Answers are shown on buttons which the the user clicks to choose for a particular question. 

The questions and answer choices reset with each previously correct, incorrect, or expired (run out of time on the 00:00:20 seconds) interval.

As the user proceeds, there is a gameBoard which tracks scores for correct, incorrect, and skipped. There are additional buttons to skip questions and reset the game as desired.

Future development plans include the following mods:

(1) enhanced mobile responsiveness (2) removing alerts and replacing with modals and lastly at the game's conclusion; (3) adding additional elements to the object so as to offer more questions and randomizing their usage per game play.

Here is the deployed link:

https://bpresseisen.github.io/TriviaGame/

ABOUT THE DESIGN:

objects, called functions, timers, and onClick events all contribute to the deployment. the divs, images, and buttons on the page are drawn per the looping (one question to the next) in the object. the looping is currently sequential but with the additions of new quesitons, the plan is to randomize--without repeating--quesitons shown per each instance of the game. The object holds key:value pairs for questions, answer choices, correct answers and images to draw on the page based on the response. 

There are called functions for the different parts of the game: gameStart, rendering buttons, resetting the timer, running the timer, converting time, skipping, and the gameEnd. the use of the 'this' alias appears throughout the coding so as to factor and optimize the routines, operations, and subroutines.

The operation of the timer depends on two (2) custom functions, two (2) reserved functions, setInterval (which converts the time from milliseconds to the time in the hh:mm:ss format desired) and clearInterval (which clears the aformentioned), and several variables, most notably a clockRunning checker which monitors when/id the timer is runnning or paused.

a count function kicks off the countdown based on the initialization of a time variable and the drawing to the screen of the interval value and;

a timeConverter function which converts the milliseconds to the standard time measurements (including hh:mm:ss) and then sets the variables for minutes and seconds.
