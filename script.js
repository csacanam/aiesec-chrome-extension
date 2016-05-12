(function() {
    // Load the script
    var script = document.createElement("script");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
    	if (window.jQuery) {
    		callback(jQuery);
    	}
    	else {
    		window.setTimeout(function() { checkReady(callback); }, 100);
    	}
    };

    // Start using Jquery from here...
    checkReady(function($) {
    	$(document).ready(function() {
    		// Only bind click listeners when opportunities ready
    		var checkExist = setInterval(function() {
    			if ($('li.ai-op-opportunity').length) {
    				clearInterval(checkExist);
    				$("li.ai-op-opportunity").each(function(){
    					$(this).click(function(e){
    						e.preventDefault();
    						var destiny = $(this).attr("href");
    						var baseURL = location.href.split('/')[0];
    						var finalDestiny = baseURL + destiny;
    						window.open(finalDestiny, '_blank');
    					});
    				});
    			}
    		}, 100);
    	});
    });
})();