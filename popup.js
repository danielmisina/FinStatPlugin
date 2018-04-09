chrome.extension.onRequest.addListener(onSelection);
chrome.tabs.executeScript(null, { file: "selection.js" });

/**
 * Trigger search query
 * @param payload
 */
function onSelection(payload) {
	var site = "https://finstat.sk/",
		queryPrefix = "Hladaj?query=";

	if (payload && payload.text && payload.text.length > 0) {
        site += queryPrefix + payload.text;
	}

	document.getElementById('finstatSite').src = site;
}