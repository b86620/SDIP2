// alert("JavaScript works!");

//Anthony Arrants
//SDI 1407
//Project 2
//July 17, 2014

// variables start here
var greeting = "What is your name?"; 
function getUserName(){
return prompt(greeting);
}
function yourFunction(){
 alert("Hello "+getUserName());
}
yourFunction();







// procedure

var nameFunction = function (n1, n2) {
    
    console.log("Hey there " + n1 + " and " + n2 + ", glad to see you here today! Let's go on a road trip!");

}



// Confrimation

var readyToGo = confirm("Are you ready to go?!");

if (readyToGo == true) {
    
    console.log("Hope you're ready for a long trip!")
    
} else {
    
    console.log("Get ready! We need to hit the road!");
};



//

//

//

//

// function calls

nameFunction("Lee", "Andrew")