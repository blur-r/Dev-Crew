
const fileLabel = document.querySelector(".file-upload"); 

const fileNameDisplay = document.getElementById("fileName");
const fileInput = document.getElementById("file-upload");

const fileInputs = document.querySelectorAll(".file-input");
const imgTxt = document.querySelector(".img-txt");
const convert = document.querySelectorAll("#convertNow");


fileInputs.forEach(input => {
    input.addEventListener('change', function() {
        const label = document.querySelector(`label[for="${this.id}"]`);
        let selectedFile = this.files[0].name;
        if(selectedFile.length > 12) {
            const dotIndex = selectedFile.lastIndexOf('.'); 
            const extension = dotIndex !== -1 ? selectedFile.slice(dotIndex) : ''; 
            selectedFile = selectedFile.slice(0, 10) + "..." + extension;
        }
        const fileName = this.files[0] ? selectedFile : 'No file chosen';
        if (label) {
            label.textContent = fileName; 
        }
    });
});


const subscribe = document.querySelector(".footer-btn"); 
subscribe.addEventListener('click', function() {
    event.preventDefault();
    subscribe.textContent = "Subscribed!";
    subscribe.style.backgroundColor = "green";
})  

convert.forEach(button => {
    button.addEventListener('click', function(event) {
        console.log("Convert button clicked");
        event.preventDefault();
        imgTxt.style.display = "flex";
    });
});

