let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button){
    button.onclick = function (){
        document.querySelector("#resposta").innerHTML = button.innerHTML;
    }
})
