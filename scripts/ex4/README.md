# Exercice 4

## Objectif

**Faire un outil en ligne de commande en NodeJS**

_Utiliser la variable `process` pour exploiter les possibilités de la ligne de commande._

## Résultat attendu

```
$ node index.js https://www.hausinfo.ch/fr/home/finances-impots/achat-vente/marche-immobilier.html
Le prix record de transaction dans le canton de Suisse est de –
Le prix record de transaction dans le canton de Bâle est de 3'062'000 francs
Le prix record de transaction dans le canton de Berne est de 2'667'000 francs
Le prix record de transaction dans le canton de Genève est de 3'535'000 francs
Le prix record de transaction dans le canton de Lausanne est de 2'717'000 francs
Le prix record de transaction dans le canton de Zurich est de 3'907'000 francs
```

Où l'URL utilisée par le script est celle passée en ligne de commande (ne pas l'écrire en dur dans le script!)

## Liens utiles

Doc NodeJS pour `process`: https://nodejs.org/api/process.html#process_process


## Indices

- La variable `process` permet de récupérer les arguments passés au script

## Question bonus

Plutôt que de le passer directement en ligne de commande, reproduire l'exemple vu précédemment pour utiliser un prompt en ligne de commande à l'aide de [`readline`](https://nodejs.org/api/readline.html)

_Essayer de passer par la doc pour reproduire l'exemple plutôt que de consulter les slides!_

## Question bonus 2

Utiliser le module `commander` pour passer l'URL en argument.
