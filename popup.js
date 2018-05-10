chrome.extension.onRequest.addListener(onSelection);
chrome.tabs.executeScript(null, { file: "selection.js" });

/**
 * Trigger search query
 * @param payload
 */
function onSelection(payload) {
	var site = "https://finstat.sk/",
		searchQuery = "Hladaj?query=",
		extensionSuffix = "&extension=true";

	// Extend URL
	if (payload && payload.text && payload.text.length > 0) {
        site += searchQuery + payload.text + extensionSuffix;
	}

	document.getElementById('finstatSite').src = encodeURI(site);
}