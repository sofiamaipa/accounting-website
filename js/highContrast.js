function toggleMenu() {
    var menu = document.getElementById("accessibility-options");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Get the toggle button
var toggleButton = document.getElementById("highContrast");

// Add a click event listener to the toggle button
toggleButton.addEventListener("click", function() {
    // Get the body element
    var body = document.getElementsByTagName("body")[0];
    // Toggle the "high-contrast" class on the body element
    body.classList.toggle("high-contrast");
});


// Large Text
var largeTextButton = document.getElementById('largeText');

largeTextButton.addEventListener('click', function() {
  // Toggle the large text class on the body
  document.body.classList.toggle('large-text');
});


//Top button
 // Get the button
 let mybutton = document.getElementById("myBtn");
    
 // When the user scrolls down 300px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   const target = document.getElementById('home');
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
 }


 // Mail form 
 function openEmailClient(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var theme = document.getElementById('theme').value;
    var message = document.getElementById('message').value;

    var subject = encodeURIComponent(theme); //To ensure that any special characters are properly encoded and included.
    var body = encodeURIComponent(message + '\n\n' + 'Όνομα: ' + name + '\nEmail: ' + email);

    var mailtoLink = 'mailto:info@logistika-volos.gr?subject=' + subject + '&body=' + body;
    window.location.href = mailtoLink;
  }
  
  // Smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  });

  // Smooth scrolling on page load
window.addEventListener('load', function() {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
  