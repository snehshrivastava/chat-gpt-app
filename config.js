const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.chatGptKey,
});
const openai = new OpenAIApi(configuration);

async function runCompletion() {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Tell me about DOLO-650",
    });
    console.log(completion.data.choices);
}
runCompletion();