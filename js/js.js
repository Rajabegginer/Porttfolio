function menu() {
    document.getElementById('navbar').style.display="block";
    
    document.getElementById('menus').style.display="none";
    document.getElementById('cros').style.display="inline";
    
}

function cross() {
    document.getElementById('navbar').style.display="none";
   
    document.getElementById('menus').style.display="inline";
    document.getElementById('cros').style.display="none";
}

function tableon() {
    document.getElementById("tabon").style.display="block";
    document.getElementById('taboff').style.display="inline";
    document.getElementById('tabonn').style.display="none";
}
function tableoff() {
    document.getElementById("tabon").style.display="none";
    document.getElementById("tabonn").style.display="inline";
    document.getElementById("taboff").style.display="none";
}

function pic() {
    document.getElementById('pic').src="raja2.jpg";
    document.getElementById('text').innerHTML="My Name Is Rajkumar Oad";
    document.getElementById('my-img').style.display="none";
    document.getElementById('eren-img').style.display="inline";

}
function pic2() {
    document.getElementById('pic').src="pic/eren.jpg";
    document.getElementById('text').innerHTML="My Name Is Eren Jeager";
    document.getElementById('my-img').style.display="inline";
    document.getElementById('eren-img').style.display="none";
}
    
