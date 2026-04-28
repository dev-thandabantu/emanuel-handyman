const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const copyButton = document.querySelector("[data-copy]");
const copyStatus = document.querySelector(".copy-status");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const value = copyButton.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      copyStatus.textContent = "Email copied.";
    } catch {
      copyStatus.textContent = value;
    }
  });
}
