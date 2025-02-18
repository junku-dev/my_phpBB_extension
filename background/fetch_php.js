function getActiveTab(){
    return browser.tabs.query({ active: true, currentWindow: true });
}

function fetchPhp(){
    try {
        getActiveTab().then((tabs) => {
            let userCode = localStorage.getItem("code") || "";
            if(userCode !== ""){
                browser.tabs.sendMessage(tabs[0].id, { code: userCode })
                    .catch(w => console.warn(w));
            }
            else{
                console.log("no script.");
            }
            
        });
    } catch (e){
        console.error(e);
    }
}

/**
 * update when tab is updated.
 */
browser.tabs.onUpdated.addListener(fetchPhp);