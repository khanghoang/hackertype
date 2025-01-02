import fs from "node:fs/promises";

// Get contents from code file in questionsBank/ and build the json file that contains codes at build time
async function main() {
  const res = [];
  const path = "./questionsBank/python3/";
  const files = await fs.readdir(path);
  const tasks = [];
  for (const file of files) {
    const fileContent = fs.readFile(path + file, "utf-8").then((fileContent) => {
      const question = [
        {
          id: file,
          code: fileContent,
        },
      ];
      res.push(question);
    });

    tasks.push(fileContent);
  }

  await Promise.all(tasks);

  await fs.writeFile("./src/pages/components/codefiles/pyCode.json", JSON.stringify(res));
}

(async () => {
  await main();
})();
