// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function updatePlaceholder() {
    const p = document.getElementById('size-holder');
    if (!p) return; // Exit if element with id 'size-holder' doesn't exist

    const width = window.innerWidth;
    const height = window.innerHeight;

    p.textContent = `Width: ${width}px, Height: ${height}px`;

}

// Ensure the DOM is fully loaded before calling functions
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    updatePlaceholder(); // Initial call
    window.addEventListener('resize', updatePlaceholder); // Call on window resize
});

document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('new-divAdd');
    var divContainer = document.getElementById('add-div-here');
    //var inputText = document.getElementById('add-text');
    var aCount = 0; // Track the number of divs added
    var imageUrl = "../../images/facebook.svg";
    var link = "https://www.facebook.com/marloujake.labadnapoli?mibextid=ZbWKwL"
    addButton.addEventListener('click', function () {
        aCount++;

        // Get current value of input field
        var inputTextValue = inputText.value;

        // Create anchor element
        var a = document.createElement('a');
        a.classList.add('links-item', 'btn', 'btn-outline-info', 'btn-lg', 'rounded-pill', 'm-2', 'p-1');
        //a.classList.add('btn', 'btn-outline-info');
        a.id = `item-${aCount}`;
        //a.textContent = inputTextValue;
        a.href = link;
        a.title = 'Visit Me On Facebook';
        var img = document.createElement('img');
        img.src = imageUrl; // Set image source
        img.alt = 'faceboo icon'; // Set image alternative text
        img.classList.add('img-fluid', 'icons-footer'); // Optional: Bootstrap class for responsive images

        a.appendChild(img);
        // Append anchor element to container
        divContainer.appendChild(a);
        console.log("Add button clicked!"); // Check if this message appears in the console
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('add-element');
    var liContainer = document.getElementById('cont');
    //var inputText = document.getElementById('add-text');
    var aCount = 0; // Track the number of divs added
    var imageUrl = "../../images/facebook.svg";
    var link = "https://www.facebook.com/marloujake.labadnapoli?mibextid=ZbWKwL"
    addButton.addEventListener('click', function () {
        aCount++;

        // Get current value of input field
        //var inputTextValue = inputText.value;

        // Create anchor element
        var a = document.createElement('a');
        a.classList.add('links-item', 'btn', 'btn-outline-info', 'btn-lg', 'rounded-pill', 'm-2', 'p-1');
        //a.classList.add('btn', 'btn-outline-info');
        a.id = `item-${aCount}`;
        //a.textContent = inputTextValue;
        a.href = link;
        a.title = 'Visit Me On Facebook';
        var img = document.createElement('img');
        img.src = imageUrl; // Set image source
        img.alt = 'faceboo icon'; // Set image alternative text
        img.classList.add('img-fluid', 'icons-footer'); // Optional: Bootstrap class for responsive images

        a.appendChild(img);
        // Append anchor element to container
        liContainer.appendChild(a);
        console.log("Add button clicked!"); // Check if this message appears in the console
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var privacyLink = document.getElementById('privacy-link');
    var resumeLink = document.getElementById('resume-link');

    function togglePrivacy() {
        if (window.innerWidth < 576) {
            if (navbarCollapse.classList.contains('show')) {
                privacyLink.style.display = 'block';
                resumeLink.style.display = 'block';
            } else {
                privacyLink.style.display = 'none';
                resumeLink.style.display = 'none';
            }
        }
    }

    // Initially check the state of the navbar
    toggleNavbarMenu();

    // Listen for collapse events
    navbarCollapse.addEventListener('show.bs.collapse', function () {
        privacyLink.style.display = 'block';
        resumeLink.style.display = 'block';
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        privacyLink.style.display = 'none';
        resumeLink.style.display = 'none';
    });

    // Update the display when the window is resized
    window.addEventListener('resize', toggleNavbarMenu);
});


//download resume
document.getElementById('download-button').addEventListener('click',
    function () {

        console.log("Download Button Clicked!");
        const resume = '../files/Resume_Napoli,MarlouJakeL.pdf';

        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = 'Resume_Napoli,MarlouJakeL.pdf';
        a.href = resume;
        // Append the link to the body and click it
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
    });



document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navbarToggler = document.getElementById('navbar-toggler');

    // Toggle navbar visibility on button click
    navbarToggler.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Close navbar when clicking outside of it
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnToggler = navbarToggler.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggler) {
            navbar.classList.remove('active');
        }
    });
});




