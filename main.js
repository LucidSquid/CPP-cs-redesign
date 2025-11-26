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

    // Set the href of every sidebar link to placeholder.html, except for "Home" and "Program Accreditation & Assessment"
    if (a.textContent !== "Home" && a.textContent !== "Program Accreditation & Assessment") {
        a.href = "placeholder.html";
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

// Line chart
const years = ["2009","2010","2011","2012","2013","2014","2015","2016","2017"];
const total = [481,455,638,751,810,818,669,922,928];
const fullTime = [406,401,584,666,729,708,599,864,862];
const partTime = [75,54,54,85,81,110,70,58,66];

const lineChart = new Chart("line-chart", {
  type: "line",
  data: {
    labels: years,
    datasets: [
        {
            label: "Total Students",
            backgroundColor:"#FFB81C",
            borderColor: "#FFB81C",
            data: total
        },
        {
            label: "Full Time Students",
            backgroundColor:"#FFB81C",
            borderColor: "#A4D65E",
            data: fullTime
        },
        {
            label: "Part Time Students",
            backgroundColor:"#FFB81C",
            borderColor: "#A4D65E",
            data: partTime
        }
    ]
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year', // X-axis label
          color: '#FFB81C',
          font: {
            size: 18,
            weight: 'bold'
          }
        },
        ticks: {
            color: "#A4D65E"
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students', // Y-axis label
          color: '#FFB81C',
          font: {
            size: 18,
            weight: 'bold'
          }
        },
        ticks: {
            color: "#A4D65E"
        }
      }
    },
    plugins: {
        title: {
            display: true,
            text: 'Historic Undergraduate Enrollment and Graduation Data',
            color: '#FFB81C',
            font: {
            size: 24,
            },
            padding: {
            top: 10,
            bottom: 10
            }
        },
        legend: {
            labels: {
                color: "#A4D65E"
            }
        }
    
    }
  }
  
});