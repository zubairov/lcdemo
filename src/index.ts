import { PromptTemplate } from "langchain/prompts";
import { OpenAI } from "langchain/llms";

const model = new OpenAI({
  temperature: 0.1,
});

const template = "What is the capital of {country}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["country"],
});
// const res = await model.call("What is the capital of Germany?");
console.log("Hello world!", prompt.format({ country: "Grece" }));
