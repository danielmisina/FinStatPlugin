var selection = window.getSelection(),
	payload = {
		'text': selection.toString()
	};
chrome.extension.sendRequest(payload); 