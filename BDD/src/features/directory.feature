@directory-service 
Feature: DirectoryService
    Para administrar el directorio 
    como desarrollador 
    quiero asegurarme que las operaciones crud a travez de las api rest funcionen bien

    Scenario Outline: crear una entidad  
        Given una entidad <request> 
        When envio una solicitud POST a /directory
        Then se obtiene el codigo 201  
    
        Examples:
            | request                                                                                               |
            | {"id":1,"name":"Politico"} |
            | {"id":2,"name":"Administrativo"} |
            | {"id":3,"name":"Judicial"} |
            | {"id":4,"name":"Social"} |
            | {"id":5,"name":"Movilidad"} |
            | {"id":6,"name":"Otros"} |

    Scenario Outline: Obtener lista de entidades 
        Given un id de entidad <id> 
        When envio una solicitud GET a /directory
        Then se obtiene una respuesta <response>
    
       Examples:
        | id | response                                                                                                                                      |
        | 1  | {"id":1,"name":"Politico"} |
        | 2  | {"id":2,"name":"Administrativo"} |
        | 3  | {"id":3,"name":"Judicial"} |
        | 4  | {"id":4,"name":"Social"} |
        | 5  | {"id":5,"name":"Movilidad"} |
        | 6  | {"id":6,"name":"Otros"} |

    Scenario Outline: eliminar una entidad
        Given un id de entidad <id> 
        When envio una solicitud DELETE a /directory
        Then se obtiene el codigo 200
    
       Examples:
        | id |
        | 3  |