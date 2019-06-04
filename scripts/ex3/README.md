# Exercice 3

## Objectif

**Construire un serveur web en NodeJS**

_Utiliser le module `express` pour afficher une page web._

## Résultat attendu

Je tape http://127.0.0.1:8080 dans mon navigateur, et je vois affiché:

```
Le prix record de transaction dans le canton de Suisse est de –
Le prix record de transaction dans le canton de Bâle est de 3'062'000 francs
Le prix record de transaction dans le canton de Berne est de 2'667'000 francs
Le prix record de transaction dans le canton de Genève est de 3'535'000 francs
Le prix record de transaction dans le canton de Lausanne est de 2'717'000 francs
Le prix record de transaction dans le canton de Zurich est de 3'907'000 francs
```

## Liens utiles

Guide de démarrage pour `express` : https://expressjs.com/fr/starter/hello-world.html


## Indices

- Dans l'adresse http://127.0.0.1:8080, `8080` correspond au numéro de port sur lequel sera disponible le serveur web
- Ajouter `<br>`  à la fin d'une ligne permet de faire un retour à la ligne en HTML
- Le script se déroule de la façon suivante:
  1. Mise en place du serveur web (on écoute sur le port 8080)
  2. Lorsque je reçois un appel, je lance le parsing des prix:
  3. Je vais chercher la page web
  4. Je parse pour en sortir les résultats
  5. Je renvoie les résultats à l'internaute qui a interrogé mon serveur

## Question bonus

Modifier le script pour faire une "mise en cache" en allant chercher la valeur des prix au moment du démarrage du serveur.
