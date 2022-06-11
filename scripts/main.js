/* JavaScript for portfolio website*/

//Create toggle- the buttons used to change from dark to light

let lightToggle = document.getElementById('light');
let darkToggle = document.getElementById('dark');
const navElement = document.getElementsByClassName("topNav");
const titles = document.getElementsByClassName("titles");

//Light
lightToggle.onclick = function() { 
    //display which mode is active
    document.getElementById('light').style.backgroundColor ='grey';
    document.getElementById('dark').style.backgroundColor = 'white';
   
    //turn on the lights
    document.querySelector('body').style.backgroundColor ='white';
    
    document.getElementById('main_logo').src="./images/NewTrick-Logo.png";
    document.getElementById('small_logo').src="./images/small_logo.png";
    document.getElementById('small_logo').style.height = "80px";
    document.getElementById('small_logo').style.marginRight = "0px";
    document.getElementById('small_logo').style.marginLeft = "0px";
    document.getElementById('small_logo').style.marginTop = "0px";

    //iterate through the nav class and change to black
    for (let i = 0; i < navElement.length; i++) {
        navElement[i].style.color= 'black';
    }

    //iterate through titles and change to white
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.color = "black";
    }

}




//Dark Mode
darkToggle.onclick = function() {
    //displays which mode is active
    document.getElementById('light').style.backgroundColor ='white';
    document.getElementById('dark').style.backgroundColor ='grey';

    //turn off the lights
    document.querySelector('body').style.backgroundColor ='black';
      
    document.getElementById('main_logo').src="./images/NewTrick-Logo_BnW.png";
    document.getElementById('small_logo').src="./images/NewTrick-Logo_BnW.png";
    document.getElementById('small_logo').style.height = "50px";
    document.getElementById('small_logo').style.marginRight = "50px";
    document.getElementById('small_logo').style.marginLeft = "20px";
    document.getElementById('small_logo').style.marginTop = "10px";
    
    //iterate through nav class and change to white
    for (let i = 0; i < navElement.length; i++) {
        navElement[i].style.color= 'white';
    }
    
    //iterate through titles and change to white
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.color = "white";
    }

}