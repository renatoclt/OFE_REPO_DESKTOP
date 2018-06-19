const url = constantes.rutaBase + constantes.sincronizacion;

/**
 * Testearemos que la url devuelva un status 200 
 */
describe("{\"titulo\": \"El servicio retorna estado 200 en el servicio listar elementos a sincronizar\", \"backlog\": \"OFE-0701-0102\",  \"AsignarA\": \" "
         + constantes.renato + " \"}",()=>{
	it('', (done) => {
		chai.request(url)
			.get('/filtros?idioma=1')
			.end( function(err,res){
				expect(res).to.have.status(200);
				done();
			});
	});
});

/**
 * Testearemos que el servicio devuelva mas de una elemento a sincronizar
 */
describe("{\"titulo\": \"El servicio retorna informacion en el servicio listar elementos a sincronizar\", \"backlog\": \"OFE-0701-0102\",  \"AsignarA\": \" "
        + constantes.renato +"\"}",()=>{
	it('/filtros?idioma=1', (done) => {
		chai.request(url)
			.get('/filtros?idioma=1')
			.end( function(err,res){
				expect(res.body).to.have.deep.property('_embedded').with.length.above(0);
				done();
			});
	});
});
