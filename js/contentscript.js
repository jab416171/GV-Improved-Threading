$(document).ready(function() {
//    onload = setTimeout(init, 0);
    function init() {
        var actionLinks = $('<div class="gc-message-sms-row"></div>');
        var newer = $('<a class="newer" href="#">newer</a>');
        $(actionLinks).append(newer);
        var older = $('<a class="older" href="#">older</a>');
        $(actionLinks).prepend(older);
        var gcMessageDisplay = $('.gc-message-message-display');
        console.log(gcMessageDisplay.append(actionLinks));
        gcMessageDisplay.each(function(index, value) {
            console.log("looping");

            $($('.newer').eq(index)).on('click', function(event) {
                event.preventDefault();
                var parent = $(this).parent();
                console.log(gcMessageDisplay);
                console.log(index);
                parent.html(gcMessageDisplay.eq(index + 1));
            });
            $($('.older').eq(index)).on('click', function(event) {
                event.preventDefault();
                var parent = $(this).parent();
                console.log(gcMessageDisplay);
                console.log(index);
                parent.html(gcMessageDisplay.eq(index - 1));
            });
        });
    }

    init();
});
