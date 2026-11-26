function oddOrEven(number) {
  return numer % 2 === 0 ? "Partall" : "Oddetall";
}

function shout(message) {
  return message.toUpperCase() + "!";
}

function greetingTime(hour, name) {
  if (hour >= 0 && hour <= 5) {
    return "God natt, " + name;
  } else if (hour >= 6 && hour <= 11) {
    return "God morgen, " + name;
  } else if (hour >= 12 && hour <= 17) {
    return "God dag, " + name;
  } else if (hour >= 18 && hour <= 23) {
    return "God kveld, " + name;
  } else {
    return "Ugyldig tid";
  }
}


function colorPicker(color) {
  color.splice(1, 2);
  return color;
}

array = ["rød", "grønn", "blå", "gul", "oransje"];

function wordReplace(sentence) {
  return sentence.trim().replace("vanskelig", "gøy");
}

const sentence = "JavaScript er vanskelig!";
const sentence2 = "Det er vanskelig å bruke metoder";

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

function manipulateArray(array) {
array.splice(0, 1);
const ViskelærIndex = array.indexOf("Viskelær");
if (ViskelærIndex !== -1) {
  array.splice(ViskelærIndex, 1);
}
const pennIndex = array.indexOf("Penn");
if (pennIndex !== -1) {
  array.splice(pennIndex, 1, "Notatbok");
}
}