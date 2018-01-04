window.onload = function() {
    /*el primero de sus elementos que retorna porque 
    sabemos que existe al menos uno*/
    var sendButton = document.getElementsByName("btn")[0];
    var thinkInput = document.getElementsByName("texto")[0];
    var timeLine = document.getElementsByName("lineaDeTiempo")[0];
    var cont = document.getElementById("cont");
   
    sendButton.onclick = function() {/*al hacer click*/
        if (thinkInput.value == "") {/*si no escribe y da click*/
            sendButton.disabled =false;/*desabilita boton al llegar a los 140 caracteres*/

        } else {/*si escribe algo y da click*/
            var chatDiv = document.createElement("div");/*crea div*/
            var nameSpan = document.createElement("span");/*da nombre usuario*/
            var dateSpan = document.createElement("span");/*fecha */
            var chatP = document.createElement("p");/*crea parrafo*/
            chatDiv.appendChild(nameSpan);/*en el div creado agrega nombre usuario*/
            chatDiv.appendChild(dateSpan);/*en el div agrega fecha*/
            chatDiv.appendChild(chatP);
            chatDiv.className = "chat"
           
            chatP.textContent = thinkInput.value;
            timeLine.insertBefore(chatDiv, timeLine.children[0]);
        }
    }
}