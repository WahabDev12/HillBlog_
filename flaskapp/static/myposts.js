//NAVBAR SLIDE ANIMATION
var nav = document.getElementsByTagName("nav")[0];
var burger = document.getElementsByClassName("burger")[0];
burger.addEventListener("click", clicked);
var j = 0;
function clicked() {
  if (j === 0) {
    nav.style = "left:0";
    j++;
  } else {
    nav.style = "left:-300px";
    j--;
  }
}

//IMAGE UPLOAD PROFILE PIC
//declearing html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const userIcon = document.getElementById("user");
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//lets work for image showing functionality when we choose an image to upload

//when we choose a photo to upload

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];
        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
          localStorage.setItem("profile-image",reader.result);
          const choosedFile = localStorage.getItem("profile-image");
          if(choosedFile){
            img.setAttribute("src",choosedFile)
            userIcon.setAttribute("src",choosedFile)
          }
          
        });
        reader.readAsDataURL(choosedFile);          
});

document.addEventListener("DOMContentLoaded",()=>{
  const choosedFile = localStorage.getItem("profile-image");
  if(choosedFile){
    img.setAttribute("src",choosedFile)
    userIcon.setAttribute("src",choosedFile)
  }
})


 



