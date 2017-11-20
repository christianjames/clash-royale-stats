# clash-royale-stats
Clash Royale Stats Clan

Link: https://statsroyale.com/clan/289J0CQ8

Open F12 (Developer Tools) and execute de following code.


```
document.querySelector('.clan__refresh').innerHTML = ''
if (!document.querySelector('.clan__clanName .datetime')) {
  var newElement = document.createElement('span')
  newElement.className = 'datetime'
  document.querySelector('.clan__clanName').appendChild(newElement)
}

document.querySelector('.clan__clanName .datetime').innerHTML = new Date().toLocaleString()

document.querySelectorAll('.clan__table .clan__rowContainer').forEach(function (el) {
  el.style.height = '30px'
  el.style.borderColor = '#CCC'
  var elementDonation = el.querySelector('.clan__donation')
  var parentElementDonation = elementDonation.parentElement

  var elementCrowns = el.querySelector('.clan__crown')
  var parentElementCrowns = elementCrowns.parentElement

  var trophies = elementDonation.innerText
  var crowns = elementCrowns.innerText

  var colorDonation = ''
  if (trophies >= 600) {
    colorDonation = '0,128,0'
  }
  else if (trophies >= 200 && trophies < 600) {
    colorDonation = '255,255,0'
  }
  else if (trophies < 200) {
    colorDonation = '255,0,0'
  }
  parentElementDonation.style.background = 'rgba(' + colorDonation + ', 1)'

  var colorCrowns = ''
  if (crowns >= 30) {
    colorCrowns = '0,128,0'
  }
  else if (crowns >= 10 && crowns < 30) {
    colorCrowns = '255,255,0'
  }
  else if (crowns < 10) {
    colorCrowns = '255,0,0'
  }
  parentElementCrowns.style.background = 'rgba(' + colorCrowns + ', 1)'

})
```
