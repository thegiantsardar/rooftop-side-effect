const QUESTIONS = [
  {
    question: "After a long day, where are you most likely to disappear?",
    options: [
      {
        label: "The bedroom, for a bit",
        points: 3,
        symptom: "Quiet-Space Seeking",
        note: "Your standards for unwinding are already rising."
      },
      {
        label: "Somewhere with some air and space",
        points: 2,
        symptom: "Open-Space Preference",
        note: "Enclosed plans may already be losing their appeal."
      },
      {
        label: "Wherever the rooftop is",
        points: 4,
        symptom: "Rooftop-Seeking Behaviour",
        note: "The elevator may already know where you’re going."
      }
    ]
  },
  {
    question: "You have good news to tell your partner. Where would you rather do it?",
    options: [
      {
        label: "Somewhere private at home",
        points: 2,
        symptom: "Private-Setting Preference",
        note: "Important moments are starting to demand their own setting."
      },
      {
        label: "Over dinner somewhere special",
        points: 4,
        symptom: "Occasion Elevation",
        note: "Ordinary settings may no longer feel quite special enough."
      },
      {
        label: "Somewhere on the rooftop, with a view",
        points: 3,
        symptom: "Skyline Attachment",
        note: "Good news apparently sounds better above ground."
      }
    ]
  },
  {
    question: "You suddenly have an hour to yourself. What sounds best?",
    options: [
      {
        label: "Doing absolutely nothing",
        points: 4,
        symptom: "Unwinding Dependency",
        note: "You may be developing unusually high standards for doing nothing."
      },
      {
        label: "Getting some fresh air",
        points: 3,
        symptom: "Fresh-Air Reliance",
        note: "Your preferred reset button may no longer be indoors."
      },
      {
        label: "Finding a quiet spot above everything else",
        points: 2,
        symptom: "Elevated Escape Tendency",
        note: "Distance from the city may be becoming part of the ritual."
      }
    ]
  },
  {
    question: "How often do you find yourself heading to the rooftop in a typical week?",
    options: [
      {
        label: "Whenever I need a change of scene",
        points: 3,
        symptom: "Change-of-Scene Dependence",
        note: "The rooftop is beginning to function like a reset switch."
      },
      {
        label: "A few times",
        points: 4,
        symptom: "Repeated Exposure",
        note: "Repeated rooftop contact has been detected."
      },
      {
        label: "Honestly, I’ve stopped counting",
        points: 2,
        symptom: "Chronic Rooftop Use",
        note: "Frequency may already be beyond reliable measurement."
      }
    ]
  },
  {
    question: "You realise you’ve been on the rooftop for two hours.",
    options: [
      {
        label: "You check the time again",
        points: 2,
        symptom: "Time Distortion",
        note: "Rooftop exposure may be affecting your sense of time."
      },
      {
        label: "You tell yourself, “five more minutes”",
        points: 3,
        symptom: "Extended Exposure",
        note: "Five more minutes rarely appears to mean five."
      },
      {
        label: "Two hours? Felt like twenty minutes.",
        points: 4,
        symptom: "Severe Rooftop Absorption",
        note: "Temporal awareness may be significantly compromised."
      }
    ]
  },
  {
    question: "You visit someone else’s building. What do you notice first?",
    options: [
      {
        label: "Whether it feels open",
        points: 4,
        symptom: "Openness Expectation",
        note: "Space is quietly becoming a non-negotiable."
      },
      {
        label: "What kind of view it has",
        points: 2,
        symptom: "View Sensitivity",
        note: "Your eyes may now be screening addresses automatically."
      },
      {
        label: "What they’ve done with the rooftop",
        points: 3,
        symptom: "Rooftop Comparison Syndrome",
        note: "Other rooftops may now be subject to unfair comparison."
      }
    ]
  },
  {
    question: "Your rooftop is closed for an entire weekend. Your reaction?",
    options: [
      {
        label: "Fine. I’ll find somewhere else to unwind.",
        points: 4,
        symptom: "Substitution Behaviour",
        note: "You’re already looking for alternative doses of open space."
      },
      {
        label: "Slightly inconvenient. Slightly upsetting.",
        points: 3,
        symptom: "Rooftop Withdrawal",
        note: "Early signs of rooftop separation discomfort detected."
      },
      {
        label: "Sorry, the entire weekend?",
        points: 2,
        symptom: "Severe Access Dependency",
        note: "The diagnosis is becoming difficult to ignore."
      }
    ]
  }
];

const PROJECTS = {
  yoo: {
    name: "YOO Pristine",
    location: "Akurdi",
    facts: [
      "1 acre of rooftop experiences",
      "60+ lifestyle amenities",
      "A landmark address designed to raise expectations"
    ],
    cta: "#"
  },
  kyra: {
    name: "Pristine Kyra",
    location: "Viman Nagar",
    facts: [
      "Three recreational levels",
      "Biophilic design and low-density living",
      "A rooftop designed as the crowning glory"
    ],
    cta: "#"
  },
  pristine: {
    name: "Pristine Properties",
    location: "Pune",
    facts: [
      "40 years of crafting spaces",
      "Lifestyle-led residential experiences",
      "Rooftops designed to make ordinary feel insufficient"
    ],
    cta: "#"
  }
};

const FLOOR_SEQUENCE = ["G", "1", "2", "3", "4", "5", "6", "R"];

const DISPLAY_MESSAGES = [
  "GROUND",
  "EXPECTATIONS RISING",
  "EXPOSURE DETECTED",
  "CONDITION DEVELOPING",
  "ROOFTOP DEPENDENCY",
  "SYMPTOMS PERSISTING",
  "SEVERITY INCREASING",
  "ROOFTOP"
];

const ANALYSIS_LINES = [
  "Checking rooftop dependence.",
  "Measuring elevated expectations.",
  "Testing tolerance for ordinary terraces.",
  "Reviewing skyline attachment.",
  "Confirming final diagnosis."
];

let currentQuestion = 0;
let totalScore = 0;
let answers = [];
let soundEnabled = true;
let isTransitioning = false;

const landingScreen = document.getElementById("landingScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startButton = document.getElementById("startButton");
const questionText = document.getElementById("questionText");
const questionCount = document.getElementById("questionCount");
const floorKicker = document.getElementById("floorKicker");
const optionsList = document.getElementById("optionsList");

const symptomToast = document.getElementById("symptomToast");
const symptomTitle = document.getElementById("symptomTitle");
const symptomNote = document.getElementById("symptomNote");

const displayText = document.getElementById("displayText");
const displayArrow = document.getElementById("displayArrow");
const transitionDoors = document.getElementById("transitionDoors");
const analysisLine = document.getElementById("analysisLine");

const soundToggle = document.getElementById("soundToggle");
const soundLabel = document.getElementById("soundLabel");

const scoreValue = document.getElementById("scoreValue");
const diagnosisValue = document.getElementById("diagnosisValue");
const resultCopy = document.getElementById("resultCopy");
const primarySymptom = document.getElementById("primarySymptom");


const shareButton = document.getElementById("shareButton");
const downloadCardButton = document.getElementById("downloadCardButton");
const shareCanvas = document.getElementById("shareCanvas");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getProject() {
  const params = new URLSearchParams(window.location.search);
  const key = (params.get("project") || "yoo").toLowerCase();
  return PROJECTS[key] || PROJECTS.yoo;
}

function setProjectContent() {
  const project = getProject();
  projectName.textContent = project.name;
  projectLocation.textContent = project.location;
  projectCta.href = project.cta;

  projectFacts.innerHTML = "";
  project.facts.forEach(fact => {
    const div = document.createElement("div");
    div.className = "project-fact";
    div.textContent = fact;
    projectFacts.appendChild(div);
  });
}

function playDing() {
  if (!soundEnabled) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();

    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.12, now + 0.015);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.78);
    master.connect(ctx.destination);

    [659.25, 987.77].forEach((frequency, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, now + index * 0.055);

      gain.gain.setValueAtTime(0.0001, now + index * 0.055);
      gain.gain.exponentialRampToValueAtTime(
        index === 0 ? 0.7 : 0.42,
        now + 0.02 + index * 0.055
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.6 + index * 0.055
      );

      osc.connect(gain);
      gain.connect(master);

      osc.start(now + index * 0.055);
      osc.stop(now + 0.8);
    });

    setTimeout(() => ctx.close(), 1000);
  } catch (error) {
    // Sound is decorative. The experience still works if Web Audio is unavailable.
  }
}

function updateElevator(floorIndex) {
  const currentFloor = FLOOR_SEQUENCE[floorIndex] || "G";

  document.querySelectorAll(".floor-row").forEach(row => {
    const floor = row.dataset.floor;
    const rowIndex = FLOOR_SEQUENCE.indexOf(floor);

    row.classList.toggle("is-current", rowIndex === floorIndex);
    row.classList.toggle("is-passed", rowIndex < floorIndex);
  });

  displayText.textContent = DISPLAY_MESSAGES[floorIndex] || currentFloor;
  displayArrow.style.transform = floorIndex === 0 ? "translateY(2px)" : "translateY(-2px)";
}

function renderQuestion() {
  const item = QUESTIONS[currentQuestion];

  questionText.textContent = item.question;
  questionCount.textContent =
    `${String(currentQuestion + 1).padStart(2, "0")} / ${String(QUESTIONS.length).padStart(2, "0")}`;

  const floorLabel = currentQuestion === QUESTIONS.length - 1
    ? "FINAL ASCENT"
    : `FLOOR ${String(currentQuestion + 1).padStart(2, "0")}`;

  floorKicker.textContent = floorLabel;
  optionsList.innerHTML = "";

  item.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
      <span class="option-text">${option.label}</span>
      <span class="option-arrow" aria-hidden="true">→</span>
    `;

    button.addEventListener("click", () => chooseAnswer(optionIndex, button));
    optionsList.appendChild(button);
  });

  const wrap = document.querySelector(".question-wrap");
  wrap.style.animation = "none";
  // Force reflow so the entrance animation runs on every question.
  void wrap.offsetWidth;
  wrap.style.animation = "";
}

async function showSymptom(option) {
  symptomTitle.textContent = option.symptom;
  symptomNote.textContent = option.note;

  playDing();

  symptomToast.classList.add("is-visible");
  await wait(3500);
  symptomToast.classList.remove("is-visible");
  await wait(300);
}

async function chooseAnswer(optionIndex, clickedButton) {
  if (isTransitioning) return;
  isTransitioning = true;

  const question = QUESTIONS[currentQuestion];
  const option = question.options[optionIndex];

  const buttons = [...optionsList.querySelectorAll(".option-button")];
  buttons.forEach(button => {
    button.disabled = true;
    button.classList.add(button === clickedButton ? "is-selected" : "is-muted");
  });

  totalScore += option.points;
  answers.push({
    questionIndex: currentQuestion,
    optionIndex,
    points: option.points,
    symptom: option.symptom
  });

  // Move the lift upward after each answer.
  const newFloorIndex = currentQuestion + 1;
  updateElevator(newFloorIndex);

  await showSymptom(option);

  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    isTransitioning = false;
    return;
  }

  await finishDiagnosis();
}

function calculateDiagnosis() {
  // Raw score range: 14–28.
  // Visible score is intentionally mapped to 74–98% so every path is HIGH or SEVERE.
  const minRaw = 14;
  const maxRaw = 28;
  const minVisible = 74;
  const maxVisible = 98;

  const normalized = (totalScore - minRaw) / (maxRaw - minRaw);
  const visibleScore = Math.round(
    minVisible + normalized * (maxVisible - minVisible)
  );

  const diagnosis = totalScore <= 20 ? "HIGH" : "SEVERE";

  return { visibleScore, diagnosis };
}

function getPrimarySymptom() {
  if (!answers.length) return "Elevated Expectations";

  const sorted = [...answers].sort((a, b) => b.points - a.points);
  return sorted[0].symptom;
}

async function runAnalysisSequence() {
  transitionDoors.classList.add("is-active");

  // Doors close.
  await wait(50);
  transitionDoors.classList.add("is-closed");
  await wait(760);

  transitionDoors.classList.add("is-analysing");
  playDing();

  for (const line of ANALYSIS_LINES) {
    analysisLine.textContent = line;
    await wait(650);
  }

  await wait(220);
}

async function finishDiagnosis() {
  await runAnalysisSequence();

  const { visibleScore, diagnosis } = calculateDiagnosis();
  const mainSymptom = getPrimarySymptom();

  scoreValue.textContent = visibleScore;
  diagnosisValue.textContent = diagnosis;
  primarySymptom.textContent = mainSymptom;

  resultCopy.textContent =
    diagnosis === "SEVERE"
      ? "Your expectations have reached a dangerous altitude. Ordinary rooftops may now appear insufficient."
      : "Your expectations are officially elevated. Ordinary spaces may already be losing their charm.";

  quizScreen.classList.remove("is-active");
  resultScreen.classList.add("is-active");

  await wait(250);

  transitionDoors.classList.remove("is-analysing");
  transitionDoors.classList.remove("is-closed");

  await wait(760);
  transitionDoors.classList.remove("is-active");

  isTransitioning = false;
}

async function beginExperience() {
  startButton.disabled = true;

  playDing();
  landingScreen.classList.add("is-opening");

  await wait(760);

  landingScreen.classList.remove("is-active");
  quizScreen.classList.add("is-active");

  updateElevator(0);
  renderQuestion();

  startButton.disabled = false;
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundLabel.textContent = soundEnabled ? "Sound on" : "Sound off";

  if (soundEnabled) {
    playDing();
  }
}

async function shareDiagnosis() {
  const { visibleScore, diagnosis } = calculateDiagnosis();
  const text =
    `My Rooftop Side Effect score is ${visibleScore}% — ${diagnosis}. ` +
    `Apparently, there is no known cure. Fortunately, there’s no need for one.`;

  const shareData = {
    title: "My Rooftop Side Effect Diagnosis",
    text,
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    shareButton.querySelector("span:first-child").textContent = "Copied to clipboard";

    setTimeout(() => {
      shareButton.querySelector("span:first-child").textContent = "Share diagnosis";
    }, 1800);
  } catch (error) {
    // User may cancel sharing. No further action needed.
  }
}

function roundedRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  words.forEach(word => {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  });

  if (current) lines.push(current);

  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });

  return y + lines.length * lineHeight;
}

function generateShareCard() {
  const ctx = shareCanvas.getContext("2d");
  const { visibleScore, diagnosis } = calculateDiagnosis();
  const project = getProject();

  const W = shareCanvas.width;
  const H = shareCanvas.height;

  // Background
  const gradient = ctx.createLinearGradient(0, 0, W, H);
  gradient.addColorStop(0, "#f6f1ea");
  gradient.addColorStop(1, "#e9e0d4");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, W, H);

  // Decorative rooftop horizon
  ctx.fillStyle = "#3b3e16";
  ctx.fillRect(92, 1420, 896, 5);

  ctx.fillStyle = "#b9562b";
  ctx.beginPath();
  ctx.arc(840, 250, 72, 0, Math.PI * 2);
  ctx.fill();

  // Brand
  ctx.fillStyle = "#151613";
  ctx.font = "600 54px Georgia";
  ctx.fillText("Pristine", 92, 130);

  ctx.font = "700 19px Arial";
  ctx.letterSpacing = "5px";
  ctx.fillText("PROPERTIES", 96, 170);

  // Heading
  ctx.font = "700 22px Arial";
  ctx.fillStyle = "#77766f";
  ctx.fillText("YOUR ROOFTOP SIDE EFFECT", 92, 380);

  // Score
  ctx.font = "500 300px Georgia";
  ctx.fillStyle = "#151613";
  ctx.fillText(String(visibleScore), 82, 730);

  ctx.font = "700 92px Arial";
  ctx.fillStyle = "#b9562b";
  ctx.fillText("%", 740, 545);

  // Diagnosis
  ctx.font = "700 22px Arial";
  ctx.fillStyle = "#77766f";
  ctx.fillText("DIAGNOSIS", 92, 840);

  ctx.font = "italic 500 132px Georgia";
  ctx.fillStyle = "#b9562b";
  ctx.fillText(diagnosis, 92, 980);

  // Copy
  ctx.font = "500 42px Arial";
  ctx.fillStyle = "#151613";
  drawWrappedText(
    ctx,
    "There is no known cure. Fortunately, there’s no need for one.",
    92,
    1120,
    820,
    58
  );

  ctx.font = "700 19px Arial";
  ctx.fillStyle = "#77766f";
  ctx.fillText("LIKELY CAUSE", 92, 1515);

  ctx.font = "500 64px Georgia";
  ctx.fillStyle = "#151613";
  ctx.fillText(project.name, 92, 1600);

  ctx.font = "700 22px Arial";
  ctx.fillStyle = "#b9562b";
  ctx.fillText(project.location.toUpperCase(), 92, 1644);

  ctx.font = "500 24px Arial";
  ctx.fillStyle = "#77766f";
  ctx.fillText("The Rooftop Side Effect • A Pristine Properties campaign", 92, 1810);

  return shareCanvas.toDataURL("image/png");
}

function downloadShareCard() {
  const dataUrl = generateShareCard();
  const link = document.createElement("a");
  link.download = "rooftop-side-effect-diagnosis.png";
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

startButton.addEventListener("click", beginExperience);
soundToggle.addEventListener("click", toggleSound);
shareButton.addEventListener("click", shareDiagnosis);
downloadCardButton.addEventListener("click", downloadShareCard);

updateElevator(0);
