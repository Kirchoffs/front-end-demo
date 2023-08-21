const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 5432;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type'); 
  next();
});

app.get("/engine", async (req, res) => {
  const engines = await openai.listEngines();
  res.json({
    data: engines.data.data
  })
});

app.get("/", async (req, res) => {
  res.json({
    data: "Hello World!"
  })
});

app.post("/", async (req, res) => {
  const { message, model } = req.body;
  
  console.log(message);
  console.log(model);

  res.json({
    data: "Hello World!"
  })
});

app.post("/echo", async (req, res) => {
  const { message } = req.body;

  res.json({
    data: message
  })
});

app.post("/chat", async (req, res) => {
  const { message, model } = req.body;
  
  console.log(message);
  console.log(model);

  const chat_completion = await openai.createChatCompletion({
    model: model,
    messages: [{ role: "user", content: message }],
  });

  const choice = chat_completion.data.choices[0];

  res.json({
    data: choice.message.content
  });
});

app.listen(port, () => {
    console.log(`chat-gpt app listening at http://localhost:${port}`);
});