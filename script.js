const navLinks = document.querySelectorAll(".nav-links a");
const pages = document.querySelectorAll(".content");

function showPage(pageId) {
    pages.forEach((page) => {
        page.classList.add("hidden");
        if (page.id === pageId) {
            page.classList.remove("hidden");
        }
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        const pageId = link.getAttribute("data-page");
        showPage(pageId);

        projectFrame.src = "";
    });
});

const galleryItems = document.querySelectorAll(".gallery-item");
const projectPage = document.getElementById("project-page");
const projectFrame = document.getElementById("project-frame");
const backBtn = document.querySelector(".back-btn");

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const embedUrl = item.getAttribute("data-embed");
        projectFrame.src = embedUrl;
        showPage("project-page");

        navLinks.forEach((l) => l.classList.remove("active"));
        document.querySelector('[data-page="gallery"]').classList.add("active");
    });
});

backBtn.addEventListener("click", () => {
    showPage("gallery");
    projectFrame.src = "";
});

const fullscreenOverlay = document.querySelector(".fullscreen-overlay");
const closeFullscreenBtn = document.querySelector(".close-fullscreen");

function toggleFullscreen(embedUrl) {
    fullscreenOverlay.querySelector("iframe").src = embedUrl;
    fullscreenOverlay.classList.add("active");
}

closeFullscreenBtn.addEventListener("click", () => {
    fullscreenOverlay.classList.remove("active");
    fullscreenOverlay.querySelector("iframe").src = "";
});

const projectContainer = document.querySelector(".project-page");
const fullscreenBtn = document.createElement("button");
fullscreenBtn.className = "back-btn";
fullscreenBtn.textContent = "⤢ Fullscreen";
fullscreenBtn.style.marginLeft = "1rem";

const descriptionDiv = document.createElement("div");
descriptionDiv.className = "project-description";

projectContainer.insertBefore(descriptionDiv, projectFrame);
projectContainer.insertBefore(fullscreenBtn, backBtn.nextSibling);

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const embedUrl = item.getAttribute("data-embed");
        const projectName = item.querySelector("p").textContent;
        let projectDescription;
            switch (projectName) {
                case "Homework Mech":
                    projectDescription = "Game about robot that does homework.";
                    break;
                case "Killer Class":
                    projectDescription = "Animation about a mysterious killer that constantly tries to kill the school.";
                    break;
                case "Mask It":
                    projectDescription = "Covid themed platformer game.";
                    break;
                case "Dino Parallax":
                    projectDescription =
                        "Cool animated parallax that you can interact with.";
                    break;
                case "Pastel Speed Draw":
                    projectDescription = "Draw stuff and replay stuff.";
                    break;
                case "Google Meet":
                    projectDescription = "Fun minigame about google meeting";
                    break;
            }
        descriptionDiv.innerHTML = `<h3>${projectName}</h3><p>${projectDescription}</p>`;

        fullscreenBtn.onclick = () => toggleFullscreen(embedUrl);
    });
});

document.querySelector(".scroll-content").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        const imgSrc = e.target.src;
        const galleryItem = Array.from(galleryItems).find((item) => {
            const itemImg = item.querySelector("img").src;
            return itemImg === imgSrc;
        });

        if (galleryItem) {
            const embedUrl = galleryItem.getAttribute("data-embed");
            projectFrame.src = embedUrl;
            showPage("project-page");

            navLinks.forEach((l) => l.classList.remove("active"));
            document.querySelector('[data-page="gallery"]').classList.add("active");

            const projectName = galleryItem.querySelector("p").textContent;
            let projectDescription;
            switch (projectName) {
                case "Homework Mech":
                    projectDescription = "Game about robot that does homework.";
                    break;
                case "Killer Class":
                    projectDescription = "Animation about a mysterious killer that constantly tries to kill the school.";
                    break;
                case "Mask It":
                    projectDescription = "Covid themed platformer game.";
                    break;
                case "Dino Parallax":
                    projectDescription =
                        "Cool animated parallax that you can interact with.";
                    break;
                case "Pastel Speed Draw":
                    projectDescription = "Draw stuff and replay stuff.";
                    break;
                case "Google Meet":
                    projectDescription = "Fun minigame about google meeting";
                    break;
            }

            descriptionDiv.innerHTML = `<h3>${projectName}</h3><p>${projectDescription}</p>`;

            fullscreenBtn.onclick = () => toggleFullscreen(embedUrl);
        }
    }
});
