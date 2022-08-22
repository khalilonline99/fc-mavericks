document.getElementById('btn-player-1').addEventListener('click',function(){
    selectPlayer('name-player-1', 'player-selected','btn-player-1');
    /* const namePlayer = document.getElementById('name-player-1');
    const namePlayerText = namePlayer.innerText;

    const selectedField = document.getElementById('player-selected-one');
    selectedField.innerText = namePlayerText;

    if (selectedField.innerText === namePlayerText){
        document.getElementById('btn-player-1').disabled = true;
        document.getElementById('btn-player-1').style.backgroundColor = 'gray';
        document.getElementById('btn-player-1').innerText = 'SELECTED';
        
    } */
})

document.getElementById('btn-player-2').addEventListener('click',function(){
    selectPlayer('name-player-2', 'player-selected','btn-player-2');
})

document.getElementById('btn-player-3').addEventListener('click',function(){
    selectPlayer('name-player-3', 'player-selected', 'btn-player-3');
})

document.getElementById('btn-player-4').addEventListener('click',function(){
    selectPlayer('name-player-4', 'player-selected', 'btn-player-4');
})

document.getElementById('btn-player-5').addEventListener('click',function(){
    selectPlayer('name-player-5', 'player-selected', 'btn-player-5');
})

document.getElementById('btn-player-6').addEventListener('click',function(){
    selectPlayer('name-player-6', 'player-selected', 'btn-player-6');
})
document.getElementById('btn-player-7').addEventListener('click',function(){
    selectPlayer('name-player-7', 'player-selected', 'btn-player-7');
})
document.getElementById('btn-player-8').addEventListener('click',function(){
    selectPlayer('name-player-8', 'player-selected', 'btn-player-8');
})
document.getElementById('btn-player-9').addEventListener('click',function(){
    selectPlayer('name-player-9', 'player-selected', 'btn-player-9');
})


document.getElementById('btn-calculate').addEventListener('click',function(){
    const playerBudget = document.getElementById('player-budget');
    const playerBudgetString = playerBudget.value;

    if (isNaN(playerBudgetString) === false){
        const playerBudgetNumber = parseInt(playerBudgetString);
        const selectedPlayersNo = document.getElementById('player-selected').getElementsByTagName('li').length;
        const totalAmount = selectedPlayersNo * playerBudgetNumber;

        const totalAmountDisplay = document.getElementById('amount-total-player');
        totalAmountDisplay.innerText = totalAmount;

        console.log(totalAmount);
    }
    else{
        alert('Please give numbers only');
    }
    
})
