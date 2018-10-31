let amigos = [
    {name: 'Pepe', email: 'p@p.es'},
    {name: 'Luisi', email: 'l@l.es'},
    {name: 'Pepa', email: 'p@p.es'},
    {name: 'Alfono', email: 'a@a.es'}
]


window.localStorage.setItem('palabra_almacenada','valor de la palabra');

window.localStorage.setItem('lista_amigos', JSON.stringify(amigos));