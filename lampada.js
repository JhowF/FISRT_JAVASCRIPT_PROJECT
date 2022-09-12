const turnon = document.getElementById ('turnon')
const turoff = document.getElementById ('turnoff')
const lamp = document.getElementById ('lamp')


function islampbroken (){
    return lamp.src.indexOf ('quebrada') > -1
}



function lampon () {

    if (!islampbroken ()){

    lamp.src = "./img/ligada.jpg";
}
}
function lamoff(){

    if (!islampbroken ()){
    lamp.src = "./img/desligada.jpg"
    }
}
function breaak(){

    if (!islampbroken ()){
    lamp.src = "./img/quebrada.jpg"
    }
}




turnon.addEventListener ('click', lampon);
turoff.addEventListener ('click', lamoff);
lamp.addEventListener ('mouseover', lampon);
lamp.addEventListener ('mouseleave', lamoff);
lamp.addEventListener ('dblclick', breaak);