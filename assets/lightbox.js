function includeHTML(){
    let html = '<div popup_LB> <span prevBtn_LB>&#10094</span> <img src="./assets/img/1.jpg" mainPopupImg_LB> <span nextBtn_LB>&#10095</span> <span close_LB onclick="close_LB()">✖</span> </div>';
    let createDiv = document.createElement("div");
    createDiv.innerHTML = html;
    document.body.insertBefore(createDiv, document.body.firstChild);
}



let img;
let current;
function lightBoxFun(imgClassName){
    includeHTML();
    img = document.getElementsByClassName(imgClassName);
    for(let i=0; i<img.length; i++){
        // added cursor pointer to all selected image 
        img[i].style.cursor = "pointer";
        // added eventlistner
        img[i].addEventListener("click",function(){
            document.querySelector("[popup_LB]").style.display = "flex";
            document.querySelector("[mainPopupImg_LB]").style.userSelect = "none";
            document.querySelector("[mainPopupImg_LB]").src = this.src;
            checkArrow();
        });
    }
    // event for next and prev btn
    document.querySelector("[prevBtn_LB]").addEventListener("click",function(){prevBtn_LB()});
    document.querySelector("[nextBtn_LB]").addEventListener("click",function(){nextBtn_LB()});
}



// Get Current Image Num
function getCurrentImage(){
    for(let i=0; i<img.length; i++){
        if(img[i].src == document.querySelector("[mainPopupImg_LB]").src){
            current = i;
        }
    }
}



// Close Btn
function close_LB(){
    document.querySelector("[popup_LB]").style.display = "none";
    document.querySelector("[mainPopupImg_LB]").src = "";
};
// Preve Btn
function prevBtn_LB(){
    getCurrentImage();
    current--;
    document.querySelector("[mainPopupImg_LB]").src = img[current].src;
    checkArrow();
}
// Next Btn
function nextBtn_LB(){
    getCurrentImage();
    current++;
    document.querySelector("[mainPopupImg_LB]").src = img[current].src;
    checkArrow();
}



// Check Arrow
function checkArrow(){
    getCurrentImage();
    if(current == "0"){
        document.querySelector("[prevBtn_LB]").style.display = "none";
        document.querySelector("[nextBtn_LB]").style.display = "block";
    }else if(current == img.length-1){
        document.querySelector("[prevBtn_LB]").style.display = "block";
        document.querySelector("[nextBtn_LB]").style.display = "none"; 
    }else{
        document.querySelector("[nextBtn_LB]").style.display = "block";
        document.querySelector("[prevBtn_LB]").style.display = "block";
    }
}