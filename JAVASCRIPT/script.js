
function submit() {
    var form = document.getElementById('join-f');
    form.style.display = "none";
    alert("Congratulatons You Are Now Part Of Our Community");
}

function OpenForm() {
    var form = document.getElementById('join-f');
    form.style.display = "flex"; 
}

function close(){
    var form = document.getElementsByClassName('join-f');
    form.style.display = "none";
}

// ACTIVITIES

function report(){
    let rep = document.getElementById("report");
    rep.style.display = "flex";
}

function contact(){
    let rep = document.getElementById("contact");
    rep.style.display = "flex";

}

function quiz(){
    let rep = document.getElementById("quiz");
    rep.style.display = "flex";
    
}

function invent(){
    let rep = document.getElementById("invent");
    rep.style.display = "flex";

}