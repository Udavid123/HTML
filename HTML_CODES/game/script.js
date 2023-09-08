var character = document.getElementById("character");
document.addEventListener("click",jump);
function jump(){
    character.classList.add("animate");
    setTimeout(removeJump,300); //300ms = length of animation
};
function removeJump(){
    character.classList.remove("animate");
}

if (character.classList == "animate"){return;}

var block = document.getElementById("Block");
function cheakDead(){
    let characterTop = parseInt(Window.getcomputedstyle(character).getPropetyValue("top"));
    let blockLeft = parseInt(Window.getcomputedstyle(block).getPropetyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("GAME OVER");
    }
}