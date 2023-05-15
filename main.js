var boton = document.querySelector('.boton');

boton.addEventListener("mouseover", function(){
    this.style.display = "block";
});

boton.addEventListener("mouseout", function(){
    this.style.display = "none";
});