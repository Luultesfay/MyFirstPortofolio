"use strict";
const selectWelcome = document.querySelector("#welcome-section");
const discText = document.querySelector(".discription");
const discText1 = document.querySelector(".discription1");
const discText2 = document.querySelector(".discription2");
const selectProject = document.querySelector("#projects");
const selectContact = document.querySelector("#Contact");

selectWelcome.addEventListener("mouseover", function () {
  selectWelcome.style.backgroundColor = "yellow";
  discText.style.color = "brown";
  //discText.style.fontSize = "30px";
  discText1.style.color = "brown";
  //discText1.style.fontSize = "29px";
  discText2.style.color = "brown";
  //discText2.style.fontSize = "20px";
});
selectProject.addEventListener("mouseover", function () {
  selectProject.style.color = "brown";
});
selectProject.addEventListener("mouseover", function () {
  selectProject.style.color = "brown";
});
selectContact.addEventListener("mouseover", function () {
  selectContact.style.color = "brown";
});
