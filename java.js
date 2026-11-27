
// Oppgave 1
function oddOrEven(number) {
  return numer % 2 === 0 ? "Partall" : "Oddetall";
}

// Oppgave 2
function shout(message) {
  return message.toUpperCase() + "!";
}

// Oppgave 3
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

// Oppgave 4
function colorPicker(color) {
  color.splice(1, 2);
  return color;
}

array = ["rød", "grønn", "blå", "gul", "oransje"];

// Oppgave 5
function wordReplace(sentence) {
  return sentence.trim().replace("vanskelig", "gøy");
}

const sentence = "JavaScript er vanskelig!";
const sentence2 = "Det er vanskelig å bruke metoder";


const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];
//Oppgave 6
function manipulateArray(array) {

  array.splice(0, 1);

//if statement for å sjekke om "Viskelær" finnes i arrayet, og fjerne det hvis det gjør det
const ViskelærIndex = array.indexOf("Viskelær");
if (ViskelærIndex !== -1) {
  array.splice(ViskelærIndex, 1);
}
//if statement for å sjekke om "Penn" finnes i arrayet, og erstatte det med "Notatbok" hvis det gjør det
const pennIndex = array.indexOf("Penn");
if (pennIndex !== -1) {
  array.splice(pennIndex, 1, "Notatbok");
}
//returner arrayet som en streng med elementene separert med " | "
return array.join(" | ");
}