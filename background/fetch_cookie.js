const ic = "https://insect.christmas/forum/*"; //insect.christmas
let input = document.getElementById("user-input");
function getActiveTab(){
    return browser.tabs.query({ active: true, currentWindow: true });
}

function cookieUpdate(){
    try {
        getActiveTab().then((tabs) => {
            if(browser.cookies.url === ic){
                let getCookies = browser.cookies.get({
                    url: tabs[0].url,
                    name: "userphp"
                }).then((cookie) => {
                    if(cookie){
                        let cookieVal = JSON.stringify(cookie.value);
                        browser.tabs.sendMessage(tabs[0].id, { code: cookieVal.code });
                        input.value = cookieVal.code;
                    }
                    else{
                        console.log("no cookies found for this site");
                    }
                });
            }
        });
    } catch (error){
        console.error(error);
    }
}

/**
 * update when tab is updated.
 */
browser.tabs.onUpdated.addListener(cookieUpdate);

/**
 * update when tab is activated.
 */
browser.tabs.onActivated.addListener(cookieUpdate);