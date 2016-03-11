
function parse(){
	request = new XMLHttpRequest();
	request.open('get', 'data.json', true);
	request.onreadystatechange = parseMessage;
	request.send(null);

	function parseMessage(){
		if (request.readyState == 4 && request.status == 200){
			text = request.responseText;
		//	console.log(text);
			messageText = JSON.parse(text);
			elem = document.getElementById("messages");
			for (i = 0; i < messageText.length; i++){
				console.log(Object.keys(messageText[i]));
				elem.innerHTML += "<p><span id='text'>" + messageText[i]["content"] + "  " + messageText[i]["username"] + "</span></p>";

			}
		//	console.log(messageText);
			
			//message.innerHTML = JSON.parse(request.responseText);
		}
	}
}