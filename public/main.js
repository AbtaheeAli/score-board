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

function updateTeamOneName(event) {
  console.log('tacotuse')
  const teamOneLog = document.querySelector('.team1 h2')
  teamOneLog.textContent = event.target.value
}

function updateTeamTwoName(event) {
  const teamTwoLog = document.querySelector('.team2 h2')
  teamTwoLog.textContent = event.target.value
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

  const teamOneinput = document.querySelector('.team1 input')
  teamOneinput.addEventListener('input', updateTeamOneName)

  const teamTwoinput = document.querySelector('.team2 input')
  teamTwoinput.addEventListener('input', updateTeamTwoName)
}
document.addEventListener('DOMContentLoaded', main)
