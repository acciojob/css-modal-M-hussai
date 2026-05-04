const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close-modal")[0];

// Open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when clicking (x)
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}