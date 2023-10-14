// Add a click event listener to the menu toggle button
document.getElementById('menuToggle').addEventListener('click', function() {
    const navRights = document.querySelector('.navRights');
    navRights.classList.toggle('active');

    const icons = document.querySelector('.icon');
    icons.classList.toggle('active');
  });
  
  // Close the mobile menu when a link is clicked (optional)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('.nav-links').classList.remove('active');
      document.querySelector('.icons').classList.remove('active');
    });
  });


  const counterElement = document.getElementById('counter');
  let count = 0;

  function updateCounter() {
      count++;
      if (count <= 100) {
          counterElement.innerText = count;
          setTimeout(updateCounter, 60); // Change the speed by adjusting the timeout value (milliseconds)
      }
  }

  // Start the counter
  updateCounter();