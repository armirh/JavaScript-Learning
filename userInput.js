// take user input
//var myName = window.prompt("What's your name")
//console.log("My name is",myName)

// using DOM. representation of an HTML document
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log("Hello",myName)
}