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

//button scrolling
const btnScrollto = document.querySelector(".btn--scroll-to");
const sectionProject = document.querySelector("#projects");

//add eventListner

btnScrollto.addEventListener("click", function (e) {
  sectionProject.scrollIntoView({ behavior: "smooth" });
});

//button scrolling
const btnScrollContacts = document.querySelector(".btn--scroll-contacts");
const sectionContact = document.querySelector("#Contact");

//add eventListner

btnScrollContacts.addEventListener("click", function (e) {
  sectionContact.scrollIntoView({ behavior: "smooth" });
});

//we added pop up alert to our portofolio and then remove the pop up message after 3 second using removeEventListener
const header1 = document.querySelector("#header");
const alertWelcome = function (e) {
  alert("Thank You for visting my Portofolio❤️😍");
};
header1.addEventListener("mouseenter", alertWelcome);
setTimeout(() => header1.removeEventListener("mouseenter", alertWelcome), 3000);

//smoth scrolling using event propogation
document.querySelector(".navbar").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.getAttribute("href"));
  if (e.target.classList.contains("navlink")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  const id = e.target.getAttribute("href");
});
