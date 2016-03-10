request = new XMLHttpRequest();
request.open('get', 'data.json', true);
//raw = request.responseText;
messageData = JSON.parse(request.responseText);
request.send(messageData);
