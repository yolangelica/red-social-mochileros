window.onload = function () {
	var sendButton = document.getElementsByName("send")[0];
	var textArea = document.getElementsByName("comment")[0];	
  var timeLine = document.getElementsByName("newComment")[0];
  
  //agregando evento al botón
	sendButton.onclick = function() {
		if (textArea.value == "")   {
			document.getElementsByName("send").disabled = true;
			} else {
			//creando elementos del nuevo comentario
			var commentDiv = document.createElement("div");
			var commentDate = document.createElement("span");
			var commentContent = document.createElement("p");
			//agregando el nuevo comentario a sus elementos
			commentDiv.appendChild(commentDate);
			commentDiv.appendChild(commentContent);
			commentDiv.className = "comment";
		
			commentDate.textContent = new Date();
			commentContent.textContent = textArea.value;
			textArea.value = "";
			timeLine.insertBefore(commentDiv, timeLine.children[0]);
		}
  }
}
