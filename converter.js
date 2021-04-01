module.exports = async function (context, myBlob) {
    context.log("Ajour d'un fichier dans images/")

    //context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");

    //Appel de ma librairie de génération de thumbnails
    const imageThumbnail = require('image-thumbnail');
    var nodemailer = require('nodemailer');
    //require('dotenv').config() //Azure gère le password

    //Ma variable d'entrée : myBlob
    //context.log('myBlob:', myBlob);


    var new_image = await imageThumbnail(myBlob);    
    
    //context.log('context:', new_image);

    //je met mon image dans ma variable de sortie : conext.bindings.outputBlob
    context.bindings.outputBlob = new_image;
    context.log("L'image a été uploadé dans imagesthumbnails/");

    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'simplon.devcloud@gmail.com',
          pass: process.env.GMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: 'simplon.devcloud@gmail.com',
        to: 'simplon.devcloud@gmail.com',
        subject: 'Thumbs Up !',
        text: "Nouveau thumbnail dans la bibliothèque Azure",
        attachments: [{
            filename: 'original.jpg',
            //chemin d'acces car "local"
            content: myBlob,  // path: myBlob <= à tester         
        },
        {  
            filename: 'thumbnail.jpg',
            //contenu car il est créé dans la fonction
            content: context.bindings.outputBlob,            
        }]
    };

    
    mail.sendMail(mailOptions);

};