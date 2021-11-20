# Traduire Server Analytics
### 🧪 Vous souhaitez traduire le bot dans votre propre langue ? Vous êtes au bon endroit !
**Nous avons besoin de contributeurs,** pour permettre au bot d'être utilisé par des communautés du monde entier, alors avant de commencer, n'hésitez pas à suivre ce petit guide rapide, qui va aborder tout ce que vous devez savoir sur les **traductions** au sein de Server Analytics.

### 📜 Plan :
- Conventions et standards de traduction
- Comment publier ses modifications ?
- Utiliser le générateur de language

## 🎨 Conventions et standards de traduction
### Conserver le format d'origine
Un point très important, et essentiel au niveau de l'utilisation du bot, est la conservation du formatage du texte, mais également l'implémentation de variables.

**Ainsi; voici quelques exemples :**
- `Texte **en gras**` => `**Bold** text`
- `**Combinaison de __formatage__**` => `**__Formating__ combinaison**`
- `**Messages envoyés :** {messages}` => `**Messages sent:** {messages}`

En bref, **gras**, *italique*, souligné, `code` et bien plus doivent être conservés !

### Variables
Vous trouverez partout dans le code des textes entourés de `{}`, il s'agit de **variables**.
Ne traduisez **SURTOUT PAS** leur contenu !

Vous pouvez imaginer remplacer ces variables par la valeur qu'ils affichent, par exemple `{messages}` est habituellement remplacé par un nombre de messages.

### Les zones à ne pas traduire
Vous retrouverez aussi des zones à **NE PAS TRADUIRE**, les objets à ne pas traduire commencent toujours par un `_` et leur nom est en majuscule, par exemple :

```js
lang = {
    _SYSTEM_VARIABLES: { // A ne pas traduire !
        ...
    }
}
```


## 📊 Comment publier ses modifications ?
Si vous n'avez jamais utilisé github, ça peut paraitre assez complexe, et dans l'absolu.. ça l'est. Mais ce tuto assez court devrait vous donner les bases nécessaires pour publier votre première contribution au bot !

> **Remarque:** Vous souhaitez créer un language qui ne figure pas ici ? Celui-ci va devoir être **généré** à l'aide de notre **générateur** de langue. Naviguez jusqu'à la section du dessous, dédiée à l'installation du générateur, ou demandez sur notre serveur Discord dans le salon **traduction** !

### Tout simplement, à la main :
Sélectionnez le fichier que vous souhaitez modifier, prenons par exemple le fichier `en.js`, vous l'ouvrez directement sur ce site et appuyez sur l'outil "Modifier", comme détaillé sur l'image :

![Sélectionner l'icone d'édition](https://i.imgur.com/HAVEprX.png)

Vous allez par la suite pouvoir **faire vos changements** et traduire le fichier en question. Une fois cette étape terminée, **détaillez** ce que vous avez modifié et enfin, vous pouvez appuyer sur **Propose changes** :
 
![Publier les modifications](https://i.imgur.com/g8IXkHl.png)

Après avoir cliqué, vous arriverez sur une page; sur celle-ci, vous devez simplement cliquer sur le bouton vert demandant de **Créer une Pull Request**.

![Créer une Pull Request](https://i.imgur.com/3Qw1XpQ.png)

Et enfin, une fois votre **PR** (pull request) créee, il ne vous reste plus qu'à attendre l'approbation d'un administrateur, et vos modifications intègreront le bot ! Un grand merci par avance à tous les contributeurs.

## 📟 Comment utiliser le générateur de langue ?
---
### Présentation
Nous avons également placé à votre disposition, un générateur de langue qui peut-être retrouvé dans le dossier `fileGenerator`, celui-ci permet de mettre à jour les fichiers de langues qui ne comprennent pas tous les nouveaux textes ajoutés et retirés. 

![Générateur en fonctionnement](https://i.imgur.com/AUaVbWz.png)
*Image du générateur en fonctionnement*
### Installation
L'instalation demande quelques connaissances en **GitHub**, en **Node.js** et en **NPM**, mais elles ne sont pas nécessaires *(cependant ça va demander de se dépatouiller avec le max d'infos que je donne)* :

1. Installer node.js (version 12 et ultérieur)
2. Cloner le repository sur votre machine avec `git clone https://github.com/Server-Analytics/languages.git` *(optionel, vous pouvez aussi télécharger le zip, mais le code ne sera pas entretenu)*
3. Ouvrir l'invite de commande, et se déplacer dans le dossier `fileGenerator`
4. Taper `npm i`, et attendre l'installation des dépendances
5. Et enfin, vous pouvez taper `node index.js` pour lancer le générateur ! 

### Utilisation
L'utilisation est plutot simple, et *normalement* intuitive.
Au lancement de l'application node, le programme vous demandera **Quel language souhaitez vous mettre à jour ou créer ?** Vous pouvez alors taper le CODE PAYS à deux lettres de la langue que vous souhaitez mettre à jour, si aucun fichier langue n'existe, le programme se chargera de le créer.

Une fois complété, vous pouvez appuyer sur **Entrer**, et vous devriez voir une liste d'éléments se dérouler *(comme sur l'image du dessus)*, jusqu'à ce que s'affiche un message de confirmation.

**Vous pouvez d'ailleurs consulter la liste des éléments qui sont comparés.** Ils sont composés de :
* `Entry name`, nom de "l'entrée", il s'agit du plus haut parent qui est en train d'être analysé *(habituellement le nom de la commande)*
* `Object path`, le chemin d'accès de l'objet, il permet d'identifier la ligne de texte qui est traduite. Chaque parent est séparé par un `.` (ex. `set.reset.embed_title` à pour parent `reset` qui lui-même a `set` comme parent).
* **VERT ou ROUGE**, ce code couleur représente le résultat de l'analyse, si le champ à été créé, alors l'`Object path` sera affiché en **ROUGE**, s'il existait déjà, celui-ci sera affiché en **VERT**.

> **Remarque :** La suppression de champs obsolète n'est pas encore pris en charge, mais arrivera plus tard.

Vous pouvez également consulter l'objet `_FILE_UPDATES_INFO` qui contient toutes les infos de génération du fichier, par exemple la date de la **dernière génération** ou encore la **version du générateur** sous laquelle celle-ci s'est effectuée.

### Utiliser le fichier .diff
Le générateur va aussi créer un fichier en `.diff`, celui-ci est important car il contient le chemin d'accès de tous les nouveaux objets !

L'intérêt de les partager permet aux traducteurs de savoir où se situent les nouveaux champs à traduire, ce qui peut leur être très pratique, alors essayez d'envoyer ce fichier sur notre serveur Discord, de sorte à ce que les autres contributeurs puissent facilement se repérer :)

**Exemple de contenu d'un fichier .diff :**
```diff
+ general.command_maintenance_lagprv_text
+ general.command_maintenance_text_3
+ general.command_maintenance_details
+ help.help_embed_title
+ help.help_embed_field1_name
+ help.help_embed_field1_content
```
*On peut par exemple lire ici que le titre de l'embed de la commande `help` à été créé et nécessite d'être traduit !*

> **Remarque :** Si aucun fichier .diff n'a été créé, c'est que la génération n'a apportée aucun changement par rapport au fichier précédent (celui-ci était déjà à jour).

Si vous rencontrez un problème avec le générateur, rejoignez notre Serveur Discord pour nous en faire part !
