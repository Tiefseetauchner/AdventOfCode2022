let topLevelDiv = document.getElementById("days") ?? getFallbackTopLevelDiv();

new Day5(topLevelDiv);
new Day6(topLevelDiv);

// ---- Helpers ----

function getFallbackTopLevelDiv(): HTMLElement {
  let fallbackTopLevelDiv = document.createElement("div");

  fallbackTopLevelDiv.id += "days";
  document.appendChild(topLevelDiv);

  return fallbackTopLevelDiv;
}