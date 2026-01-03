(function () {
    const countEl = document.getElementById("smooch-count");
    const buttonEl = document.getElementById("smooch-button");
    if (!countEl || !buttonEl) return;

    const API_URL =
        window.location.origin.startsWith("file:")
            ? "https://creestah.com/api/smooches"
            : "/api/smooches";

    // Prepare a container for hearts inside the card
    const cardEl = buttonEl.closest(".card");
    let heartsContainer = null;
    if (cardEl) {
        heartsContainer = cardEl.querySelector(".floating-hearts");
        if (!heartsContainer) {
            heartsContainer = document.createElement("div");
            heartsContainer.className = "floating-hearts";
            cardEl.appendChild(heartsContainer);
        }
    }

    function spawnHeart() {
        if (!heartsContainer) return;

        const heart = document.createElement("span");
        heart.className = "heart";

        // Random heart variant
        const variants = ["💖", "💗", "💘", "💞"];
        heart.textContent = variants[Math.floor(Math.random() * variants.length)];

        // Random horizontal position inside the card (20%–80%)
        const leftPercent = 20 + Math.random() * 60;
        heart.style.left = leftPercent + "%";

        // Start roughly near the button area (60%–75% of card height)
        const topPercent = 60 + Math.random() * 15;
        heart.style.top = topPercent + "%";

        heartsContainer.appendChild(heart);

        // Clean up after animation
        heart.addEventListener("animationend", () => {
            heart.remove();
        });

        // Safety cleanup in case animationend doesn't fire
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 2000);
    }

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

    // Increment on click + floating hearts
    buttonEl.addEventListener("click", () => {
        buttonEl.disabled = true;

        // Spawn a few hearts immediately for instant feedback
        const heartsToSpawn = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < heartsToSpawn; i++) {
            setTimeout(spawnHeart, i * 120);
        }

        fetch(API_URL, {
            method: "POST"
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
