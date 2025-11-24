const screen = document.getElementById("screen");
const greeting = document.getElementById("greeting");
const title = document.getElementById("title");
const nameInput = document.getElementById("name");
const opener = document.getElementById("opener");
const body = document.getElementById("body");
const closure = document.getElementById("closure");
const sender = document.getElementById("sender");
const lang = document.getElementById("lang");
const outputContainer = document.getElementById("outputContainer");
const outputText = document.getElementById("outputText");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

const data = {
  en: {
    greetings: ["Hello", "Hi there", "Dear", "Greetings", "Good day"],
    titles: ["Mr.", "Ms.", "Mrs.", "Miss", "Dr.", "Eng."],
    openers: [
      "I hope this email finds you well.",
      "I hope this email reaches you in good health.",
      "I trust this email finds you doing great today.",
      "I hope this email finds you well and safe.",
      "I hope this email finds you having a good day so far.",
      "I hope this email finds you well and your week’s off to a good start.",
      "I trust this email finds you well and everything’s going smoothly.",
      "I hope this email finds you well and thank you for reaching out.",
      "I hope this email finds you in good spirits and ready for the weekend.",
      "I hope this email finds you well — thank you for your patience.",
      "I trust this email finds you well and safe on your side.",
    ],
    closings: [
      "Best regards,",
      "Kind regards,",
      "Warm regards,",
      "Sincerely,",
      "Yours sincerely,",
      "Yours faithfully,",
      "Respectfully,",
      "With appreciation,",
      "With best regards,",
      "Yours truly,",
    ],
    placeholders: {
      name: "Enter name",
      sender: "Sender Name",
      body: "Write your message...",
    },
  },
  ar: {
    greetings: ["عزيزتي", "عزيزي", "اهلا", "مرحبا", "تحية طيبة"],
    titles: [
      "عميلة",
      "عميل",
      "المهندس",
      "الدكتور",
      "الآنسة",
      "السيدة",
      "السيد",
    ],
    openers: [
      "يسعدنا تواصلكم معنا.",
      "نشكركم على التواصل.",
      "نُقدّر لكم وقتكم في مراسلتنا.",
      "شكرًا لإبلاغنا بهذا الأمر.",
      "نأمل أن تصلكم هذه الرسالة وأنتم بخير.",
      "نتمنى أن تكون هذه الرسالة قد وصلتك في وقت مناسب.",
      "نرجو أن تصلكم هذه الرسالة وأنتم في أفضل حال.",
      "نتمنى أن تجدكم رسالتنا هذه وأنتم بصحة جيدة.",
      "بكل تقدير، نشكر لكم اهتمامكم.",
      "نقدر لكم تواصلكم وإعلامنا بالمشكلة.",
    ],
    closings: [
      "وتفضلوا بقبول تحياتنا",
      "مع وافر الشكر",
      "مع ارق التحيات.",
      "خالص الاحترام والتقدير.",
      "دمتم بخير.",
      "مع خالص الشكر",
      "بكل تقدير",
      "مع الشكر والتقدير.",
      "مع خالص التحية.",
      "مع أطيب التحيات.",
      "وتفضلوا بقبول فائق الاحترام.",
      "مع فائق الاحترام.",
    ],
    placeholders: {
      name: "ادخل الاسم",
      sender: "اسم المرسل",
      body: "اكتب رسالتك...",
    },
  },
};

function populateSelect(select, items, defaultText) {
  select.innerHTML = "";
  const defOpt = document.createElement("option");
  defOpt.disabled = true;
  defOpt.selected = true;
  defOpt.textContent = defaultText;
  select.appendChild(defOpt);
  items.forEach((item) => {
    const opt = document.createElement("option");
    opt.textContent = item;
    select.appendChild(opt);
  });
}

function updateLanguage() {
  const curr = lang.value;
  document.body.dir = curr === "ar" ? "rtl" : "ltr";
  generate.textContent = curr === "ar" ? "توليد قالب" : "Generate Template";
  copy.textContent = curr === "ar" ? "نسخ" : "Copy";
  populateSelect(
    greeting,
    data[curr].greetings,
    curr === "ar" ? "اختار التحية..." : "Select a greeting..."
  );
  populateSelect(
    title,
    data[curr].titles,
    curr === "ar" ? "اختار العنوان..." : "Select a title..."
  );
  populateSelect(
    opener,
    data[curr].openers,
    curr === "ar" ? "اختار التحية..." : "Select an opener..."
  );
  populateSelect(
    closure,
    data[curr].closings,
    curr === "ar" ? "اختار الإغلاق..." : "Select a closing..."
  );
  nameInput.placeholder = data[curr].placeholders.name;
  sender.placeholder = data[curr].placeholders.sender;
  body.placeholder = data[curr].placeholders.body;
  outputText.style.direction = curr === "ar" ? "rtl" : "ltr";
  outputText.style.textAlign = curr === "ar" ? "right" : "left";
}

lang.addEventListener("change", updateLanguage);
updateLanguage();

generate.addEventListener("click", () => {
  const greetingLine = `${greeting.value} ${title.value} ${nameInput.value}`;
  const openerLine = opener.value ? `\n${opener.value}.\n` : "";
  const bodyLine = body.value ? `\n${body.value}.\n` : "";
  const closureLine = closure.value ? `\n${closure.value}\n` : "";
  const senderLine = sender.value ? `${sender.value}` : "";
  const finalTemplate =
    `${greetingLine},${openerLine}${bodyLine}${closureLine}${senderLine}`.trim();
  outputText.value = finalTemplate;
  outputContainer.style.display = "block";
});

copy.addEventListener("click", () => {
  if (outputText.value.trim() !== "") {
    navigator.clipboard.writeText(outputText.value);
  }
});
