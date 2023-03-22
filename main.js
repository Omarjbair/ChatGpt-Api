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
    prompt: value,
    max_tokens: 50,
    temperature: 0.7,
    };
    let headers = {
    Authorization:
        "Bearer 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",
    };
    axios
    .post("https://api.openai.com/v1/completions", body, {
    headers: headers,
    })
    .then((response) => {
        let reply = response.data.choices[0].text;
        document.getElementById("reply").textContent = reply;
    })
    .catch((error) => {
        console.log(error);
    });
}


