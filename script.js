function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate the degrees for each hand
    const secondsDeg = ((seconds / 60) * 360);
    const minutesDeg = ((minutes / 60) * 360); 
    const hoursDeg = ((hours % 12 / 12) * 360);  

    // Rotate the hands
    document.getElementById('second').style.transform = `rotate(${secondsDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minutesDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hoursDeg}deg)`;
}

// Update immediately and then every second
setInterval(updateClock, 1000);
updateClock();