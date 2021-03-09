console.log("Client side JavaScript file is loaded");



// Grab the form element
const weatherForm = document.querySelector('form');
const locationInput = document.querySelector(".locationInput");
const msgOne = document.getElementById("msg-1");
const msgTwo = document.getElementById("msg-2");
const msgThree = document.getElementById("msg-3");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();

    msgOne.innerHTML = msgTwo.innerHTML = msgThree.innerHTML = "";

    // Grab the value of the text field
    let location = locationInput.value || "Boston";
    const URL = "/weather?address=" + location;

    fetch(URL).then((response) => {
        console.log(URL);
        response.json().then((data) => {
            if(data.error){
                msgOne.innerHTML = data.error.info;
                return;
            }

            msgOne.innerHTML = data.location;
            msgTwo.innerHTML = data.temperature;
            msgThree.innerHTML = new Date(Date.now());
        });
    }).catch((err) => {msgOne.innerHTML = "Failed"});
});