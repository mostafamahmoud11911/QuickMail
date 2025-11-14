const greeting = document.getElementById("greeting");
const title = document.getElementById("title");
const username = document.getElementById("name");
const opener = document.getElementById("opener");
const body = document.getElementById("body");
const closure = document.getElementById("closure");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const sender = document.getElementById("sender");

let finalTemplate = "";

function generateTemplate() {
  const greetingLine = `${greeting.value} ${title.value} ${username.value},`;

  const openerLine = opener.value ? `\n\n${opener.value}.` : "";

  const bodyLine = body.value ? `\n\n${body.value}.` : "";

  const closureLine = closure.value ? `\n\n${closure.value}\n` : "";

  const senderLine = sender.value ? `${sender.value}` : "";

  finalTemplate = `${greetingLine}${openerLine}${bodyLine}${closureLine}${senderLine}`;

  console.log(finalTemplate);
}

generate.addEventListener("click", generateTemplate);
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(finalTemplate);
});
