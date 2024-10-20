let canRun = true;
function myfunction() {
    if (!canRun) return;
    canRun = false;
    const premiePositions = [45, 225]; // Adjust based on the exact layout of the wheel

    // Pick one of the "Premie!!" sections
    const selectedPremie = premiePositions[0];

    const fullRotations = 360 * 7; 
    const finalRotation = fullRotations + selectedPremie; // Land exactly on one of the "Premie!!" sections

    // Apply the rotation to the wheel
    document.getElementById('box').style.transform = "rotate(" + finalRotation + "deg)";

    
    const element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function () {
        element.classList.add('animate');
    }, 5000); // 5-second spin animation

    // Typing effect for the result text after the spin completes
    setTimeout(function () {
        typeText("Gratulerer! Du vant et ergonomisk tastatur!! \nVelkommen tilbake neste år!");
    }, 5000); // Result text appears after the spin ends
    const h1 = document.querySelector("h1")
    //h1.innerHTML = "Velkommen tilbake neste år!"
    
}
// Typing effect function
function typeText(text) {
    let i = 0;
    const resultElement = document.createElement('h2'); 
    document.body.appendChild(resultElement);

    const interval = setInterval(function() {
        if (i < text.length) {
            resultElement.innerHTML += text.charAt(i); 
            i++;
        } else {
            clearInterval(interval); 
        }
    }, 100); 
}