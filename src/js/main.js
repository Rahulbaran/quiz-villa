import "../scss/style.scss";

// * Elements
const $userFormContainer = document.querySelector(".user--form__container");
const $instructShowBtn = document.querySelector(".instructions__show--btn");
const $instructHideBtn = document.querySelector(".instructions__hide--btn");
const $instructBgLayer = document.querySelector(".instructions__bg--layer");
const $instructWrapper = document.querySelector(".instructions--wrapper");
const $userForm = document.querySelector(".user__form");
const $nameField = document.getElementById("fullname");
const $questionsField = document.getElementById("questions__quantity");
const $diffLevelField = document.getElementById("difficulty__level");
const $quesContainer = document.querySelector(".questions--container");
const $userName = document.querySelector(".username");
const $totalQues = document.querySelector(".total__questions");
const $minLabel = document.querySelector(".minutes");
const $secLabel = document.querySelector(".seconds");
const $quesNumber = document.querySelector(".question__no");
const $quesLabel = document.querySelector(".question__label");
const $optionLabels = document.querySelectorAll(".option__group label");
const $optionInputs = document.querySelectorAll(".option__group input");
const $nextQuesBtn = document.querySelector(".next__btn");
const $scoreContainer = document.querySelector(".score--container");
const $userScore = document.querySelector(".user__score");
const $quizScore = document.querySelector(".quiz__score");
const $userScoreDetails = document.querySelector(".user__score--details");
const $restartBtn = document.querySelector(".restart__btn");

let allQuestions, totalQuestions;
let [curQuesIndex, totalScore] = [0, 0];
const userAnswers = new Map();

// * --------- Functionality to toggle instructions list ---------- * //
$instructShowBtn?.addEventListener(
  "click",
  () => ($instructWrapper.style.display = "flex")
);

$instructHideBtn?.addEventListener(
  "click",
  () => ($instructWrapper.style.display = "none")
);
$instructBgLayer?.addEventListener(
  "click",
  () => ($instructWrapper.style.display = "none")
);

// * ---------- Event Handler for user form submission ---------- * //
$userForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new Map([
    ["fullname", $nameField.value],
    ["totalQues", $questionsField.value],
    ["diffLevel", $diffLevelField.value]
  ]);

  $userFormContainer.style.display = "none";
  reqQuestions(formData);
});

// * --------------- Function to request questions -------------- * //
const reqQuestions = async formData => {
  const url = `https://the-trivia-api.com/api/questions?categories=general_knowledge,science,geography&limit=${formData.get(
    "totalQues"
  )}&region=IN&difficulty=${formData.get("diffLevel")}`;

  const quesData = await (await fetch(url, { method: "GET" })).json();

  const times = new Map([
    [10, 120],
    [15, 180],
    [20, 240],
    [25, 300]
  ]);

  // * Store questions details
  storeQuestions(quesData);

  // * Display question
  totalQuestions = parseInt(formData.get("totalQues"));
  displayQuestion(
    formData.get("fullname"),
    totalQuestions,
    times.get(parseInt(formData.get("totalQues")))
  );
};

// * ---------------- Function to store questions ---------------- * //
const storeQuestions = quesData => {
  allQuestions = quesData.map(ques => {
    return {
      question: ques.question,
      options: [...ques.incorrectAnswers, ques.correctAnswer].sort(),
      answer: ques.correctAnswer
    };
  });
};

// * ---------------- Function to display question ---------------- * //
const displayQuestion = (name, totalQues, totalSec) => {
  // * Display question container
  $quesContainer.style.display = "flex";

  // * Display username & no. of questions
  $userName.textContent = name;
  $totalQues.textContent = totalQues;

  // * Show question
  showQuestion();

  // * Start Timer
  startTimer(totalSec);
};

// * ----------------- Function to Show Question ----------------- * //
const showQuestion = () => {
  // * Displaying question
  $quesNumber.textContent = `${curQuesIndex + 1}.`;
  $quesLabel.textContent = allQuestions[curQuesIndex].question;
  $optionLabels.forEach((option, i) => {
    option.textContent = allQuestions[curQuesIndex].options[i];
    $optionInputs[i].value = allQuestions[curQuesIndex].options[i];
  });
};

// * ------------------ Function to start Timer ------------------ * //
const startTimer = totalSec => {
  const countDownTimeStamp = Date.now() + totalSec * 1000;

  const intervalId = setInterval(() => {
    const curTimeStamp = Date.now();
    const tsDiff = countDownTimeStamp - curTimeStamp;

    const [totalMin, totalSec] = [
      Math.floor(tsDiff / (1000 * 60)),
      Math.floor((tsDiff % (1000 * 60)) / 1000)
    ];

    $minLabel.textContent = `0${totalMin}`;
    $secLabel.textContent = totalSec < 10 ? `0${totalSec}` : totalSec;

    if (tsDiff <= 0) {
      clearInterval(intervalId);
      showFinalResult();
    }
  });
};

// * --------------- Event handler for next question button ------------- * //
$nextQuesBtn?.addEventListener("click", () => {
  // * Store User answer in userAnswers map
  $optionInputs.forEach(option => {
    if (option.checked) {
      userAnswers.set(curQuesIndex, option.value);
      option.checked = false;

      // * Store score if answer is correct
      if (userAnswers.get(curQuesIndex) === allQuestions[curQuesIndex].answer) {
        totalScore++;
      }
    }
  });

  // * Incrementing current index
  curQuesIndex++;

  // * Show Question/ Final Result based on
  curQuesIndex < totalQuestions ? showQuestion() : showFinalResult();
});

// * ---------------- Function to Show final result ---------------- * //
const showFinalResult = () => {
  $quesContainer.style.display = "none";
  $scoreContainer.style.display = "block";

  // * Display User Score & Quiz Score
  $userScore.textContent = totalScore;
  $quizScore.textContent = totalQuestions;

  // * Display question, user answer & correct answer
  allQuestions.forEach((quesObj, i) => {
    const userAnswer = userAnswers.get(i);

    const html = `<div><h4 class="question"><span class="question__index">${
      i + 1
    }.</span>
      <span>${quesObj.question}</span></h4>
      <p class="user__answer"><span>Your Answer ➡ </span><span>${
        userAnswer
          ? userAnswer === quesObj.answer
            ? userAnswer
            : userAnswer + " ❌"
          : "❌"
      }</span>
      </p><p class="correct__answer"><span>Correct Answer ➡ </span><span>${
        quesObj.answer
      }</span>
      </p></div>`;

    $userScoreDetails.insertAdjacentHTML("beforeend", html);
  });
};

// * --------------- Event Handler for Restart Button ---------------- * //
$restartBtn?.addEventListener("click", () => {
  $scoreContainer.style.display = "none";
  $quesContainer.style.display = "none";
  $userFormContainer.style.display = "flex";

  $userScoreDetails.textContent = "";

  [allQuestions, totalQuestions] = [undefined, undefined];
  [curQuesIndex, totalScore] = [0, 0];
  userAnswers.clear();
});
