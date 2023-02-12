// Select the modal div
const modal = document.getElementById("modal-div-id");

// Get the image and insert it inside the modal
const img = document.getElementById("modal-image-id");
const modalImg = document.getElementById("img01");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
}

// Close modal when click outside the modal image
window.onclick = function(event) {
    let classNameClick = event.target.className;
    console.log(classNameClick);

    if (classNameClick === "modal-div-class" || classNameClick === "close") {
      modal.style.display = "none";
    }
};