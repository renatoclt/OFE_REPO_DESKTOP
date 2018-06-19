const url = constantes.rutaBase + constantes.series;

/**
 * Testearemos que la url devuelva un status 200 
 */
describe("{\"titulo\": \"El servicio retorna estado 200 en el servicio listar series \", \"backlog\": \"OFE-0247-0103\",  \"AsignarA\": \" "
		 + constantes.renato + " \"}",()=>{
	it('', (done) => {
		chai.request(url)
			.get('/filtros?id_entidad=4&id_tipo_comprobante=3&id_tipo_serie=0')
			.end( function(err,res){
				expect(res).to.have.status(200);
				done();
			});
	});
});

/**
 * Testearemos que el servicio devuelva mas de una serie en retenciones y q tenga las propiedades de _embedded, serieRedisesdd
 */
describe("{\"titulo\": \"El servicio retorna informacion  en el servicio listar series\", \"backlog\": \"OFE-0247-0103\",  \"AsignarA\": \" "
		+ constantes.renato +"\"}",()=>{
	it('', (done) => {
		chai.request(url)
			.get('/filtros?id_entidad=4&id_tipo_comprobante=3&id_tipo_serie=0')
			.end( function(err,res){
				expect(res.body).to.have.deep.property('_embedded').to.have.deep.property('serieRedises').with.length.above(0);
				done();
			});
	});
});
