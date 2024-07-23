browser.runtime.onMessage.addListener(updatePhp);

function updatePhp(request, sender, sendResponse){
    let msg_box = document.getElementById("message");
    let h3_tag = document.querySelector("h3");
    if(request.code){
        
        if(h3_tag.innerText === "POST A NEW TOPIC" && msg_box.value === ""){
            msg_box.value = request.code;
        }
        else if(h3_tag.innerText === "POST A REPLY"){
            
            if(msg_box.value.includes("[quote=")){
                
                if(msg_box.value.includes(request.code)){
                    msg_box.value = msg_box.value;
                }

                else{
                    msg_box.value += request.code;
                }
                
            }
            else {
                msg_box.value = request.code;
            }

        }
        else{
            msg_box.value = msg_box.value;
        }
        
    }
    else if(request.reset){
        msg_box.value = "";
        msg_box.placeholder = "nothing to inject...";
    }
}