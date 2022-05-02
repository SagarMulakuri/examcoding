// write js code here corresponding to favourites.html
var favouritesarr=JSON.parse(localStorage.getItem("favourites"))||[]
displayData(favouritesarr)
console.log(favouritesarr)
function displayData(data){
    data.forEach(function(elem,index){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        var td4=document.createElement("td")
        var td5=document.createElement("td")
        var td6=document.createElement("td")

         td1.innerText=elem.matchnum;
         td2.innerText=elem.team1;
         td3.innerText=elem.team2;
         td4.innerText=elem.dated;
         td5.innerText=elem.place;
         td6.innerText="Delete";
         td6.style.color="black";
         td6.style.cursor="pointer";
         td6.addEventListener("click",function(){
             favourites(elem);
         })
         tr.append(td1,td2,td3,td4,td5,td6);
         console.log(td6)
         document.querySelector("tbody").append(tr);
        })
    }
    function favourites(elem){
       Node.parentNode.removeChild(node)
       
        localStorage.setItem("favourites",JSON.stringify(favouritesarr))
    }
   
