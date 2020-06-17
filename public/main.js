let teamOne = 0
let teamTwo = 0
function handleAddingPointsTeamOne() {
  const valueCount = document.querySelector('.teamOneScore')
  teamOne++
  valueCount.textContent = `${teamOne}`
}

function handleSubPointsTeamOne() {
  const valueCount = document.querySelector('.teamOneScore')
  teamOne--
  valueCount.textContent = `${teamTwo}`
}

function handleAddingPointsTeamTwo() {
  const valueCount = document.querySelector('.teamTwoScore')
  teamTwo++
  valueCount.textContent = `${teamTwo}`
}

function handleSubPointsTeamTwo() {
  const valueCount = document.querySelector('.teamTwoScore')
  teamTwo--
  valueCount.textContent = `${teamTwo}`
}
const main = () => {
  const scoreAddTeamOne = document.querySelector('.team1 .add')
  const scoreAddTeamTwo = document.querySelector(' .team2 .add')
  scoreAddTeamOne.addEventListener('click', handleAddingPointsTeamOne)
  scoreAddTeamTwo.addEventListener('click', handleAddingPointsTeamTwo)
  const scoreSubTeamOne = document.querySelector(' .team1 .subtract')
  const scoreSubTeamTwo = document.querySelector('.team2 .subtract')
  scoreSubTeamOne.addEventListener('click', handleSubPointsTeamOne)
  scoreSubTeamTwo.addEventListener('click', handleSubPointsTeamTwo)
}
document.addEventListener('DOMContentLoaded', main)
