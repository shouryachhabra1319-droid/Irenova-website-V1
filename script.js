// A. PARALLAX EFFECT
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    const leftHolo = document.getElementById("holo-left");
    const rightHolo = document.getElementById("holo-right");
    
    if(leftHolo) leftHolo.style.transform = `translateX(${x}px) translateY(${y}px)`;
    if(rightHolo) rightHolo.style.transform = `translateX(${-x}px) translateY(${y}px)`;
});

// B. LIVE TELEMETRY SIMULATION
setInterval(() => {
    const baseApogee = 12450;
    const randomFlux = Math.floor(Math.random() * 20) - 10;
    const apogeeEl = document.getElementById("live-apogee");
    if(apogeeEl) apogeeEl.innerText = (baseApogee + randomFlux).toLocaleString() + " FT";

    const baseStab = 2.40;
    const stabFlux = (Math.random() * 0.1) - 0.05;
    const stabEl = document.getElementById("live-stability");
    if(stabEl) stabEl.innerText = (baseStab + stabFlux).toFixed(2) + " CAL";
    
    if(Math.random() > 0.8) {
       const satEl = document.getElementById("sat-val");
       if(satEl) satEl.innerText = Math.floor(Math.random() * 3) + 10; 
    }
}, 800);

// C. COUNTDOWN TIMER
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 7); // 7 Days from now

setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const wEl = document.getElementById("weeks"); if(wEl) wEl.innerText = weeks < 10 ? "0" + weeks : weeks;
    const dEl = document.getElementById("days"); if(dEl) dEl.innerText = days < 10 ? "0" + days : days;
    const hEl = document.getElementById("hours"); if(hEl) hEl.innerText = hours < 10 ? "0" + hours : hours;
    const mEl = document.getElementById("minutes"); if(mEl) mEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    const sEl = document.getElementById("seconds"); if(sEl) sEl.innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);

// D. CONTACT MODULE LOGIC
function openComms() {
    const btn = document.getElementById("contact-trigger");
    if(!btn) return;
    
    btn.style.opacity = "0";
    setTimeout(() => {
        btn.style.display = "none";
        const input = document.getElementById("contact-input");
        if(input) {
            input.style.display = "flex";
            input.style.opacity = "0";
            setTimeout(() => input.style.opacity = "1", 50);
        }
    }, 200);
}

function transmitData() {
    const input = document.getElementById("contact-input");
    if(!input) return;

    input.style.opacity = "0";
    setTimeout(() => {
        input.style.display = "none";
        const msg = document.getElementById("contact-success");
        if(msg) msg.style.display = "block";
    }, 200);
}  
