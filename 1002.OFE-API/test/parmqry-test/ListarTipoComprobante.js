const url = constantes.rutaBase + constantes.maestra;

/**
 * Testearemos que la url devuelva un status 200 
 */
describe("{\"titulo\": \"El servicio retorna estado 200 en el servicio listar tipo de comprobante\", \"backlog\": \"OFE-0501-0503\",  \"AsignarA\": \" "
         + constantes.renato + " \"}",()=>{
	it('', (done) => {
		chai.request(url)
			.get('/filtros?tabla=10007')
			.end( function(err,res){
				expect(res).to.have.status(200);
				done();
			});
	});
});

/**
 * Testearemos que el servicio devuelva mas de una serie en retenciones y q tenga las propiedades de _embedded, serieRedisesdd
 */
describe("{\"titulo\": \"El servicio retorna informacion en el servicio listar tipo de comprobante\", \"backlog\": \"OFE-0501-0503\",  \"AsignarA\": \" "
        + constantes.renato +"\"}",()=>{
	it('', (done) => {
		chai.request(url)
			.get('/filtros?tabla=10007')
			.end( function(err,res){
				expect(res.body).to.have.deep.property('_embedded').to.have.deep.property('maestraRedises').with.length.above(0);
				done();
			});
	});
});
