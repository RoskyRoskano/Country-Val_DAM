
function Inicio(){
    return {
        view:()=>[
                   m("div", {"class":"ui center aligned segment"},
                     m("h1", {"class":"ui header saludar"},
                        "Bienvenido Usuario"
                     )
                   ),
                   m("div", {"class":"ui grid"},
                     [
                       m("div", {"class":"three wide column"},
                         m("div", {"class":"ui center aligned segment"},
                           [
                             m("h3",
                               "Estadisticas Personales"
                             ),
                             m("h5", {"class":"puntosfacil"}),
                             m("h5", {"class":"puntosmedio"}),
                             m("h5", {"class":"puntosdificil"}),
                             m("h5", {"class":"puntosglobal"}),
                             m("br"),
                             m("button", {"class":"editarperfil boton"},
                               "Editar Perfil"
                             ),
                             m("br"),
                             m("br"),
                             m("p", {"class":"mensajeeditar"}),
                             m("button", {"class":"btncerrarsesion boton"},
                               "Cerrar Sesion"
                             )
                           ]
                         )
                       ),
                       m("div", {"class":"ten wide column"},
                         [
                           m("div", {"class":"ui center aligned segment"},
                             [
                               m("div", {"class":"two wide column"},
                               ),
                               m("div", {"class":"twelve wide column"},
                                 [
                                   m("h2",
                                     "Selecciona nivel de dificultad"
                                   ),
                                   m("button", {"class":"ui green inverted button btnnivelfacil"},
                                     "Nivel Fácil"
                                   ),
                                   m("button", {"class":"ui orange inverted button btnnivelmedio"},
                                     "Nivel Medio"
                                   ),
                                   m("button", {"class":"ui red inverted button btnniveldificil"},
                                     "Nivel Difícil"
                                   )
                                 ]
                               ),
                               m("div", {"class":"two wide column"},
                               )
                             ]
                           ),
                           m("div", {"class":"ui center aligned segment"},
                             [
                               m("h2",
                                 "Guía General"
                               ),
                               m("h3",
                                 "Bienvenido a CountryVal aquí te explicamos las reglas generales del juego!"
                               ),
                               m("p",
                                 " - Hay 3 niveles de dificultad: Fácil, Medio y Difícil"
                               ),
                               m("p",
                                 " - Solo hay paises de Europa y Transcontinentales que también pertenecen a Europa"
                               ),
                               m("p",
                                 " - Una barra baja ya puesta en el nombre del país representa un espacio"
                               ),
                               m("p",
                                 [
                                   " - En cada juego tienes 6 oportunidades para acertar el país, el ",
                                   m("b",
                                     "sistema de puntaje"
                                   ),
                                   " es el siguiente: ",
                                   m("br"),
                                   " - 0 Fallos: 60 puntos ",
                                   m("br"),
                                   " - 1 Fallo: 50 puntos ",
                                   m("br"),
                                   " - 2 Fallos: 40 puntos ",
                                   m("br"),
                                   " - 3 Fallos: 30 puntos ",
                                   m("br"),
                                   " - 4 Fallos: 20 Puntos ",
                                   m("br"),
                                   " - 5 Fallos: 10 puntos ",
                                   m("br"),
                                   " - 6 Fallo: Pierdes la partida, se guardan los puntos que has conseguido si es el récord y se reinicia la partida"
                                 ]
                               ),
                               m("p",
                                 [
                                   m("b",
                                     "Atajos de teclado:"
                                   ),
                                   m("br"),
                                   " - Espacio: Siguiente Nivel ",
                                   m("br"),
                                   " - Enter: Comprobar ",
                                   m("br"),
                                   " - Retroceso: Borrar letras"
                                 ]
                               ),
                               m("p",
                                 " - En cada nivel te explicaremos las especificaciones de ese nivel"
                               )
                             ]
                           )
                         ]
                       ),
                       m("div", {"class":"three wide column"},
                         m("div", {"class":"ui center aligned segment"},
                           [
                             m("h3",
                               "Ranking Global"
                             ),
                             m("table", {"id":"tablamarcador"})
                           ]
                         )
                       )
                     ]
                   ),
                   m("div", {"class":"modal","id":"ventanaModal"},
                     m("div", {"class":"modal-content"},
                       [
                         m("div", {"class":"cerrar"},
                           m.trust("&times;")
                         ),
                         m("h2",
                           "Registrarse"
                         )
                       ]
                     )
                   ),
                   m("div", {"class":"modal","id":"ventanaModalUsuario"},
                     m("div", {"class":"modal-content"},
                       [
                         m("div", {"class":"cerrar"},
                           m.trust("&times;")
                         ),
                         m("h3",
                           "Editar Perfil"
                         ),
                         m("label", {"class":"textoeditar","for":"Nombre"},
                           "Nombre:"
                         ),
                         m("br"),
                         m("input", {"class":"nombre-editar campo-sesion","type":"text","name":"nombre-editar"}),
                         m("br"),
                         m("br"),
                         m("label", {"class":"textoeditar","for":"Email"},
                           "Email:"
                         ),
                         m("br"),
                         m("input", {"class":"email-editar campo-sesion","type":"email","name":"email-editar","readonly":"readonly"}),
                         m("br"),
                         m("br"),
                         m("label", {"class":"textoeditar","for":"Nombre de Usuario"},
                           "Nombre de Usuario:"
                         ),
                         m("br"),
                         m("input", {"class":"username-editar campo-sesion","type":"text","name":"username-editar"}),
                         m("br"),
                         m("br"),
                         m("label", {"class":"textoeditar","for":"Contrasena"},
                           "Contraseña: "
                         ),
                         m("br"),
                         m("input", {"class":"passwd-editar campo-sesion","type":"password","name":"passwd-editar"}),
                         m("br"),
                         m("br"),
                         m("p", {"class":"mensajeeditarmodal"}),
                         m("br"),
                         m("button", {"class":"btneditar boton"},
                           "Editar"
                         )
                       ]
                     )
                   )
                 ]
    }
}
m.mount(document.body, Inicio)