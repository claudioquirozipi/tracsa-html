// como primer parametro
// se agrega la clase que se quiere llamar
// segundo parametro 
// se agrega los pixeles que deben superar el scroll al objeto para que 
// se agregue la clase.

function apareceScroll(classReq, numeroScroll) {
	var html = document.getElementsByTagName("html")[0];
	var elementoAparece = document.getElementsByClassName(classReq) ;
	console.log(elementoAparece);
	console.log(html);

	document.addEventListener("wheel", function(){
		var topEvent = html.scrollTop;
		console.log(topEvent);
		for (var i = 0; i < elementoAparece.length; i++) {
			var topElementAparece =elementoAparece[i].offsetTop;
			if (topEvent > topElementAparece - numeroScroll) {

				elementoAparece[i].style.transform = "translateX(0)";
			}
		}
	})

}



apareceScroll("post__Izquierda", 400);
apareceScroll("post__Derecha", 200);
apareceScroll("post__Centro", 400);