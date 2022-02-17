function mycity(){
    document.getElementById("cit").style.visibility="visible";
    document.getElementById("out").style.visibility="hidden";
    document.getElementById("outstation").style.backgroundColor="white";
    document.getElementById("city").style.backgroundColor="rgb(134, 134, 5)";
    document.getElementById("city").style.borderRadius="40px";
}
function myouts(){
    document.getElementById("city").style.backgroundColor="white";
    document.getElementById("outstation").style.backgroundColor="rgb(134, 134, 5)";
    document.getElementById("outstation").style.borderRadius="40px";
    document.getElementById("cit").style.visibility="hidden";
    document.getElementById("out").style.visibility="visible";
}

function mybook(){
    document.getElementById("car").style.animation="car 3s 1 0s forwards";
    document.getElementById("box").style.animation="car 3s 1 0s forwards";
    document.getElementById("pay").style.animation="car 3s 1 0s forwards";
}