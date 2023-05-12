var imagesArray=["0.jpg.jpg","1.jpg.jpg","2.jpg.jpg","3.jpg.jpg","4.jpg.jpg","5.jpg.jpg","6.jpg.jpg","7.jpg.jpg","8.jpg.jpg","9.jpg.jpg","10.jpg.jpg","11.jpg.jpg","12.jpg.jpg","13.jpg.jpg","14.jpg.jpg",,"15.jpg.jpg",,"16.jpg.jpg",,"17.jpg.jpg",,"18.jpg.jpg","19.jpg.jpg",,"20.jpg.jpg",];
var i=0;
function header()
{
    if(i>=7)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../javascript/direct_model/images/${imagesArray[i]})`

    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../javascript/direct_model/images/${imagesArray[i]})`
    }
    i++
    var time=setTimeout(header,20000)
}
function right()
{
    i++
    if(i>=imagesArray.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../javascript/direct_model/images/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../javascript/direct_model/images/${imagesArray[i]})`
    }
}
function left()
{
    i--;
    if(i<=0)
    {
        i=imagesArray.length-1;
        document.getElementById("header").style.backgroundImage=`url(../javascript/direct_model/images/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../javascript/direct_model/images/${imagesArray[i]})`
    }
}
// Gallery code for js
 
var img=document.getElementsByClassName("images")
console.log(img)
for(i=0;i<img.length;i++)
{
    img[i].src=`../javascript/direct_model/images/${i}.jpg.jpg`
}
function colseTheImage()
{
    document.getElementById("bigimage").setAttribute("style","display:none")
}
function openTheImage()
{
    document.getElementById("bigimage").setAttribute("src","../javascript/direct_model/images/${img}.jpg.jpg")
    document.getElementById("bigimage").removeAttribute("style");
}