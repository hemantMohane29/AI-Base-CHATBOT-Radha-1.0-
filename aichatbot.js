// alert to user starting communication 
alert("Are you agree start communication");
prompt("Are you ready to communication with me.......!!!")

// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  switch (true) {
    case input.includes("how are you"):
      output = "I'm doing fine, thank you for asking me.";
      break;

    case input.includes("what is your name") || input.includes("what is ur name"):
      output = "My name is Radha 1.0, I'm a Female chatbot.";
      break;

    case input.includes("what can you do"):
      output = "I can chat with you and answer some simple questions.";
      break;

    case input.includes("tell me a joke"):
      output = "Why did the chicken go to the seance? To get to the other side.";
      break;

    case input.includes("what is education"):
      output = "Education can be a valuable tool for personal and societal growth. It can help people develop the capacity to reflect, be discerning, and appreciate what makes people flourish.";
      break;

    case input.includes("what is chatbot"):
      output = "A chatbot is a computer program that simulates human conversation with an end user.";
      break;

    case input.includes("what is study"):
      output = "The activity or process of learning about something by reading, memorizing facts, attending school, etc.";
      break;

    case input.includes("tell me about yourself"):
      output = "My name is Radha, I'm a Female chatbot.";
      break;

    case input.includes("what is the full form of sistec"):
      output = "Sagar Institute of Science and Technology (SISTec®), established in 2007, is one of the best engineering colleges located in the heart of the state, the city of lakes - Bhopal.";
      break;

    case input.includes("where is sistec gn college"):
      output = "Near Gandhi Nagar, Bhopal, Madhya Pradesh.";
      break;

    case input.includes("different between student and teacher") || input.includes("what is different teacher and student"):
      output = "A student is someone who actively learns and receives knowledge from a teacher, while a teacher is someone who imparts knowledge and instructs students.";
      break;

    case input.includes("what is meant by ai & ds") || input.includes("what is aids"):
      output = "Artificial Intelligence & Data Science. Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced functions, including the ability to see, understand and translate spoken and written language, analyze data, make recommendations, and more.";
      break;

    case input.includes("no") || input.includes("No"):
      output = "Alright, no problem! If you need anything later, just let me know.";
      break;

    case input.includes("thank you") || input.includes("Thank you"):
      output = "You're welcome! Feel free to ask anything anytime.";
      break;

    case input.includes("who is zayed") || input.includes("zayed kon hai"):
      output = "Zayed is a good man. He is also a friend of owner Hemant.";
      break;

    case input.includes("machine learning") || input.includes("what is machine learning"):
      output = "Machine learning(ML) is a type of artificial intelligence(AI) that allows computers to learn and improve from data without being explicitly programmed.";
      break;

    case input.includes("deep learning") || input.includes("what is deep learning"):
      output = "Deep learning is a type of machine learning that uses artificial neural networks to teach computers to process data in a way that mimics the human brain.";
      break;

    case input.includes("computer") || input.includes("what is computer?"):
      output = "computer is a device to perform different task to accounding user command.";
      break;

    case input.includes("what is chatbot?"):
      output = "A chatbot is a computer program that simulates human conversation with an end user.";
      break;

    case input.includes("hello") || input.includes("hi"):
      output = "Hello, nice to meet you!";
      break;

    default:
      output = "Sorry, I don't understand that. Please try something else.";
      break;
  }
  return output;
}



// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = chatbot(input);
    setTimeout(function () {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    sendMessage();
  }
});