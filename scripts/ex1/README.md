# Exercice 1

## Objectif

**Construire un client web en NodeJS**

_Utiliser le module `request` pour télécharger le contenu d'une page web via la ligne de commande._

## Résultat attendu

```bash
$ node index.js
Fichier HTML téléchargé (57946 caractères)
```

Où 57946 est le nombre de caractères présent dans le code HTML de la page web demandée.

## Liens utiles

Page à télécharger : https://www.hausinfo.ch/fr/home/finances-impots/achat-vente/marche-immobilier.html

Module `request` : https://www.npmjs.com/package/request

Longueur d'une chaine de caractères : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length

## Indices

- On oubliera pas de créer un fichier `package.json`

- Pour une syntaxe plus claire, on préférera le module `request-promise-native` qui utilise les [`Promise`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

- La commande pour installer les packages est:

```bash
npm i request request-promise-native
```
