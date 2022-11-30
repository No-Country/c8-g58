const nodemailer = async (req, res) =>{
    const { email } = req.body;
    if (email == "") {
      alert("Por favor, ingresa tu email")
    } else{
      console.log(email);
      async function envioMail(){
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.USEREMAIL,
            pass: process.env.PASSMAIL
          }
        });
        let envio = await transporter.sendMail({
          from: process.env.USEREMAIL,
          to: `${email}`,
          subject:"Night out newsletter",
          html:"Gracias por suscribirte a nuestro newsletter, se vienen novedades interesantes!"
        });
      }
      envioMail()
    }
  };

  module.exports = {
    nodemailer
  }