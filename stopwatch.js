const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let startingTime, elapsedTime = 0;
let isRunning = false;

startBtn.onclick = () => {
    if(!isRunning){
        startingTime = new Date() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    
}

resetBtn.onclick = () => {
    if(isRunning){
        clearInterval(timer);
        let displayTime = `00:00:00<span class="yellowText">.00</span>`;
        document.getElementById("display").innerHTML = displayTime;
        isRunning = false;
        startBtn.textContent = 'Start';
        elapsedTime = 0;
    }

    else{
        let displayTime = `00:00:00<span class="yellowText">.00</span>`;
        document.getElementById("display").innerHTML = displayTime;
        elapsedTime = 0;
        startBtn.textContent = 'Start';
    }
}

stopBtn.onclick = () => {
    if(isRunning){
        clearInterval(timer);
        const currentTime = new Date();
        elapsedTime = currentTime - startingTime;
        startBtn.textContent = 'Play';
        isRunning = false;
    }
}

function update(){
    const currentTime = new Date();
    elapsedTime = currentTime - startingTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2,0);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2,0);
    let seconds = Math.floor(elapsedTime / (1000) % 60).toString().padStart(2,0);
    let centisecs = Math.floor(elapsedTime / 10 % 100).toString().padStart(2,0);

    let displayTime = `${hours}:${minutes}:${seconds}<span class="yellowText">.${centisecs}</span>`;
    document.getElementById("display").innerHTML = displayTime;
}

