const imageThumbnail = require('image-thumbnail');
const fs = require("fs");
var nodemailer = require('nodemailer');
require('dotenv').config()



async function transform(){
    try {
        const my_image = 'resources/images/lol.jpg'
        const thumbnail = await imageThumbnail(my_image);
        var real_name = my_image.substr(0, my_image.indexOf('.'));
        console.log(real_name)
        const thumbnail_name = real_name + '_thumb.jpg'
        console.log(thumbnail_name)
        fs.writeFileSync(thumbnail_name, thumbnail);
        send_thumb_mail(my_image,thumbnail)
    } catch (err) {
        console.error(err);
    }
}

function send_thumb_mail(my_pic, my_thumb){
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
            path: my_pic,           
        },
        {   
            filename: 'thumbnail.jpg',
            //contenu car il est créé dans la fonciton
            content: my_thumb,            
        }]
    };

    mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

}

transform()


