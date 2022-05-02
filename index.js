// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.querySelector("#masaiForm")
form.addEventListener("submit",callme)
var matcharr= JSON.parse(localStorage.getItem("schedule"))||[];
function callme(){
event.preventDefault();
var obj={
            matchnum:masaiForm.matchNum.value,
            team1:masaiForm.teamA.value,
            team2:masaiForm.teamB.value,
            dated:masaiForm.date.value,
            place:masaiForm.venue.value,
    
        };
        matcharr.push(obj)
        console.log(matcharr)
    localStorage.setItem("schedule",JSON.stringify(matcharr)); 
}
