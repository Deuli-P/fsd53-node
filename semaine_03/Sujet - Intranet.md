# TP : Projet collaborateurs

Vous êtes en charge de développer la plateforme Intranet de votre société.

Cette plateforme, accessible uniquement en interne, doit permettre de retrouver des informations sur l'ensemble des collaborateurs.

## Stack technique

- Back-end : Node.js / Express / Mongo / Pug (ou autre moteur de template)
- Front-end : HTML, CSS, React/Angular si vous n'utilisez pas de moteur de template.

## Présentation du fonctionnement de la plateforme

### A. Utilisateur standard :

L'utilisateur doit pouvoir se connecter au système via son login et mot de passe (haché en base avec un algorithme de hachage récent et sécurisé. ) :

![](./images/connexion.png)

Une fois connecté, l'utilisateur arrive sur la page d'accueil qui lui présente un de ses collaborateurs au hasard :

![](./images/homepage.png)

Le bouton "_Dire bonjour à quelqu'un d'autre_" doit permettre d'afficher un autre collaborateur au hasard.

L'utilisateur peut via le menu se déplacer sur la page de listing des collaborateurs de la société. Les collaborateurs s'affichent sous forme de card, avec toutes leurs caractéristiques :

![](./images/liste-collaborateurs.png)

Cette page doit également permettre un affichage avec un système de filtres par **nom**, **localisation** et **catégorie** :

![](./images/liste-collaborateurs-filtres.png)


L'utilisateur doit également pouvoir accéder à une page de modification de ses informations personnelles (incluant le login/mot de passe) en cliquant sur son image de profil dans le header (vous gérez l'image avec une URL):

![](./images/modifier-profil.png)

Enfin, l'utilisateur doit pouvoir se déconnecter. Après déconnexion, aucune des pages précédentes (home, listing) ne sont accessibles.

### B. Administrateur :

L'administrateur est un utilisateur standard, disposant de privilèges supplémentaires. Il peut :

- Ajouter un nouveau collaborateur
- Modifier un collaborateur existant
- Supprimer un collaborateur existant

Dans sa barre de menu, il a accès à un lien pour **"Ajouter"** un nouveau collaborateur.

L'affichage d'une card d'un utilisateur lui propose aussi 2 boutons supplémentaires **"Éditer"** et **"Supprimer"** :

![](./images/liste-collaborateurs-admin.png)

La page d'ajout est un simple formulaire pour créer un nouveau collaborateur :

![](./images/ajout-collaborateur-admin.png)

**L'administrateur peut également lors de la modification d'un collaborateur lui assigner le rôle d'administrateur.**

-----

## Contraintes

Vous **devez** utiliser les éléments suivants :

- Express.js
- MongoDB + Mongoose


Le système d'authentification doit se faire soit via des **sessions** (avec `express-session`) ou soit via **JSON Web Token** (avec `jsonwebtoken`).

Pour ceux qui vont utiliser un framework front (React ou Angular)
Les appels API doivent être authentifiés :

- Dans le cas d'une session classique, il faudra penser côté client à transmettre les informations d'authentification avec les requêtes AJAX (`credentials: true`).
- Dans le cas de JSON Web Token, chaque requête authentifiée devra inclure le token dans le header HTTP `Authorization: Bearer <token>`

Le choix d'un framework CSS (Bootstrap / Tailwind) est totalement libre.



## Détails

Une base d'utilisateurs est déjà fournie avec l'énoncé (fichier `users.json`) afin que vous puissiez commencer à travailler avec des données. N'hésitez pas à consulter et analyser ces informations avant de démarrer.

La structure d'un collaborateur est la suivante :

```
id          -   Identifiant unique du collaborateur (ObjectID)
gender      -   Genre ("male" ou "female")
firstname   -   Prénom
lastname    -   Nom
email       -   Email pro
password    -   Mot de passe haché
phone       -   Numéro de la ligne directe
birthdate   -   Date de naissance
city        -   Ville où le collaborateur travaille
country     -   Pays où le collaborateur travaille
photo       -   Une URL valide vers une image en ligne
category    -   Service dans lequel travaille le collaborateur ("Marketing", "Client" ou "Technique")
isAdmin     -   Le collaborateur est un administrateur de la platforme (Boolean)
```

Pour votre information, le set de données fourni propose une liste de 42 utilisateurs. Pour faire vos tests, sachez que le mot de passe haché de chaque utilisateur correspond à la partie avant le `@` de son adresse email. Par exemple, pour l'utilisateur **Owen Lopez** :
```json
{
    …
    "email": "owen.lopez@example.com",
    "password": "$2b$10$IExQBXEZVifvfEOWvWsmO.4.OocNb7zQzurQerwOQh1tZx/3okSp.",
    …
}
```

Ce hash correspond à la chaîne `owen.lopez`.

Le seul administrateur du set par défaut est `admin@admin.com` avec le mot de passe `admin`.

- Vous devez faire un trello pour organiser/planifier les étapes de conception.

- Votre code sera versionné à l'aide de Git sur Github ou Gitlab.