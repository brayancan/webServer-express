
const express = require("express");
const app = express();

const hbs = require("hbs");
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) ) // Llamar una carpeta, todo los archivos que contenga

// Express HBS
hbs.registerPartials(__dirname + "/views/partial");
app.set("view engine", "hbs");



app.get("/",  (req, res) =>  {
//   res.send('Hola mund');

    res.render('home', {
        nombre: 'bRayan Can',
        
    });

});
app.get("/about", (req, res) => {
  //   res.send('Hola mund');

  res.render("about", {
    anio: new Date().getFullYear()
  });
});

app.listen(port, () => {
    console.log(`Escuhando peticiendo en el puerto 3000 ${ port }`);
});
