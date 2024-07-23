function getActiveTab(){
    return browser.tabs.query({ active: true, currentWindow: true });
}

function fetchPhp(){
    try {
        getActiveTab().then((tabs) => {
            let userCode = localStorage.getItem("code") || "";
            if(userCode !== ""){
                browser.tabs.sendMessage(tabs[0].id, { code: userCode });
            }
            else{
                console.log("no script.");
            }
            
        });
    } catch (w){
        console.error(w);
    }
}

/**
 * update when tab is updated.
 */
browser.tabs.onUpdated.addListener(fetchPhp);