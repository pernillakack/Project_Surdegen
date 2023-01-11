const menuButtonEl = document.getElementById("menuButton");
const menuEl = document.getElementById("menu");

function showMenu() {
    console.log("Hej");
    menuEl.classList.add("displayMenu");
    menuButtonEl.classList.add("hide");
    console.log("Öppnar menyn...");
}
menuButtonEl.addEventListener('click', showMenu);


const hide_messageEl = document.getElementById("hide_message");
const contactFormEl = document.getElementById("contactForm");
const sentEl = document.getElementById("sent");
                
function hideMessage() {
    contactFormEl.classList.add("hide");
    sentEl.classList.add("showMessage");
    console.log("Meddelandet sänds och formuläret göms.");
}
hide_messageEl.addEventListener('click', hideMessage);

hide_messageEl.addEventListener('click', (event) => {
    // Prevent the form from submitting
    event.preventDefault();
});
