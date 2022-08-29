//getting data from local storage
let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));
//building dropdown of team
var selectTeam=document.getElementById("inp6")
for(var i=0;i<localTeam.length;i++){
    selectTeam.innerHTML+=`
    <option value="${localTeam[i].teamFullName}">${localTeam[i].teamFullName}</option>
               
    `
}
//implementing submit button functionality.
var newData=10
$("#addteamform").submit(function (e) {
    e.preventDefault();
    let inp_val = $("#inp6").val();
    let shortName = '';//extracting team name for player profile.
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }
    var trueOrFal=""
    if($("#inp3").val()=="true"){//checking playr is playing or not
        trueOrFal=true
    }
    else{
        trueOrFal=false
    }
 //building object for local storage to make player card
    let playerAdding={
        "id":localPlayers.length,
        "playerName": $("#inp1").val(),
        "from": shortName,
        "price": $("#inp2").val()+"Cr",
        "isPlaying": trueOrFal,
        "description":  $("#inp4").val(),
        "playerImg":  $("#inp5").val(),
        "playerTeam":  $("#inp6").val(),


    }
//storing values in array and setting in local storage on submission
    localPlayers.push(playerAdding)
    localStorage.setItem('playerArray',JSON.stringify(localPlayers))//adding new player using local storage.

    location.href = "./index.html";
})

