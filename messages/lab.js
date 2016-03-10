
function parse(){
	request = new XMLHttpRequest();
	request.open('get', 'data.json', true);
	request.onReadyStateChange(function(){
		if (request.state == 4 && request.responseStatus == 200){
			text = request.responseText;
			messageText = JSON.parse(text);
		}
	})
	request.send(null);
}