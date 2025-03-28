
const fileLabel = document.querySelector(".file-upload"); 

const fileNameDisplay = document.getElementById("fileName");
const fileInput = document.getElementById("file-upload");

const fileInputs = document.querySelectorAll(".file-input");
const imgTxt = document.querySelector(".img-txt");
const audioTxt = document.querySelector(".audio-txt");

const convert = document.querySelectorAll("#convertNow");
const closeBtn = document.querySelector('.close-btn');
const closeBtn2 = document.querySelector('.close-btn2');

const imgTxtBtn = document.querySelector('.img-txt-btn');
const audioTxtBtn = document.querySelector('.audio-txt-btn');

const imgTxtCon = document.querySelector('.img-txt-container');
const audioTxtCon = document.querySelector('.audio-txt-container');


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

// convert.forEach(button => {
//     button.addEventListener('click', function(event) {
//         console.log("Convert button clicked");
//         event.preventDefault();
//         imgTxt.style.display = "flex";
//     });
// });


imgTxtBtn.addEventListener('click', function(event) {
        console.log("Convert button clicked");
        event.preventDefault();
        imgTxt.style.display = "flex";
    });

    audioTxtBtn.addEventListener('click', function(event) {
        console.log("Convert button clicked");
        event.preventDefault();
        audioTxt.style.display = "flex";
    });


// document.querySelector('.copy-button').addEventListener('click', function() {
//     // Get the parent container
//     const container = this.parentElement;
    
//     // Find the p element within the container
//     const pElement = container.querySelector('p');
    
//     // Copy the text content
// navigator.clipboard.writeText(pElement.textContent)
//     .then(() => {
//     // Optional feedback
//     const originalText = this.textContent;
//     this.textContent = 'Copied!';
//     setTimeout(() => {
//         this.textContent = originalText;
//     }, 2000);
//     })
//     .catch(err => {
//     console.error('Failed to copy text: ', err);
//     });
// });

// Select all copy buttons on the page
document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', function() {
      // Get the parent container of the clicked button
      const container = this.parentElement;
      
      // Find the p element within this specific container
      const pElement = container.querySelector('p');
      
      // Copy the text content
      navigator.clipboard.writeText(pElement.textContent)
        .then(() => {
          // Optional feedback for this specific button
          const originalText = this.textContent;
          this.textContent = 'Copied!';
          setTimeout(() => {
            this.textContent = originalText;
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  });

closeBtn.addEventListener("click", function() {
    imgTxt.style.display = "none";
});

// Close when clicking outside the carousel content
imgTxtCon.addEventListener("click", function(event) {
    if (event.target === imgTxtCon) {
    imgTxt.style.display = "none";
    }
});


closeBtn2.addEventListener("click", function() {
    audioTxt.style.display = "none";
});

// Close when clicking outside the carousel content
audioTxtCon.addEventListener("click", function(event) {
    if (event.target === audioTxtCon) {
    audioTxt.style.display = "none";
    }
});
