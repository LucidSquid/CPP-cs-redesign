const topNav = document.querySelector(".top-nav");
const sideNavMenus = document.querySelectorAll(".side-nav a");
const sideNavDropdowns = document.querySelectorAll(".side-nav .dropdown");
const sideNavLinks = document.querySelectorAll(".side-nav a");
const clickedLinkIndex = localStorage.getItem('active_link');
const dropdownButtons = document.querySelectorAll(".dropdown button");

// Animate top-nav on window load
window.addEventListener("load", () => {
    topNav.classList.add("show-bg");
});

sideNavMenus.forEach(menu => {
    menu.addEventListener("mouseover", (event) => {
        const li = event.target.closest("li");
        li.classList.add("hovered");
    });

    menu.addEventListener("mouseleave", (event) => {
        const li = event.target.closest("li");
        li.classList.remove("hovered");
    });
});

sideNavDropdowns.forEach(dropdown => {
    const button = dropdown.querySelector("button");

    button.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        dropdown.nextElementSibling.classList.toggle("show");
    });
});

sideNavLinks.forEach((a, index) => {
    a.addEventListener("click", () => {
        localStorage.setItem("active_link", index);
    });

    // Set the href of every sidebar link to /pages/placeholder.html, except for "Home" and "Program Accreditation & Assessment"
    if (a.textContent !== "Home" && a.textContent !== "Program Accreditation & Assessment") {
        a.href = "/pages/placeholder.html";
    }
});


const links = Array.from(document.querySelectorAll(".side-nav a"));
const activeLink = sideNavLinks[clickedLinkIndex];
const ancestorDropdown = activeLink.closest(".dropdown");

if (links) {
    activeLink.parentElement.classList.add('active');

    if (ancestorDropdown && ancestorDropdown.nextElementSibling.classList.contains("expandable")) {
        ancestorDropdown.nextElementSibling.classList.add("show");
    }

    if (activeLink.closest(".expandable")) {
        activeLink.closest(".expandable").classList.add("show");
    }

    let expandableDiv = activeLink.closest(".expandable");

    while (expandableDiv !== null) {
        expandableDiv.classList.add("show");
        expandableDiv = expandableDiv.parentElement.closest(".expandable");
    }
}