browser.runtime.onMessage.addListener(updatePhp);

function updatePhp(request, sender, sendResponse){
    let msg_box = document.getElementById("message");
    if(request.code){
        msg_box.value = request.code;
    }
    else if(request.reset){
        msg_box.value = "";
        msg_box.placeholder = "nothing to inject...";
    }
}