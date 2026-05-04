const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close-modal"); // Using querySelector for the class

// 1. Open the modal 
btn.addEventListener('click', () => {
  modal.style.display = "block";
});

// 2. Close the modal when clicking (x)
span.addEventListener('click', () => {
  modal.style.display = "none";
});

// 3. Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
  // This check ensures we ONLY close if the background (myModal) is clicked
  if (event.target === modal) {
    modal.style.display = "none";
  }
});