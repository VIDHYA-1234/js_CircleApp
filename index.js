addEventListener("click", createCircle);

function getRandomColor(colorTag){
    const value ="0123456789ABCDEF"
    let  hashTag ="#";
    for( let i=0; i < 6; i++){
        hashTag += value[Math.floor(Math.random()*16)];
    
}
return hashTag;
}
// console.log(getRandomColor())

function createCircle(e){
         var circle=document.createElement("div");
         circle.className="circle";
         circle.style.left = e.pageX + "px";
         circle.style.top = e.pageY + "px";
         circle.style.backgroundColor=getRandomColor();
         document.body.appendChild(circle)
}

