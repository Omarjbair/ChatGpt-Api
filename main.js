let text_input = document.getElementById("Text");
let button = document.getElementById("btn");

button.addEventListener('click', () => {
    if(!(text_input.value === "" || text_input.value === " "))
        sendToChatGPT();
        text_input.value = ""
    });

function sendToChatGPT(){
    
    let value = document.getElementById("Text").value;

    let body = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: value }],
    };

    let headers = {
        Authorization: "Bearer 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",
    };
    axios
    .post("https://api.openai.com/v1/chat/completions", body, {
    headers: headers,
    })

    .then((response) => {
        let reply = info.data.choices[0].message.content;
        document.getElementById("reply").textContent = reply;
    })

    .catch((error) => {
        console.log(error);
    });
}


