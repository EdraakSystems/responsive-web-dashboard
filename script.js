// Get the file input element
const inputImage = document.getElementById('image');

// Initialize the Cropper.js library
const cropper = new Cropper(inputImage, {
  aspectRatio: 1, // set the aspect ratio to 1:1 (square)
  viewMode: 2, // set the view mode to cropbox
  autoCropArea: 1, // automatically crop the entire image
  crop: function(event) {
    // When the image is cropped, update the hidden input field with the cropped data
    document.getElementById('croppedData').value = cropper.getCroppedCanvas().toDataURL();
  }
});

// Handle file selection
const imageInput = document.getElementById('image');
imageInput.addEventListener('change', function() {
  const file = this.files[0];

  // Load the selected file into the Cropper.js library
  const reader = new FileReader();
  reader.onload = function(event) {
    cropper.replace(event.target.result);
  }
  reader.readAsDataURL(file);
});
