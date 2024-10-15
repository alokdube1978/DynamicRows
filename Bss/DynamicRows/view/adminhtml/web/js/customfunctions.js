define(['jquery'], function (jq) {
    'use strict';

    return function(selector,imagestring,imageplaceholder) {
        // Your custom function logic here
        console.log('Hello from your custom function!');
		// console.log(imagestring.value);
		console.log(selector);
		return new Promise(resolve => {
        if (document.getElementsByName(selector).length>0) {
		 if (imagestring.hasAttribute('value'))
			{
				if (imagestring.value!="")
				{
				console.log("using imagestring 1");
				imageplaceholder.setAttribute('src',imagestring.value);
				}
				else
				{
				console.log("using file path 1");
				imageplaceholder.setAttribute('src',document.getElementsByName(selector)[0].value);
				}
			}
			else
			{
		console.log("using file path 11");
			imageplaceholder.setAttribute('src',document.getElementsByName(selector)[0].value);
			}
			
            return resolve(document.getElementsByName(selector)[0]);
        }

        const observer = new MutationObserver(mutations => {
            if (document.getElementsByName(selector).length>0) {
				
			
			
                observer.disconnect();
				if (imagestring.hasAttribute('value'))
			{
				if (imagestring.value!="")
				{
				console.log("using imagestring 2");
				imageplaceholder.setAttribute('src',imagestring.value);
				}
				else
				{
				console.log("using file path 2");
				imageplaceholder.setAttribute('src',document.getElementsByName(selector)[0].value);
				}
			}
			else
			{
		console.log("using file path 21");
			imageplaceholder.setAttribute('src',document.getElementsByName(selector)[0].value);
			}
				
				
				imageplaceholder.setAttribute('src',document.getElementsByName(selector)[0].value);
                resolve(document.getElementsByName(selector[0]));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
    };
});