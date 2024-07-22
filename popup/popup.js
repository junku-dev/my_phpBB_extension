let userInput = document.getElementById("user-input");
let saveBtn = document.getElementById("save-btn");
let resetBtn = document.getElementById('reset-btn');
let userCode;
let cookieVal = { code : "" };

userInput.style = "border-color: none;";
userInput.placeholder = "Enter phpBB...";

function setUserCode(obj){
    userCode = obj;
}

function getActiveTab(){
    return browser.tabs.query({ active: true, currentWindow: true });
}

/**
 * grab user input on click.
 */
saveBtn.addEventListener(('click'), () => {
    userInput.style = "border-color: none;";
    userInput.placeholder = "Enter phpBB...";
    console.log(getActiveTab());
    getActiveTab().then((tabs) => {
        if(userInput.value !== ""){
            setUserCode(userInput.value);
            alert("saved:\n" + userCode);
            browser.tabs.sendMessage(tabs[0].id, { code: userCode });

            cookieVal.code = userCode;
            browser.cookies.set({
                url: tabs[0].url,
                name: "userphp",
                value: JSON.stringify(cookieVal),
                partitionKey: {topLevelSite: "https://insect.christmas/forum/"}
            })

            console.log(cookieVal);
        }
        else{
            userInput.style = "border-color: red;";
            userInput.placeholder = "You cannot leave this field blank...";
        }
    });
});


/**
 * reset
 */
resetBtn.addEventListener(('click'), () =>{
    userInput.value = "";
    userInput.style = "border-color: none;";
    userInput.placeholder = "Enter phpBB...";
    getActiveTab().then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { reset:true });
        
        if(!cookieVal.code){
            alert("no cookies exist for this site...");
        }

        cookieVal = { code: "" };
        browser.cookies.remove({
            url: tabs[0].url,
            name: "userphp"
        })
    }) 
});

/**
 * listen to cookies
 */
browser.cookies.onChanged.addListener((changeInfo) => {
    if(changeInfo.cookie.domain === "insect.christmas"){
        console.log(`Cookie changed\n
            * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
            * Cause: ${changeInfo.cause}\n
            * Removed: ${changeInfo.removed}`)
    }
});