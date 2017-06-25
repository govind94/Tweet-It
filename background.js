var contextsArray = ["selection", "link", "image", "page"];

for (var key in contextsArray)
{
	var context = contextsArray[key];
	var title = "Tweet It: Tweet this " + context;
	chrome.contextMenus.create({
		contexts: [context],
		title: title,
		id: context
	});
}

chrome.contextMenus.onClicked.addListener(function onClick(context, tab) {
	switch(context.menuItemId)
	{
		case "selection":
		chrome.tabs.create({ url: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(context.selectionText) });
		break;

		case "link":
		chrome.tabs.create({ url: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(context.linkUrl) });
		break;

		case "image":
		chrome.tabs.create({ url: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(context.srcUrl) });
		break;

		case "page":
		chrome.tabs.create({ url: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(context.pageUrl) });
		break;
	}
});