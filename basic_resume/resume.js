document.getElementById("greet").onclick=function(){
    alert("Hello!Welcome to my resume!");
}

//
document.getElementById("personality").onmousedown=function(){
    document.getElementById("basic").style.display="none";
    document.getElementById("unique").style.display="block";
}
//
document.getElementById("personality").onmouseup=function(){
    document.getElementById("basic").style.display="block";
    document.getElementById("unique").style.display="none";
}

/*
//
document.getElementById("personality").onmouseenter=function(){
    document.getElementById("basic").style.display="none";
    document.getElementById("unique").style.display="block";
}
//
document.getElementById("personality").onmouseleave=function(){
    document.getElementById("basic").style.display="block";
    document.getElementById("unique").style.display="none";
}
*/