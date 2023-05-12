function fun()
{
    var email="sunil143@gmail.com";
    var pass="1234"
    var userGivenmail=document.getElementById("email").value
    var userGivenpass=document.getElementById("pass").value
    if(email==userGivenmail && pass==userGivenpass)
    {
       document.getElementById("fom").setAttribute("action","../project/project.html")
       document.getElementById("but").setAttribute("type","submit")
    }
    else if(email!=userGivenmail && pass==userGivenpass)
    {
        document.getElementById("bdy").style.backgroundImage="liner-graident(90deg,red,rgb(52,208,65))"
        document.getElementById("result").innerHTML="Wrong Email address"
        document.getElementById("inputDiv").style.border="3px solid red"
        document.getElementById("passwordDiv").style.border="3px solid royalblue"
    }
    else if(email==userGivenmail && pass!=userGivenpass)
    {
        document.getElementById("bdy").style.backgroundImage="liner-graident(90deg,rgb(52,208,65),red)"
        document.getElementById("result").innerHTML="Wrong Password"
        document.getElementById("inputDiv").style.border="3px solid royalblue"
        document.getElementById("passwordDiv").style.border="3px solid red"
    }
    else{
        document.getElementById("bdy").style.backgroundImage="liner-graident(90deg,red,red)"
        document.getElementById("result").innerHTML="Wrong Password and Email wrong"
        document.getElementById("inputDiv").style.border="3px solid red"
        document.getElementById("passwordDiv").style.border="3px solid red"   
    }
}
function visiblePassword()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./61-613142_see-no-evil-monkey-icon-monkey-eyes-closed.png")
    
}
function hidePassword()
{
    document.getElementById("pass").removeAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./earsclose.jpg")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
}
