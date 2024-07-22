let input = document.getElementById("user-input");
let saveBtn = document.getElementById("save-btn");
let resetBtn = document.getElementById('reset-btn');
let userCode;

input.style = "border-color: none;";
input.placeholder = "Enter phpBB...";


/**
 * grab user input on click.
 */
saveBtn.addEventListener(('click'), () => {
    input.style = "border-color: none;";
    input.placeholder = "Enter phpBB...";
    console.log(getActiveTab());
    getActiveTab().then((tabs) => {
        if(input.value !== ""){
            setUserCode(input.value);
            alert("saved:\n" + userCode);
            browser.tabs.sendMessage(tabs[0].id, { code: userCode });

            console.log(localStorage);
        }
        else{
            input.style = "border-color: red;";
            input.placeholder = "You cannot leave this field blank...";
        }
    });
});


/**
 * reset
 */
resetBtn.addEventListener(('click'), () =>{
    input.value = "";
    input.style = "border-color: none;";
    input.placeholder = "Enter phpBB...";
    getActiveTab().then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { reset:true });
        
        if(!localStorage.getItem("code")){
            alert("No scripts exist yet.");
            return;
        }

        localStorage.removeItem("code");
    }) 
});


async function setUserCode(obj){
    userCode = obj;
    await localStorage.setItem("code", userCode);
}

function getActiveTab(){
    return browser.tabs.query({ active: true, currentWindow: true });
}

async function init(){
    if(localStorage.getItem("code")){
        input.value = localStorage.getItem("code");
    }
}

init().catch(e => console.error(e));


/**
 * listen to changes for debugging.
 */
// localStorage.onChanged.addListener((changeInfo) => {
//         console.log(`script changed\n
//             * Change: ${changeInfo.localStorage}\n
//             * Cause: ${changeInfo.cause}\n
//             * Removed: ${changeInfo.removed}`)
//     });