
function parse(){

	request = new XMLHttpRequest();

	request.open("get", "data.json", true);
	request.onreadystatechange = parseMessage;
	request.send(null);

	function parseMessage(){
		if (request.readyState == 4 && request.status == 200){

			text = request.responseText;
			messageText = JSON.parse(text);
			elem = document.getElementById("messages");

			for (i = 0; i < messageText.length; i++){
				elem.innerHTML += "<p><span id='text'>" + messageText[i]["content"] 
				+ " " + "<span id='name'>" + messageText[i]["username"] + "</span></span></p>";
			}
		} 
	}
}