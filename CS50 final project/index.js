if (document.getElementById("myButton")) {
  document.getElementById("myButton").addEventListener("click", function () {
    window.location.href = "question.html";
  });
}

if (document.getElementById("faqButton")) {
  document.getElementById("faqButton").addEventListener("click", function () {
    window.location.href = "faqs.html";
  });
}

const questions = [
  {
    dutch: "Hoe voel je je vandaag?",
    english: "How do you feel today?",
    hungarian: "Hogy érzed magad ma?",
    italian: "Come ti senti oggi?",
    photo:
      "https://images.unsplash.com/photo-1623337131498-76616fddd861?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat is je favoriete filmgenre?",
    english: "What is your favourite film genre?",
    hungarian: "Mi a kedvenc film műfajod?",
    italian: "Qual è il tuo genere di film preferito?",
    photo:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat is je favoriete gerecht?",
    english: "What is your favourite dish?",
    hungarian: "Mi a kedvenc ételed?",
    italian: "Qual è il tuo piatto preferito?",
    photo:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Ben je een pessimist of optimist?",
    english: "Are you a pessimist or an optimist?",
    hungarian: "Pesszimista vagy optimista vagy?",
    italian: "Sei un pessimista o un ottimista?",
    photo:
      "https://plus.unsplash.com/premium_photo-1728112300689-b8929b083dfe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Hoe ziet jouw ochtendritueel eruit?",
    english: "What does your morning routine look like?",
    hungarian: "Hogy néz ki a reggeli rutinod?",
    italian: "Come si svolge la tua routine mattutina?",
    photo:
      "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat heb je het laatst gekocht?",
    english: "What was the last thing you bought?",
    hungarian: "Mi volt az utolsó dolog, amit vettél?",
    italian: "Qual è l’ultima cosa che hai comprato?",
    photo:
      "https://images.unsplash.com/photo-1683313101534-6c2e604771a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat is de mooiste plek die je ooit hebt bezocht?",
    english: "What is the most beautiful place you have ever visited?",
    hungarian: "Mi a legszebb hely, ahol valaha jártál?",
    italian: "Qual è il posto più bello che hai mai visitato?",
    photo:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Hou je meer van honden of van katten?",
    english: "Do you prefer dogs or cats?",
    hungarian: "A kutyákat vagy a macskákat szereted jobban?",
    italian: "Preferisci i cani o i gatti?",
    photo:
      "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat is je droombaan?",
    english: "What is your dream job?",
    hungarian: "Mi az álommunkád?",
    italian: "Qual è il lavoro dei tuoi sogni?",
    photo:
      "https://plus.unsplash.com/premium_photo-1661598213264-9b708f59d793?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat doe jij het liefst in je vrije tijd?",
    english: "What do you like to do in your free time?",
    hungarian: "Mit szeretsz csinálni a szabadidődben?",
    italian: "Cosa ti piace fare nel tempo libero?",
    photo:
      "https://plus.unsplash.com/premium_photo-1720612506926-b83064edcfc4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat eet je het liefst bij het ontbijt?",
    english: "What do you like to eat for breakfast?",
    hungarian: "Mit szeretsz reggelizni?",
    italian: "Cosa ti piace mangiare a colazione?",
    photo:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat is het laatste dat je gevierd hebt?",
    english: "What is the last thing you celebrated?",
    hungarian: "Mi volt az utolsó dolog, amit megünnepeltél?",
    italian: "Qual è l’ultima cosa che hai festeggiato?",
    photo:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat is jouw favoriete app?",
    english: "What is your favourite app?",
    hungarian: "Mi a kedvenc alkalmazásod?",
    italian: "Qual è la tua app preferita?",
    photo:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Wat is jouw favoriete boek?",
    english: "What is your favourite book?",
    hungarian: "Mi a kedvenc könyved?",
    italian: "Qual è il tuo libro preferito?",
    photo:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Als je een superheld was, wie zou je dan zijn?",
    english: "If you were a superhero, who would you be?",
    hungarian: "Ha szuperhős lennél, ki lennél?",
    italian: "Se fossi un supereroe, chi saresti?",
    photo:
      "https://plus.unsplash.com/premium_photo-1721852724547-769249f94c4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Als je de hele dag één gerecht moest eten, wat zou dat dan zijn?",
    english: "If you had to eat one dish all day, what would it be?",
    hungarian: "Ha egész nap csak egy ételt ehetnél, mi lenne az?",
    italian:
      "Se dovessi mangiare un solo piatto per tutto il giorno, quale sarebbe?",
    photo:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dutch: "Welk gerecht kan jij het beste koken?",
    english: "Which dish can you cook the best?",
    hungarian: "Melyik ételt tudod a legjobban elkészíteni?",
    italian: "Qual è il piatto che sai cucinare meglio?",
    photo:
      "https://plus.unsplash.com/premium_photo-1665394004212-0d014eb6da68?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const questionImage = document.querySelector(".question-image");
  const dutchText = document.querySelector(".dutch p");
  const englishText = document.querySelector(".english p");
  const hungarianText = document.querySelector(".hungarian p");
  const italianText = document.querySelector(".italian p");
  const newQuestionButton = document.querySelector(".new-question-button");

  function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    questionImage.src = question.photo;
    dutchText.textContent = question.dutch;
    englishText.textContent = question.english;
    hungarianText.textContent = question.hungarian;
    italianText.textContent = question.italian;
  }

  if (newQuestionButton) {
    newQuestionButton.addEventListener("click", generateQuestion);
    generateQuestion();
  }
});
