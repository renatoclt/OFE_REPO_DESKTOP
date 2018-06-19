
const url = constantes.rutaBase + constantes.usuarios;

/**
 * El servicio retorna estado 200 en el servicio busca un usuario
 */
describe("{\"titulo\": \"El servicio retorna estado 200 en el servicio busca un usuario\", \"backlog\": \"OFE-0501-0502\",  \"AsignarA\": \" "
         + constantes.jose + " \"}",()=>{
	it('', (done) => {
		chai.request(url)
			.get('/buscar?nombreusuario=jose&password=12')
			.end( function(err,res){
				expect(res).to.have.status(200);
				done();
			});
	});
});

/**
 * El servicio retorna informacion en el servicio busca un usuario y que este tenga un id
 */
describe("{\"titulo\": \"El servicio retorna informacion en el servicio busca un usuario y que este tenga un id\", \"backlog\": \"OFE-0501-0502\",  \"AsignarA\": \" "
        + constantes.jose +"\"}",()=>{
	it('', (done) => {
		chai.request(url)
			.get('/buscar?nombreusuario=jose&password=12')
			.end( function(err,res){
				expect(res.body).to.have.deep.property('id');
				done();
			});
	});
});
