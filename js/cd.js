const dBtn = document.getElementById('d');
const hBtn = document.getElementById('h');
const mBtn = document.getElementById('m');
const sBtn = document.getElementById('s');

function countDown(){

    const ny = new Date('January 1 2022');
    const d = new Date;
    const totals = (ny - d) / 1000; //Secondi totali 

    let gg = Math.floor(totals/3600/24);
    let ore = Math.floor(totals/3600) %24;
    let min = Math.floor(totals/60) %60;
    let sec = Math.floor(totals) %60;

    dBtn.innerHTML = gg;
    hBtn.innerHTML = addz(ore);
    mBtn.innerHTML = addz(min);
    sBtn.innerHTML = addz(sec);
}

function addz(time){
    return time < 10 ? (`0${time}`) : time;
}


countDown()
setInterval(countDown,1000)