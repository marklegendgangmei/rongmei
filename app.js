let dictionary = {};

// Load dictionary
fetch("data/dictionary.json")
  .then(response => response.json())
  .then(data => {
    dictionary = data;
  });

function translateText() {
  const input = document.getElementById("inputText").value.toLowerCase().trim();
  const outputBox = document.getElementById("outputText");

  if (!input) {
    outputBox.value = "Please enter text.";
    return;
  }

  // Direct match
  if (dictionary[input]) {
    outputBox.value = dictionary[input];
  } else {
    // Word-by-word fallback
    let words = input.split(" ");
    let translated = words.map(word => dictionary[word] || `[${word}]`);
    outputBox.value = translated.join(" ");
  }
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}

function getClosestMatch(input) {
  let keys = Object.keys(dictionary);
  return keys.find(key => key.includes(input));
}

