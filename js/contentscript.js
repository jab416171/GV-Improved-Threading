$(document).ready(function() {
	onload = setTimeout(init, 0);
	function init() {
		console.log("LOGGING STARTING");

		var LENGTH_OF_MESSAGE_ID = 40;
		var messageList = document.getElementById("gc-message-list");
	//    console.log(messageList);
		var usefulMessages = new Array();
		var messageListChildren = messageList.children;
		var count = 0;
		for (var i = 0; i < messageListChildren.length; i++) {
			if (null !== messageListChildren[i].getAttribute("id") && LENGTH_OF_MESSAGE_ID == messageListChildren[i].getAttribute("id").length) { // it's an actual message
				usefulMessages[count++] = messageListChildren[i];
			}
		}

		console.log(usefulMessages.length);
		for (var i = 0; i < usefulMessages.length; i++) {
			var actionLinks = $('<div class="gc-message-sms-row"></div>')
			var next = $('<a class="next">next</a>');
			$(actionLinks).append(next);
			console.log($('.gc-message-message-display')[i].appendChild(actionLinks));
			//usefulMessages[i].children[0].children[1].children[0].children[0].children[0].children[2].children[0].children[0].children[0].
			//        children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].
			//        children[1].children[0].children[0].children[0].appendChild(child);
		}
		console.log(usefulMessages);

		console.log("LOGGING ENDING");
	}
	
	$('.clickMe').live('click', function() {
		console.log($(this));
	});
	
});



