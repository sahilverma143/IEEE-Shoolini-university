document.addEventListener("DOMContentLoaded", function() {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1]; // Index of the voice you want to use
    msg.text = "Welcome to  IEEE!";
    window.speechSynthesis.speak(msg);
});
