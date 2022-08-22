document.getElementById('btn-player-1').addEventListener('click',function(){
    selectPlayer('name-player-1', 'player-selected','btn-player-1');
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
        const playerBudgetNumber = parseFloat(playerBudgetString);
        const selectedPlayersNo = document.getElementById('player-selected').getElementsByTagName('li').length;
        const totalAmountPlayers = selectedPlayersNo * playerBudgetNumber;
        playerBudget.value = '';

        const totalAmountDisplay = document.getElementById('amount-total-player');
        totalAmountDisplay.innerText = totalAmountPlayers;

        console.log(totalAmount);
    }
    else{
        alert('Please give numbers only');
    }
    
})


document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const totalAmountPlayers = document.getElementById('amount-total-player');
    const totalAmountPlayersString = totalAmountPlayers.innerText;
    const totalAmountPlayersNumber = parseFloat(totalAmountPlayersString);

    if (totalAmountPlayersNumber > 0){
        const costManager = document.getElementById('cost-manager');
        const costManagerString = costManager.value;
        const costManagerNumber = parseFloat(costManagerString);
        costManager.value = '';
    
        const costCoach = document.getElementById('cost-coach');
        const costCoachString = costCoach.value;
        const costCoachNumber = parseFloat(costCoachString);
        costCoach.value = '';
    
        
    
        const totalFinal = totalAmountPlayersNumber + costManagerNumber + costCoachNumber;
        
        const totalFinalAmountDisplay = document.getElementById('total-amount-display');
        totalFinalAmountDisplay.innerText = totalFinal;
    }
    else{
        alert('Please choose players first and add budget for per player.')
    }

   
})
