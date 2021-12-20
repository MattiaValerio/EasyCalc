const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
                    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
                ];

let ck = document.getElementById("clock");
let data = new Date;
let minuti = data.getMinutes();
let secondi = data.getSeconds();
let ora = data.getHours();
let giorno = data.getDate();
let mese = monthNames[data.getMonth()];
let anno = data.getFullYear();

let clock = ora+':'+minuti+':'+secondi;
let calendario = giorno +' '+mese+' '+anno

console.log(clock)
console.log(calendario)

document.getElementById("cal").innerHTML= calendario;
document.getElementById("clock").innerHTML= clock;

