var controladorUsuario = function (ruta) {
  
  router.get(ruta.concat('/'), function (req, res, next) {
    myObjectArray = [
      {
        id: 1,
        nombreusuario: "gmendez",
        nombrecompleto: "Gabriela Mendez",
        contrasenha: "ebiz2017",
        perfil: "comprador",
        url_image: "assets/img/faces/gmendez.jpg",
        token: "comprador1",
      },
      {
        id: 2,
        nombreusuario: "atafur",
        nombrecompleto: "Antonio Tafur",
        contrasenha: "ebiz2017",
        perfil: "proveedor",
        url_image: "assets/img/faces/atafur.jpg",
        token: "proveedor1",
      },
      {
        id: 3,
        nombreusuario: "jrojas",
        nombrecompleto: "José Rojas",
        contrasenha: "Ebiz2017",
        perfil: "comprador",
        url_image: "assets/img/faces/jrojas.jpg",
        token: "comprador1",
      },
      {
        id: 4,
        nombreusuario: "proveedor",
        nombrecompleto: "Usuario Proveedor",
        contrasenha: "Ebiz2017",
        perfil: "proveedor",
        url_image: "assets/img/faces/proveedor.jpg",
        token: "proveedor1",
      }
    ];

    res.json(myObjectArray);
  });

  router.post(ruta.concat('/'), function (req, res, next) {

    myObjectArray = [
      {
        id: 1,
        nombreusuario: "ffff",
        nombrecompleto: "Gabriela Mendez",
        contrasenha: "ebiz2017",
        perfil: "comprador",
        url_image: "assets/img/faces/gmendez.jpg",
        token: "comprador1",
      },
      {
        id: 2,
        nombreusuario: "atafur",
        nombrecompleto: "Antonio Tafur",
        contrasenha: "ebiz2017",
        perfil: "proveedor",
        url_image: "assets/img/faces/atafur.jpg",
        token: "proveedor1",
      },
      {
        id: 3,
        nombreusuario: "jrojas",
        nombrecompleto: "José Rojas",
        contrasenha: "Ebiz2017",
        perfil: "comprador",
        url_image: "assets/img/faces/jrojas.jpg",
        token: "comprador1",
      },
      {
        id: 4,
        nombreusuario: "proveedor",
        nombrecompleto: "Usuario Proveedor",
        contrasenha: "Ebiz2017",
        perfil: "proveedor",
        url_image: "assets/img/faces/proveedor.jpg",
        token: "proveedor1",
      }
    ];

    res.json(myObjectArray);
  });
}

module.exports = controladorUsuario;
