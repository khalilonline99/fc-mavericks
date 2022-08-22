document.getElementById('btn-player-1').addEventListener('click',function(){
    const namePlayer = document.getElementById('name-player-1');
    const namePlayerText = namePlayer.innerText;

    const selectedField = document.getElementById('player-selected-one');
    selectedField.innerText = namePlayerText;

    if (selectedField.innerText === namePlayerText){
        document.getElementById('btn-player-1').disabled = true;
        document.getElementById('btn-player-1').style.backgroundColor = 'gray';
        document.getElementById('btn-player-1').innerText = 'SELECTED';
        
    }
})


document.getElementById('btn-player-2').addEventListener('click',function(){
    const namePlayer = document.getElementById('name-player-2');
    const namePlayerText = namePlayer.innerText;

    /* const selectedField = document.getElementById('player-selected-two');
    selectedField.innerText = namePlayerText; */
    const selectedField = document.getElementById('player-selected');
    selectedField.innerHTML = selectedField.innerHTML + "<li>" + namePlayerText + "</li>";

    if (selectedField.innerText === namePlayerText){
        document.getElementById('btn-player-2').disabled = true;
        document.getElementById('btn-player-2').style.backgroundColor = 'gray';
        document.getElementById('btn-player-2').innerText = 'SELECTED';
        
    }
    
})

document.getElementById('btn-player-3').addEventListener('click',function(){
    const namePlayer = document.getElementById('name-player-3');
    const namePlayerText = namePlayer.innerText;

    const selectedField = document.getElementById('player-selected');
    selectedField.innerHTML = selectedField.innerHTML + "<li>" + namePlayerText + "</li>";
    
})

// test of pushs 