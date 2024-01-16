const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textarea.select();
  let textValue = textarea.value;

  navigator.clipboard.writeText(textValue);
  copyBtn.innerText = "Was Coppied!";
  copyBtn.style.backgroundColor = "tomato";

  setTimeout(() => {
    copyBtn.innerText = "Copy";
    copyBtn.style.backgroundColor = " rgb(250, 154, 137)";
  }, 1500);
});
