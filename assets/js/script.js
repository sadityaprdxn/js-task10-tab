'use strict';

var button = document.querySelectorAll(".tabs-controls li");
console.log(button);
var tab=[];

for (var i = 0; i < button.length; i++) {
  tab.push(button[i]);
}

for (var i = 0; i < button.length; i++){
    button[i].onclick = function(){
      var index = tab.indexOf(this);
      index += 1;
      var tabContent = document.querySelector(".tabs-content ul li:nth-child("+index+")");
      
      var active = tabContent.classList.contains("active-tab");

      if(!active){
        var currentActive = document.querySelector(".active-tab");
        currentActive.classList.remove("active-tab");
        var currentActiveButton = document.querySelector(".active");
        currentActiveButton.classList.remove("active");

        console.log(this);
        this.classList.add("active");
        tabContent.classList.add("active-tab");
      }
    }
}




















