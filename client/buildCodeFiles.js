import fs from "node:fs/promises";

const path = "./src/pages/components/codefiles/pyCode.json";
const fileContent = await fs.readFile(path, "utf-8");

const questionsJSON = JSON.parse(fileContent);
const tasks = [];

for (const questionWrapper of questionsJSON) {
  if (questionWrapper == null) {
    continue;
  }

  const question = questionWrapper[0];

  const makeQuestionFile = fs.writeFile(`./questionsBank/python3/${question.id}`, question.code);
  tasks.push(makeQuestionFile);
}

await Promise.all(tasks);
