
document.getElementById("apology-btn").addEventListener("click", function() {
    document.getElementById("message").innerText = "I'm truly sorry, and I hope you can forgive me ❤️";
});
// Smooth fade-in animation
gsap.from(".container", { opacity: 0, duration: 1.5, y: -50 });

// Button animation on hover
document.getElementById("apology-btn").addEventListener("mouseenter", () => {
    gsap.to("#apology-btn", { scale: 1.1, duration: 0.3 });
});
document.getElementById("apology-btn").addEventListener("mouseleave", () => {
    gsap.to("#apology-btn", { scale: 1, duration: 0.3 });
});
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
