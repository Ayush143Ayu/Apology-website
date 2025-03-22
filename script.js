
document.getElementById("apology-btn").addEventListener("click", function() {
    document.getElementById("message").innerText = "I'm truly sorry, and I hope you can forgive me ❤️";
});
// Smooth page fade-in animation
gsap.from(".container", { opacity: 0, duration: 1.5, y: -50 });

// Apology button hover effect
document.getElementById("apology-btn").addEventListener("mouseenter", () => {
    gsap.to("#apology-btn", { scale: 1.1, duration: 0.3 });
});
document.getElementById("apology-btn").addEventListener("mouseleave", () => {
    gsap.to("#apology-btn", { scale: 1, duration: 0.3 });
});

// Floating hearts animation
function createHeart() {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let startX = Math.random() * window.innerWidth;
    let endX = startX + (Math.random() * 100 - 50);
    let duration = Math.random() * 3 + 2;

    gsap.to(heart, {
        y: -200,
        x: endX,
        opacity: 0,
        duration: duration,
        ease: "power1.out",
        onComplete: () => heart.remove()
    });
}

// Generate floating hearts every second
setInterval(createHeart, 1000);
function checkAnswer(answer) {
    let resultText = document.getElementById("quiz-result");
    if (answer) {
        resultText.innerHTML = "Yay! I love you too! ❤️";
        gsap.to("#quiz-result", { scale: 1.2, color: "green", duration: 0.5 });
    } else {
        resultText.innerHTML = "Nope! Try again 😉";
        gsap.to("#quiz-result", { scale: 1.2, color: "red", duration: 0.5 });
    }
}
let letterText = "Dear love, I just want to say how much you mean to me. Every moment with you is special, and I’m truly sorry for my mistake. I promise to make things better. You are my happiness. ❤️";
let index = 0;

function typeLetter() {
    if (index < letterText.length) {
        document.getElementById("letter-text").innerHTML += letterText.charAt(index);
        index++;
        setTimeout(typeLetter, 50);
    }
}
setTimeout(typeLetter, 2000); // Start typing after 2 seconds
// Play background music when apology button is clicked
document.getElementById("apology-btn").addEventListener("click", function() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    }
});
let music = document.getElementById("bg-music");
let musicButton = document.getElementById("music-toggle");

musicButton.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        musicButton.innerText = "Pause Music";
    } else {
        music.pause();
        musicButton.innerText = "Play Music";
    }
});
