Siret Generator
===============

Ce programme est un générateur de numéro d'identification SIRET (SIREN + NIC).
Il fonctionne sous NodeJS en ligne de commande.

# Installation
Ce programme nécessite l'installation de [Node.JS](https://nodejs.org/en/). Il utilise également le module [cmd-conf](https://www.npmjs.com/package/cmd-conf).
Une fois Node.JS installez ouvrez une ligne de commande dans le dossier de l'application siret-generator et lancez la commande `npm install`.

# Options
Le programme prend 2 options :
 - -s suivi d'un numéro SIREN (complet ou non)
 - -n suivi d'un numéro NIC (complet ou non)
 
Si les numéro fourni sont complet, leur validité sera vérifiées. En cas de succès, ils seront utilisé pour généréle le numéro SIRET.

Si les numéro fourni sont incomplet, il seront complété si besoin par des 0 à gauche puis la clef de luhn (le dernier chiffre à droite) sera calculé pour valider le numéro SIRET.

# Exemples

### Génération d'un numéro SIRET aléatoire
```
> node index.js
286970447 - 04782
```

### Génération d'un numéro SIRET avec base pédéfinie
```
> node index.js -s 12345678 -n 1234
123456782 - 12346
```

### Génération de plusieur NIC pour un même SIREN
```
> node index.js -s 123456782 -n 1
123456782 - 00010
> node index.js -s 123456782 -n 2
123456782 - 00028
```
 
