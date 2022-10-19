// function for Player

function addToSelectedFive(playerName, playerNumber) {
    if (player.length > 5) {
        alert('You have reached the maximum number!!!');
    }
    else{
        const creatList = document.createElement('p');
    creatList.classList.add('text-center','my-2');
    const addPlayerName = document.createTextNode(playerNumber + '. ' + playerName);
    creatList.appendChild(addPlayerName);
    document.getElementById('add-list').appendChild(creatList);
    }
}

function disableSelectButton(playerId) {
    const selectedButton = document.getElementById(playerId);
    selectedButton.disabled = true;
    selectedButton.style.backgroundColor = 'rgb(36, 38, 38)';
}

function addPlayer(playerId, playerName) {
    player.push(playerName);
    disableSelectButton(playerId)
    addToSelectedFive(playerName, player.length);
}




// Player adding to list

const player = [];

document.getElementById('player-1').addEventListener('click', function () {
    const playerName = document.getElementById('playerName-1').innerText;
    addPlayer('player-1', playerName);
})
document.getElementById('player-2').addEventListener('click', function () {
    const playerName = document.getElementById('playerName-2').innerText;
    addPlayer('player-2', playerName);
})
document.getElementById('player-3').addEventListener('click', function () {
    const playerName = document.getElementById('playerName-3').innerText;
    addPlayer('player-3', playerName);
})
document.getElementById('player-4').addEventListener('click', function () {
    const playerName = document.getElementById('playerName-4').innerText;
    addPlayer('player-4', playerName);
})
document.getElementById('player-5').addEventListener('click', function () {
    const playerName = document.getElementById('playerName-5').innerText;
    addPlayer('player-5', playerName);
})
document.getElementById('player-6').addEventListener('click', function () {
    const playerName = document.getElementById('playerName-6').innerText;
    addPlayer('player-6', playerName);
})

// Calculate Player cost

let calculatePlayercost = 0;
document.getElementById('calculate-player-cost').addEventListener('click', function () {
    const playerCostFeild = document.getElementById('per-player-cost');
    const playerCostString = playerCostFeild.value;
    const playerCost = parseFloat(playerCostString);
    playerCostFeild.value = '';
    if (!playerCost || playerCost < 0) {
        alert('Please provide a valid number!!!');
    }
    else {
        if (player.length <= 5) {
            calculatePlayercost = playerCost * (player.length);
        }
        else {
            calculatePlayercost = playerCost * (player.length - 1);
        }
        const calculateCost = document.getElementById('player-total-cost');
        calculateCost.innerText = calculatePlayercost;
    }

})

// Calculate Total Cost

document.getElementById('calculate-total-cost').addEventListener('click', function () {
    if (calculatePlayercost === 0) {
        alert('Please calculate player cost frist!!!')
        return
    }
    else {
        const managerCostField = document.getElementById('manager-cost');
        const managerCostFieldString = managerCostField.value;
        const managerCost = parseFloat(managerCostFieldString);
        managerCostField.value = '';
        const coachCostField = document.getElementById('coach-cost');
        const coachCostFieldString = coachCostField.value;
        const coachCost = parseFloat(coachCostFieldString);
        coachCostField.value = '';
        if (!managerCost || !coachCost) {
            alert('Enter a valid number');
        }
        else if (managerCost < 0 || coachCost < 0) {
            alert('Cost cannot be nagative!!!')
        }
        else {
            const calculatedCost = managerCost + coachCost;
            const totalCalcutatedCost = calculatedCost + calculatePlayercost;
            const total = document.getElementById('total');
            total.innerText = totalCalcutatedCost;
        }
    }

})