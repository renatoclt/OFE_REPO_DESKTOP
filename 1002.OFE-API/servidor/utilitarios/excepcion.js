var fecha = LocalDateTime.now();
var excepcion ={
        NOT_FOUND:{
            "status": "NOT_FOUND",
            "timestamp": {
                "month": "",
                "year": fecha._date._year,
                "dayOfMonth": fecha._date._day,
                "dayOfWeek": "",
                "dayOfYear": '',
                "monthValue": fecha._date._month,
                "hour": fecha._time._hour,
                "minute": fecha._time._minute,
                "nano": fecha._time._nano,
                "second": fecha._time._second,
                "chronology": {
                    "id": "ISO",
                    "calendarType": "iso8601"
                }
            },
            "message": "[EXC.BD.QUE.NOE] error al consultar por documento a base de datos, recurso no encontrado",
            "errors": [
                "[EXC.BD.QUE.NOE] error al consultar por documento a base de datos, recurso no encontrado"
            ]
        }
    
} 
module.exports = excepcion;
