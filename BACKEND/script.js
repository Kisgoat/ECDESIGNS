// Entry point of your application
function main() {

  // Function to format the website based on device
function formatWebsiteForDevice() {
  var viewportWidth = window.innerWidth;

  // Mobile devices
  if (viewportWidth < 768) {
    // Apply mobile-specific formatting
    // Example: document.body.style.fontSize = "14px";
  }
  
  // Tablets and small desktops
  else if (viewportWidth >= 768 && viewportWidth < 992) {
    // Apply tablet-specific formatting
    // Example: document.body.style.fontSize = "16px";
  }

  // Regular desktops and laptops
  else {
    // Apply desktop-specific formatting
    // Example: document.body.style.fontSize = "18px";
  }
}

// Call the formatWebsiteForDevice function on page load
window.addEventListener('load', formatWebsiteForDevice);

// Call the formatWebsiteForDevice function when the window is resized
window.addEventListener('resize', formatWebsiteForDevice);


// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
  main();
});
