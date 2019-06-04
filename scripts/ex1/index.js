const request = require('request-promise-native')

const PAGE_URL = 'https://www.hausinfo.ch/fr/home/finances-impots/achat-vente/marche-immobilier.html'

function retourRequete (body) {
  console.log('Fichier HTML téléchargé (%s caractères)', body.length)
}

request(PAGE_URL)
  .then(retourRequete)
  .catch(err => {
    console.log('Erreur de requête')
    console.log(`${err.name} ${err.message}`)
  })
