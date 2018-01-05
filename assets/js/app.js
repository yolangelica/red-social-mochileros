
// TABS PAGINA MOCHILEROS BITACORA, mochileros,perfil

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//CLOSE TABS

/* CREA BITACORAS*/
var idPin= 0 ;
$(document).ready(()=> {

});



function savePin(){
    var titulo = $("#tituloInput").val();//crea variable para rescatar valor escrito por usuario en titulo llamando ID desde HTML
    var descripcion = $("#descripcionInput").val();//toma el valor de la descripcion
    var url= $("#urlInput").val();// toma el valor de la URL

    $("#pines").append("<div id='pin_" + idPin + " ' class='pin col-md-3'>" + 
    //este es el frente
    "<div class='panel panel-success front'>" +
    "<div class='panel-heading'>" +
    "<h3 class='panel-title'>" + titulo + "</h3>" + "</div>" +
    "<div class= 'panel-body'>" +
    "<a href='#' class='thumbnail'>" +
    "<img src='" + url + " ' alt='...'>" +
    "</a>" + 
    "</div>" + 
    "<div class='panel-footer'>" + descripcion + "</div> </div>" + 
    //este es el panel detras 
    "<div class= 'rear'>" + 
    "</div>" + 
    "</div>");

};


/*CAMBIAR COLOR A CORAZON AL HACER CLICK*/

function changeColor(x)
{
        x.style.color="red";
}

/* crea bitacoras :imagen y texto*/

 function saveprofile(){
    var title = $("#tituloInput2").val();//crea variable para rescatar valor escrito por usuario en titulo llamando ID desde HTML
    var descrip = $("#descripcionInput2").val();//toma el valor de la descripcion
    var ur= $("#urlInput2").val();// toma el valor de la URL

    $("#aca").append("<div id='pic_" + idPin + " ' class='pin col-md-3'>" + 
    //este es el frente
    "<div class='panel panel-success front'>" +
    "<div class='panel-heading'>" +
    "<h3 class='panel-title'>" + titulo + "</h3>" + "</div>" +
    "<div class= 'panel-body'>" +
    "<a href='#' class='thumbnail'>" +
    "<img src='" + url + " ' alt='...'>" +
    "</a>" + 
    "</div>" + 
    "<div class='panel-footer'>" + descripcion + "</div> </div>" + 
    //este es el panel detras 
    "<div class= 'rear'>" + 
    "</div>" + 
    "</div>");

};
/* close bitacoras*/


