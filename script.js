const daysEla = document.getElementById('daysa')
const hoursEla = document.getElementById('hoursa')
const minsEla = document.getElementById('minsa')

const daysElb = document.getElementById('daysb')
const hoursElb = document.getElementById('hoursb')
const minsElb = document.getElementById('minsb')

const daysEll = document.getElementById('daysl')
const hoursEll = document.getElementById('hoursl')
const minsEll = document.getElementById('minsl')

const daysElf = document.getElementById('daysf')
const hoursElf = document.getElementById('hoursf')
const minsElf = document.getElementById('minsf')

const daysElc = document.getElementById('daysc')
const hoursElc = document.getElementById('hoursc')
const minsElc = document.getElementById('minsc')

//Skift årstal her efter deres fødselsdag er holdt. Tihi fnis
const alex = '13 Oct 2023';
const birgitte = '6 Aug 2023';
const lucas = '28 Aug 2023';
const fie = '4 Feb 2023';
const christian = '16 Dec 2022';


function countdown(){
    // Alex
    const DateAlex = new Date(alex);
    const currentDate = new Date();

    const secondsa = (DateAlex - currentDate) / 1000;

    const daysa = Math.floor(secondsa / 3600 / 24);
    const hoursa = Math.floor(secondsa / 3600 % 24);
    const minutesa = Math.floor(secondsa / 60) % 60;
    // Birgitte
    const DateBirgitte = new Date(birgitte);

    const secondsb = (DateBirgitte - currentDate) / 1000;

    const daysb = Math.floor(secondsb / 3600 / 24);
    const hoursb = Math.floor(secondsb / 3600 % 24);
    const minutesb = Math.floor(secondsb / 60) % 60;
    // Lucas
    const DateLucas = new Date(lucas);

    const secondsl = (DateLucas - currentDate) / 1000;

    const daysl = Math.floor(secondsl / 3600 / 24);
    const hoursl = Math.floor(secondsl / 3600 % 24);
    const minutesl = Math.floor(secondsl / 60) % 60;
    // Fie
    const DateFie = new Date(fie);

    const secondsf = (DateFie - currentDate) / 1000;

    const daysf = Math.floor(secondsf / 3600 / 24);
    const hoursf = Math.floor(secondsf / 3600 % 24);
    const minutesf = Math.floor(secondsf / 60) % 60;
    // Christian
    const DateChristian = new Date(christian);

    const secondsc = (DateChristian - currentDate) / 1000;

    const daysc = Math.floor(secondsc / 3600 / 24);
    const hoursc = Math.floor(secondsc / 3600 % 24);
    const minutesc = Math.floor(secondsc / 60) % 60;

    console.log("Alex: " + daysa, hoursa, minutesa);
    console.log("Birgitte: " + daysb, hoursb, minutesb);
    console.log("Lucas: " + daysl, hoursl, minutesl);
    console.log("Fie: " + daysf, hoursf, minutesf);
    console.log("Christian: " + daysc, hoursc, minutesc);

    daysEla.innerHTML = daysa;
    hoursEla.innerHTML = hoursa;
    minsEla.innerHTML = minutesa;

    daysElb.innerHTML = daysb;
    hoursElb.innerHTML = hoursb;
    minsElb.innerHTML = minutesb;

    daysEll.innerHTML = daysl;
    hoursEll.innerHTML = hoursl;
    minsEll.innerHTML = minutesl;

    daysElf.innerHTML = daysf;
    hoursElf.innerHTML = hoursf;
    minsElf.innerHTML = minutesf;

    daysElc.innerHTML = daysc;
    hoursElc.innerHTML = hoursc;
    minsElc.innerHTML = minutesc;

}
// Init call
countdown();

setInterval(countdown, 1000);
