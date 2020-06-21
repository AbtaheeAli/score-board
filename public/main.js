let teamOne = 0
let teamTwo = 0

function handleAddingPointsTeamOne() {
  const valueCount = document.querySelector('.teamOneScore')
  if (teamOne >= 21) {
    return
  }
  teamOne++
  if (teamOne >= 21) {
    const header = document.querySelector('h1')
    header.textContent = 'You are a Winner Team 1!'
  }
  valueCount.textContent = `${teamOne}`
}

function handleSubPointsTeamOne() {
  const valueCount = document.querySelector('.teamOneScore')
  teamOne--
  if (teamOne <= 0) {
    return
  }
  valueCount.textContent = `${teamTwo}`
}

function handleAddingPointsTeamTwo() {
  const valueCount = document.querySelector('.teamTwoScore')
  if (teamTwo >= 21) {
    return
  }
  teamTwo++
  if (teamTwo >= 21) {
    const header = document.querySelector('h1')
    header.textContent = 'You are a Winner Team 2!'
  }
  valueCount.textContent = `${teamTwo}`
}

function handleSubPointsTeamTwo() {
  const valueCount = document.querySelector('.teamTwoScore')
  teamTwo--
  if (teamTwo <= 0) {
    return
  }
  valueCount.textContent = `${teamTwo}`
}

function updateTeamOneName(event) {
  const teamOneLog = document.querySelector('.team1 h2')
  teamOneLog.textContent = event.target.value
}

function updateTeamTwoName(event) {
  const teamTwoLog = document.querySelector('.team2 h2')
  teamTwoLog.textContent = event.target.value
}

function updateButton(event) {
  const valueCountTeam1 = document.querySelector('.teamOneScore')
  const valueCountTeam2 = document.querySelector('.teamTwoScore')
  const header = document.querySelector('h1')
  header.textContent = 'My Score Board'
  teamOne = 0
  teamTwo = 0
  valueCountTeam1.textContent = `${teamOne}`
  valueCountTeam2.textContent = `${teamTwo}`
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

  const button = document.querySelector('.resetButton button')
  button.addEventListener('click', updateButton)
}
document.addEventListener('DOMContentLoaded', main)
