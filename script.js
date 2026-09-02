// =========================================
// PORTFOLIO INTERACTIONS
// =========================================


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .experience-item, .education-item, .certifications span"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll(
    "section[id]"
);

const navigationLinks = document.querySelectorAll(
    ".navbar nav a"
);


const navigationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navigationLinks.forEach((link) => {

                    link.classList.remove("active");

                });


                const activeLink = document.querySelector(
                    `.navbar nav a[href="#${entry.target.id}"]`
                );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },
    {
        rootMargin: "-30% 0px -60% 0px"
    }
);


sections.forEach((section) => {

    navigationObserver.observe(section);

});



// =========================================
// CURRENT YEAR
// =========================================

const footer = document.querySelector("footer p");


if (footer) {

    const currentYear = new Date().getFullYear();

    footer.innerHTML = footer.innerHTML.replace(
        "2026",
        currentYear
    );

}



// =========================================
// PROJECT CARD INTERACTION
// =========================================

const projectCards = document.querySelectorAll(
    ".project-card"
);


projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("hovered");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("hovered");

    });

});