var controladorPerson = function(ruta){

    router.get(ruta.concat('/'), function(req, res, next) {
        var personSchema = {
            "name": "Person",
            "description": "This JSON Schema defines the paramaters required to create a Person object",
            "properties": {
                "name": {
                    "title": "Name",
                    "description": "Please enter your full name",
                    "type": "string",
                    "maxLength": 30,
                    "minLength": 1,
                    "required": true
                },
                "jobTitle": {
                    "title": "Job Title",
                    "type": "string"
                },
                "telephone": {
                    "title": "Telephone Number",
                    "description": "Please enter telephone number including country code",
                    "type": "string",
                    "required": true
                }
            }
        };
     
        res.json(personSchema, [
            { rel: "self", method: "GET", href: 'http://127.0.0.1:3000/v1/hateoas' },
            { rel: "create", method: "POST", title: 'Create Person', href: 'http://127.0.0.1:3000/v1/hateoas/person' }
        ]);
    });
    
    router.post(ruta.concat('/person'),function(req, res, next){
        res.json({"saludo":"hola mundo"}); 
    });
};

module.exports = controladorPerson;
