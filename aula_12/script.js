const livros = {
    "livro1":{
        "nome":"Dune",
        "autor":"Frank Herbert",
        "genero":"ficção-científica",
        "ano":"1965",
        "keyWords":["Duna","Dune","Frank","Hebert","Livro"],
        "avaliacao":"5/5"
},

    "livro2":{
        "nome":"Senhor dos Anéis",
        "autor":"Tolkien",
        "genero":"fantasia",
        "ano":"1954",
        "keyWords":["Senhor","Anéis","Tolkien","Livro"],
        "avaliacao":"5/5"
    },
    "livro3":{
        "nome":"O apanhador no campo de centeio",
        "autor":"Salinger",
        "genero":"românce",
        "ano":"1951",
        "keyWords":["Apanhador","Centeio","Campo","Salinger","Livro"],
        "avaliacao":"5/5"
    }
};

const btnMostrar = document.getElementById('mostrar');
const listLivros = document.getElementById('livros');

btnMostrar.addEventListener('click',()=>{
    listLivros.innerHTML = `<h2>Livros:</h2><ul id="lista"></ul><div id="inform"></div><button id="addLivro">Adicionar livro</button>`

    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    const label3 = document.createElement('label');
    const input3 = document.createElement('input');
    const label4 = document.createElement('label');
    const input4 = document.createElement('input');
    const label5 = document.createElement('label');
    const input5 = document.createElement('input');
    
    label1.innerText = 'Nome:';
    label2.innerText = 'Autor:';
    label3.innerText = 'Gênero:';
    label4.innerText = 'Ano:';
    label5.innerText = 'Avaliação:';
        
    
    
    document.querySelector('#inform').append(label1,input1,label2,input2,label3,input3,label4,input4,label5,input5);

    listLivros.querySelector('#addLivro').addEventListener('click',()=>{
        const listaLivros = createElement('div');
        const nome = createElement('span');
        nome.innerHTML = `${input1.value}`
        listaLivros.appendChild(nome);
        listLivros.querySelector('#lista').appendChild(listLivros);
    })
        
});

