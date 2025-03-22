
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
