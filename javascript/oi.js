const animais = [
    {nome:'gato',
    patas:4
    },
    {nome:'cachorro',
    patas:4
    },
    {nome:'pato',
    patas:2
    },
    {nome:'passaro',
    patas:2
    },
    {nome:'capivara',
    patas:4
    }
];
    const tipoanimal = animais.reduce(function(padrasto, pai){
        const diferenca = pai.patas === 4 ? 'quatropatas' : 'duaspatas';
        padrasto[diferenca].push(pai);
        return padrasto
    }, {quatropatas:[], duaspatas:[]});
    console.log(tipoanimal);