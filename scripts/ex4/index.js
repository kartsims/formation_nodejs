const request = require('request-promise-native')
const cheerio = require('cheerio')

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

  for (let nomCanton in resultat) {
    console.log(`Le prix record de transaction dans le canton de ${nomCanton} est de ${resultat[nomCanton]}`)
  }
}

request(process.argv[2])
  .then(retourRequete)
  .catch(err => {
    console.log('Erreur de requête')
    console.log(`${err.name} ${err.message}`)
  })
