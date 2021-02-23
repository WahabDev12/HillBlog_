document.getElementById("search-button").addEventListener("click",()=>{
  alert("Feature not Available!! Some other features are not available")
})
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

//IMAGE UPLOAD POST PIC

  const file2 = document.getElementById("file2");
  const img2 = document.getElementById("photo2");
  
  file2.addEventListener('change', function(){
    const reader2 = new FileReader(); //FileReader is a predefined function of JS
    reader2.addEventListener('load', function(){
      //  img2.setAttribute('src', reader2.result);
        localStorage.setItem("recent-image",reader2.result);
    });
    reader2.readAsDataURL(this.files[0]); 
  });

  document.addEventListener("DOMContentLoaded",()=>{
    const postpic = localStorage.getItem("recent-image");
    if(postpic){
      img2.style.display = "block";
      img2.setAttribute("src",postpic);
    }
    
  
  })
 

// MODAL FUNCTIONING
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const dialog = document.querySelector('dialog');
const input = document.querySelector('input');
const output = document.querySelector('output');

openModal.addEventListener('click', () => {
  dialog.showModal();
});

// READ MORE AND READ LESS
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

// LIKE DISLIKE
function myFunction2(x) {
  x.classList.toggle("fa-thumbs-down");
  x.style.color = "#0275d8";
}



