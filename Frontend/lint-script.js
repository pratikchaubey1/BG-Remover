import { ESLint } from "eslint";
(async function main() {
  const eslint = new ESLint();
  const results = await eslint.lintFiles(["."]);
  results.forEach(result => {
    result.messages.forEach(msg => {
      console.log(`${result.filePath}:${msg.line} - ${msg.message}`);
    });
  });
})().catch(console.error);
