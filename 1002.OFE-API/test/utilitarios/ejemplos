//para validar es estado de un servicio
expect(res).to.have.status(200);
//para saber si tiene una propiedad el json de respuesta
expect(res.body).to.have.deep.property('_embedded')
//para saber si la propiedad es un arreglo de longitud mayor a 0
expect(res.body).to.have.deep.property('_embedded').to.have.deep.property('serieRedises').with.length.above(0);
//para saber si la propiedad es un arreglo de longitud mayor a 5
expect(res.body).to.have.deep.property('_embedded').to.have.deep.property('serieRedises').with.length.below(5);