const app = require("express")();
const nodemailer = require("nodemailer")

app.get("/",(req,res)=>{
    res.status(200).send("hello")
})
app.get("/send",(req,res)=>{
    let transporter = nodemailer.createTransport({
        host: "mail.coursecleared.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "goldline@coursecleared.com", // generated ethereal user
          pass: "Mukundijoe254", // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
          }
      });

      let info ={
        from: '"Goldline" <goldline@coursecleared.com>', // sender address
        to: "joekingsleymukundi@gmail.com", // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      };

      transporter.sendMail(info,(err,data)=>{
          if (err) {
              console.log(err)
          } else {
              res.send("success")
          }
      })

})
app.listen(3000,()=>console.log("we are live"))