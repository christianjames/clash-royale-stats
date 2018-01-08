document.querySelector('.header').remove()
document.querySelector('.clan__refresh').remove()
document.querySelector('.clan__filters').remove()
document.querySelector('.footer').remove()

if (!document.querySelector('.clan__clanName .datetime')) {
  var newElement = document.createElement('span')
  newElement.className = 'datetime'
  document.querySelector('.clan__clanName').appendChild(newElement)
}

var newColumn = document.createElement('div')
newColumn.className = 'legenda'
document.querySelector('.clan__donationsMetric').parentElement.appendChild(newColumn)


var colunaLegenda = '<p style="font-weight: bold; margin: 0 0 5px 0;">Legenda</p>';
colunaLegenda += '<p style="font-weight: bold; background: green; padding: 5px; margin: 0;">Verde - Acima da meta </p>'
colunaLegenda += '<p style="font-weight: bold; background: yellow;  padding: 5px; margin: 0;">Amarelo - Na meta </p>'
colunaLegenda += '<p style="font-weight: bold; background: red;  padding: 5px; margin: 0;">Vermelho - Abaixo da meta</p>'
document.querySelector('.legenda').innerHTML = colunaLegenda;
document.querySelector('.clan__clanName .datetime').innerHTML = new Date().toLocaleString()

document.querySelectorAll('.clan__table .clan__rowContainer').forEach(function (el) {
  el.style.height = '30px'
  el.style.borderColor = '#CCC'
  var elementDonation = el.querySelector('.clan__donation')
  var parentElementDonation = elementDonation.parentElement

  var elementCrowns = el.querySelector('.clan__crown')
  var parentElementCrowns = elementCrowns.parentElement

  var elementRole = el.querySelector('.clan__memberRoleInner')
  var parentElementRole = elementRole.parentElement

  var role = elementRole.innerText
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

  elementRole.innerText = role.replace('Elder', 'Ancião').replace('Leader', 'Líder').replace('Co-leader', 'Colíder').replace('Member', 'Membro')

})
