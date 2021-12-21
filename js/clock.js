const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
                    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
                ];

function clock(){
    let data = new Date;
    let minuti = data.getMinutes();
    let secondi = data.getSeconds();
    let ora = data.getHours();
    let giorno = data.getDate();
    let mese = monthNames[data.getMonth()];
    let anno = data.getFullYear();

    //Aggiungo ai secondi e minuti < 9 lo 0 davanti
    if(secondi<=9){
        secondi = `0${secondi}`
    }
    if(minuti<=9){
        minuti = `0${minuti}`
    }

    let clock = ora+':'+minuti+':'+secondi;
    let calendario = giorno +' '+mese+' '+anno

    document.getElementById("clock").innerHTML= clock;
    document.getElementById("cal").innerHTML= calendario;
    window.setTimeout("clock()", 1000);
};

document.innerHTML= clock();


//----------------------------------------------------
//--------------------ANIMAZIONI----------------------
//----------------------------------------------------

gsap.from(".orologio",{
    scale:0.5
})

gsap.from(".calendario",{
    scale:0,
    y:-10
})

gsap.from(".homebtn",{
    y:-60,
    duration:0.5
})
