import { OpenAI } from "langchain/llms";

const model = new OpenAI({
  temperature: 0.1,
});

const res = await model.call("What is the capital of Germany?");
console.log("Hello world!", res);
