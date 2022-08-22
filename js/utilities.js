function alertMessage() {
    alert('Warning!! You cannot select more than Five Players');
}


function selectPlayer(playerName, playerSelected, buttonCardPlayer){

    const lengthPlayers = document.getElementById('player-selected').getElementsByTagName('li').length;

    if (lengthPlayers < 5){
        const namePlayer = document.getElementById(playerName);
        const namePlayerText = namePlayer.innerText;

        const selectedField = document.getElementById(playerSelected);
        selectedField.innerHTML = selectedField.innerHTML + "<li>" + namePlayerText + "</li>";
        const playerButton = document.getElementById(buttonCardPlayer);

        if (selectedField.lastChild.innerText === namePlayerText){
            playerButton.disabled = true;
            playerButton.style.backgroundColor = 'gray';
            playerButton.innerText = 'SELECTED';
            
        }
    }
    else{
        alertMessage();
    }
    
}

