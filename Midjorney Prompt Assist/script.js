//script.js:

function updateResult() {
  const textInput = document.getElementById("text");
  const dropdowns = Array.from(document.querySelectorAll("select"));

  const inputs = [
    textInput.value,
    ...dropdowns.map(
      (dropdown) =>
        dropdown.options[dropdown.selectedIndex] &&
        dropdown.options[dropdown.selectedIndex].value
    ),
  ];
  const selectedInputs = inputs.filter((input) => input && input !== "Select");

  resultInput.value = selectedInputs.join(", ");
}
