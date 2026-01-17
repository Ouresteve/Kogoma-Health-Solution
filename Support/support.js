const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addUserMessage(message);
  userInput.value = "";

  setTimeout(() => {
    botReply(message);
  }, 700);
}

function sendPreset(topic) {
  addUserMessage(topic);
  setTimeout(() => {
    botReply(topic);
  }, 600);
}

function addUserMessage(text) {
  const msg = document.createElement("div");
  msg.className = "user-message";
  msg.textContent = text;
  chatMessages.appendChild(msg);
  scrollChat();
}

function botReply(text) {
  const msg = document.createElement("div");
  msg.className = "bot-message";

  if (text.toLowerCase().includes("counselling")) {
    msg.textContent =
      "🧠 Our counselling team can support emotional, academic, and mental well-being. Would you like individual or virtual counselling?";
  } else if (text.toLowerCase().includes("referral")) {
    msg.textContent =
      "🏥 We provide ambulance, maternity, paediatric, surgical, and cancer referrals. Which one do you need?";
  } else if (text.toLowerCase().includes("pharmacy")) {
    msg.textContent =
      "💊 Our online pharmacy offers verified medicines. You can browse products once logged in.";
  } else {
    msg.textContent =
      "ℹ Thank you for reaching out. A support agent will respond shortly.";
  }

  chatMessages.appendChild(msg);
  scrollChat();
}

function scrollChat() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
