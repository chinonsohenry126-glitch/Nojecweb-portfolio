// ================= MOBILE MENU =================

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// ================= NAVBAR BACKGROUND =================

const header =
  document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(0,0,0,0.85)";

  } else {

    header.style.background =
      "rgba(0,0,0,0.2)";

  }

});

// ================= SCROLL REVEAL ANIMATION =================

const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      } else {

        entry.target.classList.remove("show");

      }

    });

  }, {
    threshold: 0.15
  });

const hiddenElements =
  document.querySelectorAll(

    ".service-card,\
  .project-card,\
  .stat-card,\
  .testimonial-card,\
  .about-image,\
  .about-content,\
  .ceo-image,\
  .ceo-content,\
  .contact-info,\
  .contact-form,\
  .rate-card"

  );

hiddenElements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});

// ================= ACTIVE NAV LINKS =================

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.clientHeight;

    if (

      scrollY >= sectionTop - 200 &&

      scrollY < sectionTop + sectionHeight

    ) {

      current =
        section.getAttribute("id");

    }

  });

  navItems.forEach((link) => {

    link.classList.remove("active");

    if (

      link.getAttribute("href")
      === `#${current}`

    ) {

      link.classList.add("active");

    }

  });

});

// ================= CLOSE MOBILE MENU =================

navItems.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});

// ================= CONTACT FORM =================

// ================= EMAILJS =================

// ================= CONTACT FORM =================
const form = document.getElementById("contactForm");
const button = form.querySelector("button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  button.innerText = "Sending...";

  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/xgoqyvpd", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  });

  if (response.ok) {
    button.innerText = "Message Sent ✓";
    form.reset();
  } else {
    button.innerText = "Failed ❌";
  }

  setTimeout(() => {
    button.innerText = "Send Message";
  }, 2000);
});

// ================= PRELOADER =================

window.addEventListener("load", () => {

  const preloader =
    document.getElementById("preloader");

  setTimeout(() => {

    preloader.classList.add("fade-out");

  }, 4000);

});

// ================= STAR RATING SYSTEM =================

const stars =
  document.querySelectorAll(".stars-rating i");

stars.forEach((star, index) => {

  star.addEventListener("click", () => {

    stars.forEach((s, i) => {

      if (i <= index) {

        s.classList.add("active");

      } else {

        s.classList.remove("active");

      }

    });

  });

});

// ================= REVIEW BUTTON =================

const reviewBtn =
  document.querySelector(".submit-rating");

if (reviewBtn) {

  reviewBtn.addEventListener("click", () => {

    reviewBtn.innerText =
      "Submitting...";

    setTimeout(() => {

      alert(
        "Thank you for your feedback!"
      );

      reviewBtn.innerText =
        "Submit Review";

    }, 1500);

  });

}

// ================= COUNTER ANIMATION =================

const counters =
  document.querySelectorAll(".counter");

const counterSection =
  document.querySelector(".stats");

let started = false;

function startCounters() {

  counters.forEach((counter) => {

    counter.innerText = "0";

    const target =
      +counter.getAttribute("data-target");

    const speed = 200;

    const updateCounter = () => {

      const current =
        +counter.innerText.replace(/\D/g, '');

      const increment =
        target / speed;

      if (current < target) {

        counter.innerText =
          Math.ceil(current + increment);

        setTimeout(updateCounter, 15);

      } else {

        // Final Text

        if (target === 100) {

          counter.innerText = "100%";

        }

        else if (target === 24) {

          counter.innerText = "24/7";

        }

        else {

          counter.innerText =
            target + "+";

        }

      }

    };

    updateCounter();

  });

}

window.addEventListener("scroll", () => {

  const sectionTop =
    counterSection.offsetTop;

  const sectionHeight =
    counterSection.offsetHeight;

  const scrollY =
    window.scrollY;

  const windowHeight =
    window.innerHeight;

  if (

    scrollY >
    sectionTop - windowHeight + 200 &&

    scrollY <
    sectionTop + sectionHeight

  ) {

    if (!started) {

      startCounters();

      started = true;

    }

  } else {

    started = false;

  }

});

// ================= SMOOTH BUTTON HOVER =================

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
      "translateY(-5px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translateY(0)";

  });

});

// ================= CURRENT YEAR =================

const year =
  new Date().getFullYear();

const copyright =
  document.querySelector(".copyright");

if (copyright) {

  copyright.innerHTML =
    `© ${year} NovaTech Studio. All Rights Reserved.`;

}


// ================= PROJECT MODAL =================

const projectButtons =
  document.querySelectorAll(".project-btn");

const modal =
  document.getElementById("projectModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalImage =
  document.getElementById("modalImage");

const modalDescription =
  document.getElementById("modalDescription");

const modalTech =
  document.getElementById("modalTech");

const closeModal =
  document.getElementById("closeModal");

projectButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const title =
      button.getAttribute("data-title");

    const image =
      button.getAttribute("data-image");

    const description =
      button.getAttribute("data-description");

    const tech =
      button.getAttribute("data-tech");

    modalTitle.innerText =
      title;

    modalImage.src =
      image;

    modalDescription.innerText =
      description;

    modalTech.innerText =
      tech;

    modal.classList.add("active");

  });

});

// CLOSE MODAL

closeModal.addEventListener("click", () => {

  modal.classList.remove("active");

});

// CLOSE WHEN CLICKING OUTSIDE

window.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.classList.remove("active");

  }

});



// ================= CUSTOM CURSOR GLOW =================

const cursorGlow =
  document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

  cursorGlow.style.left =
    e.clientX + "px";

  cursorGlow.style.top =
    e.clientY + "px";

});