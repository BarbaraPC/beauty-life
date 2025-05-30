function modalBienvenida() {
	document.getElementById("modalBienvenida").style.display="block";
	document.getElementById("tituloEncabezado").style.animationPlayState = "paused";
	document.getElementById("subtituloEncabezado").style.animationPlayState = "paused";
	document.documentElement.style.overflow="hidden";
}
function cerrarMBB() {
	document.getElementById("modalBienvenida").style.display="none";
	document.getElementById("tituloEncabezado").style.animationPlayState = "running";
	document.getElementById("subtituloEncabezado").style.animationPlayState = "running";
	document.documentElement.style.overflow="auto";
}

//Aquí empieza el código del slideshow automático

	var bgCounter = 0;

function heroSlideshow() {
	
		var listaImgBlog = [
				"url('Media/hero2.jpg')",
				"url('Media/hero3.jpg')",
				"url('Media/hero4.jpg')"
	];
	bgCounter++;

	if (bgCounter == listaImgBlog.length){
			bgCounter = 0;
	}

	document.getElementById("encabezado").style.backgroundImage = listaImgBlog[bgCounter];

}
//Aqui empieza el código del formulario

function modalReserva() {
	document.getElementById("modalReserva").style.display="block";
	document.documentElement.style.overflow="hidden";

	var nombre = document.getElementById("formNombre").value;
	var email = document.getElementById("formEmail").value;
	var telefono = document.getElementById("formTelefono").value;
	var diagnostico = document.getElementById("formDiagnostico").value;
	var cuentanos = document.getElementById("cuentanos").value;

	var mensaje;

	(function formCheck(){
		if (!document.getElementById("formNombre").checkValidity()){
			mensaje = "Introduce un nombre correcto.";
			document.getElementById("mensajeReserva").innerHTML = mensaje;
		}
		else if(!document.getElementById("formEmail").checkValidity()){
			mensaje = "Introduce el email correcto.";
			document.getElementById("mensajeReserva").innerHTML = mensaje;
		}
		else if(!document.getElementById("formTelefono").checkValidity()){
			mensaje = "Introduce el teléfono correcto.";
			document.getElementById("mensajeReserva").innerHTML = mensaje;
		}
		else if(!document.getElementById("formDiagnostico").checkValidity()){
			mensaje = "Introduce el diagnóstico.";
			document.getElementById("mensajeReserva").innerHTML = mensaje;
		}
		else {
			mensaje = "Apreciado/a " + nombre + " con la solicitud de : " + diagnostico + ", con email " +  email + " y telefono " + telefono + " nos pondremos en contacto con usted para concretar dia y hora. " ;

		document.getElementById("mensajeReserva").innerHTML = mensaje;
		}
	})();
}
function cerrarMBR(){
	document.getElementById("modalReserva").style.display="none";
	document.documentElement.style.overflow="auto";

	document.getElementById("formNombre").value = "";
	document.getElementById("formEmail").value = "";
	document.getElementById("formTelefono").value = "";
	document.getElementById("formDiagnostico").value = "";
	document.getElementById("cuentanos").value = "";
}

//aqui empieza el código para el menú

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu() {
	var posActualScroll = document.documentElement.scrollTop;

	if (posPreviaScroll>posActualScroll) {
		//cuando estamos subiendo, mostramos el menú
		document.getElementById("navbar").style.top = "0";

		if (posActualScroll>150) {
		document.getElementById("navbar").style.height = "50px";
		document.getElementById("navbar").style.fontSize = "1.75rem";
		document.getElementById("menu").style.lineHeight = "50px";
		document.getElementById("submenu").style.top = "50px";
		}
		else {
			document.getElementById("navbar").style.height = "100px";
			document.getElementById("navbar").style.fontSize = "2rem";
			document.getElementById("menu").style.lineHeight = "150px";
			document.getElementById("submenu").style.top = "100px";
		}
	}
	else {

		//cuando estamos bajando escondemos el menú
		
		if (posActualScroll<150) {
			document.getElementById("navbar").style.height = "50px";
			document.getElementById("navbar").style.fontSize = "1.75rem";
			document.getElementById("menu").style.lineHeight = "50px";
			document.getElementById("submenu").style.top = "50px";
		}
		else {
			document.getElementById("navbar").style.top = "-100px";
		}
	}
	posPreviaScroll = posActualScroll;
}

//Aquí empieza el código de los servicios

function mostrarServicio(servicioId, tabClicada) {
  let secciones = document.getElementsByClassName('contServicio');
  
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.display = 'none';
  }

  document.getElementById(servicioId).style.display = 'block';

  let tabLinks = document.getElementsByClassName("etiquetaPestanas");

  	for (let i=0; i<tabLinks.length; i++){
  		tabLinks[i].classList.remove("pestanaActiva");
  	}
  	document.getElementById(tabClicada).classList.add("pestanaActiva");

}

//Aquí empieza el codigo del lightbox
	
// function modalLightBoxB(){
// 	document.getElementById("modalLightBoxB").style.display = "flex";
// 	document.documentElement.style.overflow = "hidden";

// 	var listaImgBlog = document.getElementsByClassName("imgBlog");
	

// 	for (var i=0; i<listaImgBlog.length; i++) {
// 		listaRutaImgBlog.push(listaImgBlog[i].querySelector("img").src);
// 	}

// 	//console.log(listaRutaImgBlog);

// 	document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src='Media/blog1.jpg'>";
// }

	var listaRutaImgBlog = [];
	var numeroIMG =0;

function readyLightbox() {

	var listaImgBlog = document.getElementsByClassName("imgBlog");
	

	for (var i=0; i<listaImgBlog.length; i++) {
		listaRutaImgBlog.push(listaImgBlog[i].querySelector("img").src);
	}

	for (var i=0; i< listaImgBlog.length; i++){
		listaImgBlog[i].addEventListener('click', openLightbox);
	}
	function openLightbox() {

		var rutaImgClicada = event.currentTarget.querySelector("img").src;
		numeroIMG = listaRutaImgBlog.indexOf(rutaImgClicada);

		document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src=" + listaRutaImgBlog[numeroIMG]+">";
	
		document.getElementById("modalLightBoxB").style.display = "flex";
		document.documentElement.style.overflow = "hidden";
		closeLightbox();
	}
function closeLightbox() {
	window.addEventListener("click", function(event) {

		if (!event.target.closest(".imageLightbox")&& !event.target.closest(".imgBlog")&& !event.target.closest(".lbButtons")&& !event.target.closest(".fa-solid") ) {
			//console.log("SE puede cerrar");
			document.getElementById("modalLightBoxB").style.display = "none";
			document.documentElement.style.overflow = "auto";
		}
	});
}
}
function nextImgBlog() {

	numeroIMG++;

	if (numeroIMG == listaRutaImgBlog.length){
		numeroIMG = 0;
	}

	document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src=" + listaRutaImgBlog[numeroIMG]+">";
	console.log(numeroIMG);
}
function prevImgBlog() {

	numeroIMG--;

	if (numeroIMG < 0){
		numeroIMG = listaRutaImgBlog.length-1;
}
	document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src=" + listaRutaImgBlog[numeroIMG]+">";
	//console.log(numeroIMG);
}


