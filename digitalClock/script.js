let myH1 = document.querySelector("#myH1");

function updateClock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    myH1.textContent = 
        `${hours.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}`;
}

updateClock(); // show immediately
setInterval(updateClock, 1000);
