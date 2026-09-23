/* =========================
   SWEET SHOP JAVASCRIPT
========================= */

// Welcome message
console.log("Welcome to Sweet House!");


// =========================
// NAVIGATION
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// =========================
// SWEET CARDS
// =========================

const sweetCards = document.querySelectorAll(".sweet-card");

sweetCards.forEach(card => {

    card.addEventListener("click", function () {

        const sweetName = this.querySelector("h3").textContent;

        alert(
            "You selected " + sweetName +
            "\nThank you for choosing Sweet House!"
        );

    });

});


// =========================
// CONTACT BUTTON
// =========================

const contactButton = document.querySelector(".second-btn");

contactButton.addEventListener("click", function () {

    alert(
        "Thank you for contacting Sweet House!\n" +
        "We will be happy to serve you."
    );

});


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

});


// =========================
// SHOP OPENING MESSAGE
// =========================

const currentHour = new Date().getHours();

if (currentHour >= 9 && currentHour < 21) {

    console.log("Sweet House is OPEN 🍬");

} else {

    console.log("Sweet House is currently CLOSED.");

}