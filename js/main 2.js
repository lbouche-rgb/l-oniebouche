    // DOCUMENT READY
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("ready");
    //
   
});
(function() {
    const element = document.getElementById("rotating");
    let angle = 0; // Angle initial en degrés

    function rotate() {
        angle = (angle + 1) % 360; // Incrémente l'angle
        element.style.transform = `rotate(${angle}deg)`; // Applique la rotation
        requestAnimationFrame(rotate); // Relance l'animation
    }

    // Lancer la rotation
    rotate();})();

    if (char === ' ') {
  return `<span class="space"></span>`;
}

