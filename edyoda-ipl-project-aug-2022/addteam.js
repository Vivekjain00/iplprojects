

//Fatching data from local storage
let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

//Submit functionality on button click using jquery
$("#addteamform").submit(function (e) {


    e.preventDefault();


    let inputval1 = $("#inp1").val();
    let shortName = '';//extracting team name from input and convert it into uppercase.
    for(let i=0;i<inputval1.length;i++){
        if(i == 0){
            shortName += inputval1[i++].toUpperCase();
            continue;
        }else if(inputval1[i] == ' '){
            shortName += inputval1[++i].toUpperCase();
            i++;
        }
    }
//Building of object to be set in local storage to add new card in homepage.
    let addData = {
        "id": localTeam.length,
        "teamFullName":$("#inp1").val() ,
        "sName": shortName,
        
        "teamIcon": $("#inp3").val(),
        "WonCount": $("#inp4").val(),


    }

   localTeam.push(addData);
   localStorage.setItem("teamArray", JSON.stringify(localTeam));//adding new team data using local storage. 

   location.href = `./teams.html?name=${addData.sName}`;
})
