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
    model: "text-davinci-003",
    prompt: value,
    max_tokens: 200,
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


