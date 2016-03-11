# messages

Modified by: Laura Donovan

On: 3/10/16

Implemented correctly: Haven't touched the HTML, JSON parses into XML and is put on the page, JavaScript array elements are handled, used XMLHttpRequest

Implemented incorrectly: Not super nice-looking


Collaborators: Tom Rind

Time spent: 2 hours

Part2: It worked in Firefox but not in IE or Chrome. I feel like it should not work, or rather that it depends on the browser. 

Part3: It does not work; the messages no longer show up even in Firefox. 

Bonus question:  No, because browsers implement same-origin policy. As a result, no domain can read data from another domain (be it your local computer or another website) by using XMLHttpRequest (unless cross-origin access is allowed or some other, non-default workaround is implemented).