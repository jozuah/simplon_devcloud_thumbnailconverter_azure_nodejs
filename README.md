![enter image description here](https://qbd.eu/wp-content/uploads/azure-logo.png)
# Projet : Thumbnail converter

Dans le cadre de la formation MS CLOUD de l'école du numérique simplon.co, une fonction a été réalisé et mise en ligne via l'interface Azure Function. Cette fonction permet de réalisé une miniature d'une image lors de son chargement dans un espace de stockage Azure Storage. Suite à cet upload, un mail est envoyé contenant l'image et sa miniature.



## Technologie utilisées
**JavaScript**

=> La fonction

=> Les librairies

``` npm install image-thumbnail```

``` npm install nodemailer ```

**Microsoft Azure** 

=> Azure Function

=> Azure Storage



## Schéma d'intégration de la fonction

La fonction se déclenche quand un fichier est upload sur un dossier situé dans l'espace de stockage. => images/
L'image upload est récupéré, on réalise alors une miniature que l'on récupère en sortie et que l'on met dans un autre dossier de stockage. => imagesthumbnails/
 

## A propos

Dans ce dépot git vous trouverez :
index.js => Fonction qui permet de convertir une image et denvoyer un mail en local
converter.js => La meme fonction mise en ligne sur Azure Function

package.json => Package qui contient toutes les librairies nécessaires à la fonction
