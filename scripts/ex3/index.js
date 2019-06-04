const request = require('request-promise-native')
const cheerio = require('cheerio')
const express = require('express')

const PAGE_URL = 'https://www.hausinfo.ch/fr/home/finances-impots/achat-vente/marche-immobilier.html'

// traitement du retour de la recherche
function retourRequete (body) {
  const $ = cheerio.load(body)

  const tableau = $('.content-table').first()

  const lignes = $('tbody tr', tableau)

  let resultat = {}

  lignes.each(function (i, ligne) {
    const colonnes = $('td', ligne)

    let nomCanton
    colonnes.each(function (j, colonne) {
      if (j === 0) {
        nomCanton = $(this).text()
      }
      if (j === 6) {
        resultat[nomCanton] = $(this).text()
      }
    })
  })

  return resultat
}

// instanciation de Express
const app = express()

// on définit ce qui apparaitra sur la page d'accueil de notre serveur
app.get('/', function (req, res) {
  request(PAGE_URL)
    .then(retourRequete)
    .catch(err => {
      console.log('Erreur de requête')
      console.log(`${err.name} ${err.message}`)
    })
    .then(resultat => {
      let text = ''
      for (let nomCanton in resultat) {
        text += `Le prix record de transaction dans le canton de ${nomCanton} est de ${resultat[nomCanton]}<br>`
      }
      res.send(text)
    })
})

// démarrage du serveur web
app.listen(8080, function (err) {
  if (err) {
    throw err
  }
  console.log('Serveur prêt: http://127.0.0.1:8080')
})
