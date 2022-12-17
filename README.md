# Projet: SocaDev

Salut ! Je suis Grégory Saïmoen, 

Dans le cadre de l'Evaluation en Cours de Formation, il m'a était demandé de créer une application de type **CRUD** (Create, Read, Update, Delete).

Afin de vous présenter ce projet, je vais vous donner le contexte, l'installation de l'application et comment utiliser l'application.
Enfin, je vais vous expliquer le choix des technologies utilisées dans ce projet.

# Contexte

La société **SocaDev** vient de mettre en place l’accès aux données de son entreprise via l’utilisation d’API.

## Description du projet

L’entreprise vous demande de réaliser une interface sur la base des besoins fonctionnels suivants :

-   L’utilisateur peut **consulter** la liste des employés directement via l’index du site.
-   L’utilisateur peut **consulter** les informations d’un employé à l’aide d’une modale.
-   L’utilisateur peut **supprimer** un employé à l’aide d’une modale pour confirmer l’action.
-   L’utilisateur peut **ajouter** un employé à l’aide d’un formulaire présenté dans une modale.
-   L’utilisateur peut **rafraichir** la liste des employés à l’aide d’un bouton sur l’index du site.

# Installation
Avant d'utiliser l'application localement, il vous faut plusieurs outils. Vous trouverez dans ce chapitre les étapes à suivre pour mettre en place votre environnement de développement.

## Environnement de développement
Dans un premier temps, il vous faudra d'ailleurs installer un **éditeur de code**, **NodeJS** et **Git**, vous trouverez ci-dessous des liens, de site officiels, afin de vous permettre d'installer votre environnement développement.

https://code.visualstudio.com/download
https://nodejs.org/en/download/
https://git-scm.com/downloads

Il existe plusieurs outils disponible pour installer votre environnement de développement, je vous mets ceux que j'ai utilisé qui sont **gratuits**.

## Angular
Angular est un framework qui permet de mieux organisé le travail et permet aussi d'améliorer les performances de l'application. Pour l'installer veuillez utiliser la commande suivant via un terminal de commande

    npm install -g @angular/cli
Cette commande vous permettra d'installer les commandes utilisées pour chaque projet Angular.

## Récupération du projet

Dans un second temps, il vous faut copier le projet d'un repository GitHub, veuillez copier-coller le code ci-dessous via un terminal:

    git clone https://github.com/Saimoen/ECF3.git
Cette commande vous permettra de récupérer le projet disponible dans un repository GitHub.

## Les dépendances

Ensuite, il vous faut ouvrir le dossier téléchargé dans votre éditeur de code, une fois ouvert dans votre éditeur de texte vous pourrez lancer un terminal via cet outil. Veuillez entrez la commande suivante:

    npm install
Cette commande vous permettra d'installer les librairies utilisées lors de la conception du l'application


# Lancement de l'application

Si vous avez bien suivi les étapes précédentes, voilà votre environnement de développement prêt à être utilisé.

## ng serve

Votre projet est ouvert dans VS Code, il vous faut ouvrir le terminal de VS Code et entrer la commande

    ng serve
Cette commande va vous permettre de compiler les librairies d'Angular et  de lancer l'application en local. Il vous suffira d'ouvrir votre navigateur internet et vous trouverez l'application via l'URL suivante: http://localhost:4200


# Fonctions de l'application


## Ajouter un utilisateur
Cliquer sur le bouton "Add", cette action ouvrira une modale qui contient un formulaire. Remplissez le formulaire et cliquer sur "Add", ensuite fermer la modale et rafraîchisser la liste, avec le bouton "Refresh".


## Modifier un utilisateur

Cliquer sur le bouton "Edit", cette action ouvrira une modale qui contient un formulaire. Remplissez le formulaire et cliquer sur "Save changes", ensuite fermer la modale et rafraîchisser la liste,  avec le bouton "Refresh".


## Supprimer un utilisateur

Cliquer sur le bouton "Delete", cette action ouvrira une modale qui contient les ID des utilisateurs. Sélectionner quelle ID a supprimé et cliquer sur "Delete", ensuite fermer la modale et rafraîchisser la liste,  avec le bouton "Refresh".


# Choix technologique

Je vais vous présenter les différents choix des technologies/librairies que j'ai décidé d'utiliser pour la conception de l'application.

## Angular

J'ai utilisé le framework Angular pour cette application car c'était une solution qui permettait à la fois de répondre aux besoins de SocaDev. Cette solution permettait aussi d'avoir de meilleures performances au niveau des appel HTTP.

## BootStrap

Ayant utilisé ce framework CSS, BootStrap est très pratique que ce soit pour alléger mes fichiers CSS ou bien utiliser les composants que le framework propose.


# Ce que j'ai appris

Lors de la conception de l'application j'ai rencontré beaucoup d'erreurs dont je ne savais pas la résolution. En cherchant les erreurs sur Internet je suis tombé sur des documentations.


##  Forms Module

A commencer par comment gérer les formulaires sur Angular. Afin d'ajouter les fonctions d'ajout et de modification il fallait fournir un formulaire à l'utilisateur, il fallait donc que j'importe la librairie FormsModule afin de récupérer les données que l'utilisateur aura rentrer. 

## Modal

Ils existent tellement de composants avec BootStrap: les boutons, les tableaux, les navbar.. Mais pour ce projet je me suis penché sur les **modales**, ce fut la première fois que j'utilisais les modales via BootStrap et me souviendrai qu'il existe des modales sous ce framework CSS 
