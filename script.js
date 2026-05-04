const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close-modal")[0];

// Open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Close when (x) is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close when clicking OUTSIDE the white box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}