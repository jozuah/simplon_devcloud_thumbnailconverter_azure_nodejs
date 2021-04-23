![enter image description here](https://qbd.eu/wp-content/uploads/azure-logo.png)
# Projet : Thumbnail converter

Dans le cadre de la formation MS CLOUD de l'école du numérique simplon.co, une fonction a été réalisé et mise en ligne via l'interface Azure Function. Cette fonction permet de réalisé une miniature d'une image lors de son chargement dans un espace de stockage Azure Storage. Suite à cet upload, un mail est envoyé contenant l'image et sa miniature.

![mail](https://github.com/jozuah/simplon_devcloud_thumbnailconverter_azure_nodejs/blob/master/images/mail.png)

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
L'image upload est récupéré, on réalise alors 
une miniature que l'on récupère en sortie et que l'on met dans un autre dossier de stockage. => imagesthumbnails/
![mon image](https://github.com/jozuah/simplon_devcloud_thumbnailconverter_azure_nodejs/blob/master/images/schema_integration.png)
![container](https://github.com/jozuah/simplon_devcloud_thumbnailconverter_azure_nodejs/blob/master/images/container.png)

 
## Etapes d'installation

1) Log in Azure Portal
2) Create a new resource gruop
3) Create a storage account with two containers => images/ and imagesthumbnails/
4) Create a new Function App
 => add a function with blob trigger storage and blob storage output
 => copy converter.js in the code+test section
6) Install all dependancies on kudu  https://docs.microsoft.com/fr-fr/azure/azure-functions/functions-reference-node?tabs=v2
 => use the package.json on the repository
 


## A propos

Dans ce dépot git vous trouverez :
index.js => Fonction qui permet de convertir une image et denvoyer un mail en local
converter.js => La meme fonction mise en ligne sur Azure Function

package.json => Package qui contient toutes les librairies nécessaires à la fonction

## Logs
Lors de l'exécution de la fonction on peut suivre la réalisation ou l'echec de l'opération.
![log](https://github.com/jozuah/simplon_devcloud_thumbnailconverter_azure_nodejs/blob/master/images/execution.png)

## Etat des lieux

A l'heure actuelle, l'envoie de mail ne fonctionne qu'en local. La fonction azure effectue bien la conversion en miniature mais l'envoie de mail échoue.
