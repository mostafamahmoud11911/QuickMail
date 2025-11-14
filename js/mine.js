const greeting = document.getElementById("greeting");
const title = document.getElementById("title");
const username = document.getElementById("name");
const opener = document.getElementById("opener");
const body = document.getElementById("body");
const closure = document.getElementById("closure");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const sender = document.getElementById("sender");
const outputContainer = document.getElementById("outputContainer");
const outputText = document.getElementById("outputText");

let finalTemplate = "";

function generateTemplate() {
  const greetingLine = `${greeting.value} ${title.value} ${username.value},`;

  const openerLine = opener.value ? `\n${opener.value}.` : "";

  const bodyLine = body.value ? `\n\n${body.value}.` : "";

  const closureLine = closure.value ? `\n\n${closure.value}\n` : "";

  const senderLine = sender.value ? `${sender.value}` : "";

  finalTemplate = `${greetingLine}${openerLine}${bodyLine}${closureLine}${senderLine}`;
}

generate.addEventListener("click", generateTemplate);



copy.addEventListener("click", () => {
  if (finalTemplate.length === 0) {
    outputContainer.style.display = "none";
  } else {
    navigator.clipboard.writeText(finalTemplate);
    outputContainer.style.display = "block";
    outputText.value = finalTemplate;
  }
});
