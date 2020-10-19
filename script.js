/**
 * Done: Update the text in the "Formatted Text" section as a user types in the textarea
 * Done TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * Done: Add an .underline class to "Formatted Text" when Underline button is clicked
 * Done: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 * //not using keydown instad using oninput to capture all types of input event not just keyboard events
 */
function updateText() {
  let outputText = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = outputText;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  elem.classList.toggle("active");
  let outputText = document.getElementById("text-output");
  if (elem.classList.contains("active")) {
    outputText.classList.add("underline");
  } else {
    outputText.classList.remove("underline");
  }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
  let formattedText = document.getElementById("text-output");
  formattedText.style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName("align");
  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].classList.remove("active");
  }
  elem.classList.add("active");
}
