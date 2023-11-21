'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
//select.setCharacterEncoding("UTF-8");
const selectItems = document.querySelectorAll("[data-select-item]");
//selectItems.setCharacterEncoding("UTF-8");
const selectValue = document.querySelector("[data-selecct-value]");
//selectValue.setCharacterEncoding("UTF-8");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
//filterBtn.setCharacterEncoding("UTF-8");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
//innerText = textContent
    let selectedValue = this.textContent.toLowerCase();
    selectValue.textContent = this.textContent;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "tatca") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {
//innerText = textContent
    let selectedValue = this.textContent.toLowerCase();
    selectValue.textContent = this.textContent;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks_about = document.querySelector("data-nav-link-about");
const navigationLinks_resume = document.querySelector("data-nav-link-resume");
const navigationLinks_portfolio = document.querySelector("data-nav-link-portfolio");
const navigationLinks_blog = document.querySelector("data-nav-link-blog");
const navigationLinks_contact = document.querySelector("data-nav-link-contact");
const pages_about = document.querySelector("data-page-about");
const pages_resume = document.querySelector("data-page-resume");
const pages_portfolio = document.querySelector("data-page-portfolio");
const pages_blog = document.querySelector("data-page-blog");
const pages_contact = document.querySelector("data-page-contact");
navigationLinks_about.addEventListener("click", function () {
        /*pages_about.classList.add("active");
        navigationLinks_about.classList.add("active");
        window.scrollTo(0, 0);
      / else {
        pages_about.classList.remove("active");
        navigationLinks_about.classList.remove("active");
      }*/
    //}
//navigationLinks_about.classList.add("active");
//navigationLinks_resume.classList.remove("active");
//navigationLinks_portfolio.classList.remove("active");
//navigationLinks_blog.classList.remove("active");
//navigationLinks_contact.classList.remove("active");
//pages_about.classList.add("active");
//pages_resume.classList.remove("active");
//pages_portfolio.classList.remove("active");
//pages_blog.classList.remove("active");
//pages_contact.classList.remove("active");
window.scrollTo(0, 0);
  });

 navigationLinks_resume.addEventListener("click", function () {

//navigationLinks_about.classList.remove("active");
navigationLinks_resume.classList.add("active");
//navigationLinks_portfolio.classList.remove("active");
//navigationLinks_blog.classList.remove("active");
//navigationLinks_contact.classList.remove("active");
//pages_about.classList.remove("active");
//pages_resume.classList.add("active");
//pages_portfolio.classList.remove("active");
//pages_blog.classList.remove("active");
//pages_contact.classList.remove("active");
window.scrollTo(0, 0);
        });

navigationLinks_portfolio.addEventListener("click", function () {

  //navigationLinks_about.classList.remove("active");
//navigationLinks_resume.classList.remove("active");
navigationLinks_portfolio.classList.add("active");
//navigationLinks_blog.classList.remove("active");
//navigationLinks_contact.classList.remove("active");
//pages_about.classList.remove("active");
//pages_resume.classList.remove("active");
//pages_portfolio.classList.add("active");
//pages_blog.classList.remove("active");
//pages_contact.classList.remove("active");
window.scrollTo(0, 0);
      
  });

navigationLinks_blog.addEventListener("click", function () {

  //navigationLinks_about.classList.remove("active");
//navigationLinks_resume.classList.remove("active");
//navigationLinks_portfolio.classList.remove("active");
navigationLinks_blog.classList.add("active");
//navigationLinks_contact.classList.remove("active");
//pages_about.classList.remove("active");
//pages_resume.classList.remove("active");
//pages_portfolio.classList.remove("active");
//pages_blog.classList.add("active");
//pages_contact.classList.remove("active");
window.scrollTo(0, 0);
      
  });

navigationLinks_contact.addEventListener("click", function () {

  //navigationLinks_about.classList.remove("active");
//navigationLinks_resume.classList.remove("active");
//navigationLinks_portfolio.classList.remove("active");
//navigationLinks_blog.classList.remove("active");
navigationLinks_contact.classList.add("active");
//pages_about.classList.remove("active");
//pages_resume.classList.remove("active");
//pages_portfolio.classList.remove("active");
//pages_blog.classList.remove("active");
//pages_contact.classList.add("active");
window.scrollTo(0, 0);
     
  });
}
