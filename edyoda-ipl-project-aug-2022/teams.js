//Extracting dynamic URL 
let dataURL = location.href;
let newDataUrl = new URL(dataURL);
let teamFull = newDataUrl.searchParams.get("name");


// console.log(teamFull)


// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));
var box=document.getElementById("container_teams")
var teamtable=document.getElementById("team-table")

var cnt=0;



    
//bulding navigation to player details on click of card
for(var i=0;i<playersDetails.length;i++){
if(teamFull==playersDetails[i].from){
  var isPlay=""
  if(playersDetails[i].isPlaying==true){
    isPlay="Playing"
  }
  else{
    isPlay="On Bench"
  }
var currentP=playersDetails[i].playerName
cnt++
box.innerHTML+=`
<div    onclick="makethisinclick('${currentP}')"    class="minibox mn2">

<img src="${playersDetails[i].playerImg}" class="mainimage" alt=""/> 
<div class="dataodcard">

  <p class="text1"> ${playersDetails[i].playerName}   </p>
  <p class="text2"> Worth : ${playersDetails[i].price} </p>
  <p class="text2"> Playing : ${isPlay} </p>
  <p class="text2">
   ${playersDetails[i].description} </p>
 
</div>

</div>

`}
//building function for onclick
function makethisinclick(res){
  window.open(`./playerDetails.html?name=${res}`,"_self")
}

}
// search for top batsman
var topBatsman=""
for(var j=0;j<playersDetails.length;j++){
  if(playersDetails[j].description=="Batsman"&&playersDetails[j].from==teamFull){
   topBatsman=playersDetails[j].playerName

   break
  }
  else{
   topBatsman="No Player"
  }
}
// search for top bowler
var topBowler=""
for(var j=0;j<playersDetails.length;j++){
  if(playersDetails[j].description=="Bowler"&&playersDetails[j].from==teamFull){
   topBowler=playersDetails[j].playerName

   break
  }
  else{
   topBowler="No Player"
  }
}


// team table
console.log(cnt)
teamsDetails.map((item)=>{
  if(teamFull==item.sName){

 
 return teamtable.innerHTML+=`
 <table>
 <tr>
     <td>Team name</td>
     <td>${item.teamFullName}</td>
 </tr>

 <tr>
     <td>Team icon</td>
     <td> <img src="${item.teamIcon}" class="team-page-icon" alt=""></td>
 </tr>

 <tr>
     <td>Player count</td>
     <td>  ${cnt}</td>
 </tr>

 <tr>
     <td>Top Batsman</td>
     <td>${topBatsman}</td>
 </tr>
 <tr>
     <td>Top Bowler</td>
     <td>${topBowler}</td>
 </tr>

 <tr>
     <td>Won Count</td>
     <td>${item.WonCount}</td>
 </tr>
</table>

`
}

})





