import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Este es un endpoint hecho con express");
});

//endpoint con parametro
app.get("/api/user/:id", (req, res) => {
  //destructuracion
  const { id } = req.params;
  res.json({ message: `El usuario con id ${id} es Pepito` });
});

app.get("/api/search", (req, res) => {
  const { name, lastname } = req.query;
  res.json({
    firstName: name,
    lastname,
  });
  //http://localhost:5000/api/search?name=Lucia&lastname=Acuña
});

//Endpoint POST
app.post("/api/user", (req, res) => {
  const { name, email } = req.body;
  res.json({ mensaje: "Usuario Creado", data: { name, email } });
});

//inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
