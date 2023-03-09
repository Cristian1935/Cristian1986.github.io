var menu_visible= false;
let menu = document.getElementById('nav');
function mostrarOcultarmenu(){
	if(menu_visible==false){
		menu.style.display= "block";
		menu_visible=true;
	}
}
else{
menu.style.display=none;
menu_visible =  false;

let links = document.querySelector("nav a");
for(var x = 0; < links.length;  x ++){
	links[x].onclick = function() {
		menu.style.display = "none";
	menu_visible= false;
	}
}

}

document.getElementById('boton').onclick = function(){
console.log("Gracias por su interes,contácteme ahora");


}