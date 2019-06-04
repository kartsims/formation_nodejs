# Exercice 2

## Objectif

**Construire un parseur HTML en NodeJS**

_Utiliser le module `cheerio` pour extraire le contenu "brut" de cette page web._

## Résultat attendu

```
$ node index.js
Le prix record de transaction dans le canton de Suisse est de –
Le prix record de transaction dans le canton de Bâle est de 3'062'000 francs
Le prix record de transaction dans le canton de Berne est de 2'667'000 francs
Le prix record de transaction dans le canton de Genève est de 3'535'000 francs
Le prix record de transaction dans le canton de Lausanne est de 2'717'000 francs
Le prix record de transaction dans le canton de Zurich est de 3'907'000 francs
```

Où les informations sont extraites du premier tableau "Maisons individuelles".

## Liens utiles

Documentation pour `cheerio` : https://cheerio.js.org/


## Indices

- Trouver un élément HTML d'après sa classe CSS `$('.class-css').first()`

- Faire une boucle dans un ensemble d'éléments HTML avec `.each` ([doc](https://www.npmjs.com/package/cheerio#each-functionindex-element-))

- On affichera les résultats à l'aide d'une boucle Javascript `for`
