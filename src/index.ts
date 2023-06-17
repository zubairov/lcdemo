import { PlanAndExecuteAgentExecutor } from "langchain/experimental/plan_and_execute";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { ChatOpenAI } from "langchain/chat_models";

const tools = [new Calculator(), new SerpAPI()];
const model = new ChatOpenAI({
  temperature: 0,
  modelName: "gpt-3.5-turbo",
  verbose: true,
});
const executor = PlanAndExecuteAgentExecutor.fromLLMAndTools({
  llm: model,
  tools,
});

const result = await executor.call({
  input: `Who is the current president of the United States? What is their current age raised to the second power?`,
});

console.log({ result });
