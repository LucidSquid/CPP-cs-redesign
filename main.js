const sidebarMenus = document.querySelectorAll(".sidebar a");

sidebarMenus.forEach(menu => {
    menu.addEventListener("mouseover", (event) => {
        const li = event.target.closest("li");
        li.classList.add("hovered");
    });

    menu.addEventListener("mouseleave", (event) => {
        const li = event.target.closest("li");
        li.classList.remove("hovered");
    });
});

const sidebarDropdowns = document.querySelectorAll(".sidebar .dropdown");

sidebarDropdowns.forEach(dropdown => {
    const button = dropdown.querySelector("button");

    button.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
});

const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach(a => {
    a.addEventListener("click", () => {
        localStorage.setItem("active_link", a.textContent);
        console.log("a.textContent is ", a.textContent); // delete
    });
});

const clickedLink = localStorage.getItem('active_link');

if (clickedLink) {
    const links = Array.from(document.querySelectorAll(".sidebar a"));
    const activeLink = links.filter(a => a.textContent === clickedLink)[0];
    
    if (links) {
        activeLink.parentElement.classList.add('active');
    }
}