const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const bioInfo=document.querySelector("#bioInfo");

const bioSentences="I am from the city of Chișinău, Republic of Moldova\nI am 20 years old.\nI am currently an university student at the University of Southern Denmark in the city of Sønderborg.\n I am studying Software Engineering and I am in my 2nd semester.\nSome of my passions are music, programming and reading.";
const bioFacts="Intelligent, Curious, Hard-Working, Kind-Hearted\nCooperative, Detail-Oriented, Rational, Open-minded";

button1.onclick=changeToSentences;
button2.onclick=changeToFacts;

function changeToSentences()
{
    bioInfo.innerText=bioSentences;
}



function changeToFacts()
{
    bioInfo.innerText=bioFacts;
}