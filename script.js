// let copyButton = document.querySelector(".svg");
// copyButton.addEventListener("click", () => {
//   let text = document.querySelector(".top-password");
//   text.select();
//   Text.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(Text.value);
//   alert("Copied the text: " + Text.value);
// });

let copyButton = document.querySelector(".svg");
copyButton.addEventListener("click", () => {
  let text = document.querySelector(".top-password");
  text.select();
  document.execCommand("copy");
  alert("Copied the text: " + text.value);
});
