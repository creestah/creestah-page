(function () {
  const countEl = document.getElementById("smooch-count");
  const buttonEl = document.getElementById("smooch-button");
  if (!countEl || !buttonEl) return;

  const API_URL = "/api/smooches";

  // Load current global count on page load
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      if (typeof data.count === "number") {
        countEl.textContent = data.count;
      }
    })
    .catch((err) => {
      console.error("Failed to load smooch count", err);
    });

  // Increment on click
  buttonEl.addEventListener("click", () => {
    buttonEl.disabled = true;

    fetch(API_URL, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === "number") {
          countEl.textContent = data.count;
        }
      })
      .catch((err) => {
        console.error("Failed to increment smooch count", err);
      })
      .finally(() => {
        buttonEl.disabled = false;
        buttonEl.classList.add("smooch-button--clicked");
        setTimeout(
          () => buttonEl.classList.remove("smooch-button--clicked"),
          180
        );
      });
  });
})();
