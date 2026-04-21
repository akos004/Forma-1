document.addEventListener("DOMContentLoaded", function () {
  const teams = [
    {
      name: "Red Bull Racing",
      image: "images/redbull.jpg",
      alt: "Red Bull Racing Forma 1-es autó",
      title: "Red Bull Racing csapat és autó",
      teamDesc: "A Red Bull Racing az egyik legismertebb Formula 1-es csapat, amely gyors fejlesztéseiről, látványos stílusáról és győzelemre törő szemléletéről ismert.",
      carDesc: "Az autójuk fő erőssége általában az aerodinamika, a nagy tempójú kanyarok és a versenystratégiai hatékonyság."
    },
    {
      name: "Ferrari",
      image: "images/ferrari.jpg",
      alt: "Ferrari Forma 1-es autó",
      title: "Ferrari csapat és autó",
      teamDesc: "A Ferrari a Formula 1 történetének egyik legismertebb és legsikeresebb csapata, hatalmas múlttal és óriási szurkolótáborral.",
      carDesc: "Az autóik a teljesítmény, a hagyomány és az olasz versenyszellem szimbólumai."
    },
    {
      name: "Mercedes",
      image: "images/mercedes.jpg",
      alt: "Mercedes Forma 1-es autó",
      title: "Mercedes csapat és autó",
      teamDesc: "A Mercedes a modern Formula 1 egyik legsikeresebb csapata, precíz mérnöki munkájáról és stabil teljesítményéről ismert.",
      carDesc: "Autóik fejlett technológiát, erős motorcsomagot és kiegyensúlyozott teljesítményt képviselnek."
    },
    {
      name: "McLaren",
      image: "images/mclaren.jpg",
      alt: "McLaren Forma 1-es autó",
      title: "McLaren csapat és autó",
      teamDesc: "A McLaren nagy múltú csapat, amely az innováció, a gyorsaság és a látványos versenyzés világában kiemelt szerepet tölt be.",
      carDesc: "Autójuk könnyű, gyors és technikailag fejlett versenygép benyomását kelti."
    },
    {
      name: "Aston Martin",
      image: "images/astonmartin.jpg",
      alt: "Aston Martin Forma 1-es autó",
      title: "Aston Martin csapat és autó",
      teamDesc: "Az Aston Martin elegáns megjelenésű és ambiciózus Formula 1-es csapat, amely folyamatos fejlődésre törekszik.",
      carDesc: "Az autójuk megjelenése és konstrukciója a modern versenymérnöki megoldásokat hangsúlyozza."
    },
    {
      name: "Alpine",
      image: "images/alpine.jpg",
      alt: "Alpine Forma 1-es autó",
      title: "Alpine csapat és autó",
      teamDesc: "Az Alpine a francia motorsport hagyományokat képviseli a Formula 1-ben, modern szemlélettel és technikai ambíciókkal.",
      carDesc: "Autójuk a teljesítmény, az egyensúly és a fejlesztési potenciál kombinációját mutatja."
    },
    {
      name: "Williams",
      image: "images/williams.jpg",
      alt: "Williams Forma 1-es autó",
      title: "Williams csapat és autó",
      teamDesc: "A Williams legendás név a Formula 1-ben, amely több korszakban is komoly sikereket ért el.",
      carDesc: "Autójuk a hagyomány és a modern technika találkozását jelképezi."
    },
    {
      name: "RB",
      image: "images/rb.jpg",
      alt: "RB Forma 1-es autó",
      title: "RB csapat és autó",
      teamDesc: "Az RB a Red Bull család másik Formula 1-es csapata, amely fiatalos lendülettel és fejlődési céllal szerepel a mezőnyben.",
      carDesc: "Az autójuk a versenyképességet és a fejlődési lehetőséget képviseli."
    },
    {
      name: "Kick Sauber",
      image: "images/sauber.jpg",
      alt: "Kick Sauber Forma 1-es autó",
      title: "Kick Sauber csapat és autó",
      teamDesc: "A Sauber csapat stabil jelenlévője a sportnak, mérnöki alapossággal és fejlődési törekvéssel.",
      carDesc: "Autójuk célja a megbízhatóság és az egyre jobb versenyteljesítmény."
    },
    {
      name: "Haas",
      image: "images/haas.jpg",
      alt: "Haas Forma 1-es autó",
      title: "Haas csapat és autó",
      teamDesc: "A Haas amerikai csapatként különleges helyet foglal el a Formula 1 mezőnyében.",
      carDesc: "Autójuknál fontos szerepet kap a hatékonyság és a költségek okos kezelése."
    }
  ];

  let currentIndex = 0;

  const teamImage = document.getElementById("teamImage");
  const teamName = document.getElementById("teamName");
  const teamDesc = document.getElementById("teamDesc");
  const carDesc = document.getElementById("carDesc");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateSlider() {
    if (teamImage && teamName && teamDesc && carDesc) {
      const team = teams[currentIndex];
      teamImage.src = team.image;
      teamImage.alt = team.alt;
      teamImage.title = team.title;
      teamName.textContent = team.name;
      teamDesc.textContent = team.teamDesc;
      carDesc.textContent = team.carDesc;
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + teams.length) % teams.length;
      updateSlider();
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % teams.length;
      updateSlider();
    });

    updateSlider();
  }

  function getSelectedValue(formId, questionName) {
    const selected = document.querySelector(`#${formId} input[name="${questionName}"]:checked`);
    return selected ? selected.value : null;
  }

  function getResultText(score) {
    if (score === 4) {
      return "4/4 – Kiváló! Nagyon ügyesen megoldottad.";
    } else if (score === 3) {
      return "3/4 – Szép munka! Majdnem tökéletes.";
    } else if (score === 2) {
      return "2/4 – Közepes eredmény. Érdemes még egyszer átolvasni az oldalt.";
    } else if (score === 1) {
      return "1/4 – Még gyakorolj egy kicsit!";
    } else {
      return "0/4 – Most nem sikerült, de próbáld újra!";
    }
  }

  function evaluateQuiz(formId, resultId, answers) {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
      const answer = getSelectedValue(formId, `q${i + 1}`);
      if (answer === answers[i]) {
        score++;
      }
    }

    const resultElement = document.getElementById(resultId);
    if (resultElement) {
      resultElement.textContent = getResultText(score);
    }
  }

  const quiz1Btn = document.getElementById("quiz1Btn");
  const quiz2Btn = document.getElementById("quiz2Btn");
  const quiz3Btn = document.getElementById("quiz3Btn");

  if (quiz1Btn) {
    quiz1Btn.addEventListener("click", function () {
      evaluateQuiz("quiz1", "result1", ["b", "a", "c", "a"]);
    });
  }

  if (quiz2Btn) {
    quiz2Btn.addEventListener("click", function () {
      evaluateQuiz("quiz2", "result2", ["b", "a", "a", "a"]);
    });
  }

  if (quiz3Btn) {
    quiz3Btn.addEventListener("click", function () {
      evaluateQuiz("quiz3", "result3", ["b", "a", "a", "b"]);
    });
  }
});