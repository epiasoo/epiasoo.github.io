/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed("#home-typed", {
  strings: ["MSc Applied Data Science Student"],
  typeSpeed: 80,
  cursorChar: "_",
});

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== work tabs ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetSelector = tab.dataset.target,
      targetContent = document.querySelector(targetSelector);

    tabContents.forEach((content) => content.classList.remove("work-active"));
    tabs.forEach((t) => t.classList.remove("work-active"));

    tab.classList.add("work-active");
    targetContent.classList.add("work-active");
  });
});

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const toastMessage = toast.querySelector(".toast__message");
const toastIcon = toast.querySelector(".toast__icon");

const showToast = (message, type) => {
  toastMessage.textContent = message;

  if (type === "success") {
    toast.classList.remove("error");
    toastIcon.className = "ri-checkbox-circle-fill toast__icon";
  } else {
    toast.classList.add("error");
    toastIcon.className = "ri-close-circle-fill toast__icon";
  }

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
};

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_hrd6czb",
      "template_rul068l",
      "#contact-form",
      "0tYU2kVem4Yw4E99u",
    )
    .then(
      () => {
        showToast("Email Sent Successfully!", "success");
        contactForm.reset();
      },
      () => {
        showToast("Message not sent. Please try again.", "error");
      },
    );
};

contactForm.addEventListener("submit", sendEmail);

//=============== SHOW SCROLL UP ===============
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]",
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1200,
  delay: 200,
  reset: false, // change to true if you want animation every scroll
  easing: "ease-in-out",
});

/* Home */
sr.reveal(`.home__content, .work__container`);
sr.reveal(".home__data", { origin: "bottom" });
sr.reveal(".home__social", { origin: "left" });

/* Skills */
sr.reveal(".skills-strip__title");
sr.reveal(".skills-strip__list span", { interval: 100 });

/* Projects */
sr.reveal(".section__title", { interval: 100 });
sr.reveal(".projects__card", { interval: 200 });

/* Contact */
sr.reveal(".contact__form", { origin: "left" });
sr.reveal(".contact__content", { origin: "right" });
