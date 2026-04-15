// Amare Beacham
// ITMD 411
(function () {
    console.log("Lab 4 Script Running...");
    //  Change the main headline text in the hero section
    const heroHeadline = document.querySelector('.hero h1');
    if (heroHeadline) {
        heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
    }
    //  Change the subheadline text with bold and italic styling
    const heroSub = document.querySelector('.hero p');
    if (heroSub) {
        heroSub.innerHTML = "<strong><em>Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.</em></strong>";
    }
    //  Change the hero background image
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    }
    //  Remove the "Get Started" CTA button from the hero
    const ctaButton = document.querySelector('.hero a');
    if (ctaButton) {
        ctaButton.remove();
    }
    //  Change the navbar background color to match the footer background color
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('nav');
    if (footer && navbar) {
        const footerBg = window.getComputedStyle(footer).backgroundColor;
        navbar.style.backgroundColor = footerBg;
    }
    //  Change all service section icons color
    const serviceIcons = document.querySelectorAll('.services .material-symbols-outlined');
    serviceIcons.forEach(icon => {
        icon.style.color = "#47C714";
    });
    //  Change the digital marketing icon to use ads_click
    serviceIcons.forEach(icon => {
        if (icon.textContent.trim().toLowerCase() === "campaign") {
            icon.textContent = "ads_click";
        }
    });
    //  Inject CSS to make specialized marketing go across
    const style = document.createElement('style');
    style.innerHTML = `
        @media (min-width: 1024px) {
            [data-section="product_cards"] {
                grid-template-columns: repeat(4, 1fr) !important;
            }
        }
    `;
    document.head.appendChild(style);
    //  Change the Musicians image
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        if (
            (img.alt && img.alt.toLowerCase().includes("musician")) ||
            (img.src && img.src.toLowerCase().includes("musician"))
        ) {
            img.src = "https://picsum.photos/id/453/400/300";
        }
    });
    console.log("All changes are now working.");
})();