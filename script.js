// Get the modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const galleryItems = document.querySelectorAll('.gallery-item');

// Loop through each gallery item and add click event listener
galleryItems.forEach(item => {
item.addEventListener('click', function() {
modal.style.display = 'block'; // Display the modal
modalImg.src = this.src; // Set the modal image source to clicked image source
});
});

// Close the modal when close button or outside modal is clicked
const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', function() {
modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
if (event.target === modal) {
modal.style.display = 'none';
}
});
