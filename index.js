"use strict";
const wordS = document.querySelector(".word-h1");
const vowelS = document.querySelector(".vowel-h1");
const characterS = document.querySelector(".character-h1");
const content = document.querySelector(".content");

content.addEventListener("keyup", function () {
  const removespaces = content.value.replaceAll(/\s+/g, "");
  characterS.textContent = removespaces.length;

  const countwords = content.value.split(/\s+/);
  const wordCount = countwords.filter((word) => word !== "").length;

  wordS.textContent = wordCount;

  if (content.value === "") {
    wordS.textContent = 0;
  }

  function counter(a) {
    let vowel = "აეიოუaeiou";
    let count = 0;
    const low = a.toLowerCase();
    for (let b of low) {
      if (vowel.includes(b)) {
        count++;
      }
    }
    vowelS.textContent = count;
  }

  counter(content.value);
});
