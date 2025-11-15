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

function checkInputsFilled() {
  return (
    greeting.value !== "Select a greeting..." &&
    title.value !== "Select a title..." &&
    username.value.trim() !== "" &&
    opener.value !== "Select an opener..." &&
    body.value.trim() !== "" &&
    closure.value !== "Select a closing..." &&
    sender.value.trim() !== ""
  );
}

function generateTemplate() {
  const greetingLine = `${greeting.value} ${title.value} ${username.value},`;
  const openerLine = opener.value ? `\n${opener.value}.\n` : "";
  const bodyLine = body.value ? `\n${body.value}.\n` : "";
  const closureLine = closure.value ? `\n${closure.value}\n` : "";
  const senderLine = sender.value ? `${sender.value}` : "";



  finalTemplate = `${greetingLine}${openerLine}${bodyLine}${closureLine}${senderLine}`;

  if (checkInputsFilled()) {
    outputContainer.style.display = "block";
    outputText.value = finalTemplate;
  } else {
    outputContainer.style.display = "none";
  }
}

generate.addEventListener("click", generateTemplate);

generate.addEventListener("click", generateTemplate);

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(finalTemplate);
});
