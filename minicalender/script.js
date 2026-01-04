let datee=document.querySelector("#datee");
let dayy=document.querySelector("#dayy");
let monthh=document.querySelector("#monthh");
let yearr=document.querySelector("#yearr");

let date = new Date();

datee.textContent=date.getDate();
yearr.textContent=date.getFullYear();

let month=date.getMonth();

let day=date.getDay();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];


dayy.textContent=weekDays[day];

monthh.textContent=allMonths[month];