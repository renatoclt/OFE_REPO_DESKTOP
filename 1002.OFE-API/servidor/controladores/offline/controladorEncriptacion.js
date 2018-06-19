var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'plasalle';
const someOtherPlaintextPassword = 'not_bacon';
const hash = '$2a$10$/Ker5Gd1L5TZtxqxHI3TPu2xhbmCK5EBqHxnfhHudVjWf8noVKF5O';
var controladorEncriptacion = function (ruta, rutaEsp) {
    router.get(ruta.concat('/'), async function (req, res) {
        try{    
            res.json({rpta: bcrypt.compareSync(myPlaintextPassword, hash)});
        }catch (e){
            console.log(e);
            res.json({count: 0});
        }
    });
}
module.exports = controladorEncriptacion;