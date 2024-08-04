let livros = [
    {"livro":{
        "nome":"Dune",
        "autor":"Frank Herbert",
        "genero":"ficção-científica",
        "ano":"1965",
        "keyWords":["Dune","Frank Hebert","ficção-científica","1965"],
        "avaliacao":"5"
    }
},

    {"livro":{
        "nome":"Senhor dos Anéis",
        "autor":"Tolkien",
        "genero":"fantasia",
        "ano":"1954",
        "keyWords":["Senhor dos Anéis","Tolkien","fantasia","1954"],
        "avaliacao":"6"
    }
},
    {"livro":{
        "nome":"O apanhador no campo de centeio",
        "autor":"Salinger",
        "genero":"românce",
        "ano":"1951",
        "keyWords":["O apanhador no campo de centeio","Salinger","românce","1951"],
        "avaliacao":"10"
    }
}
];


const listLivros = document.getElementById('livros');
const botao = document.getElementById('addBtn');
const formulario = document.getElementById('addLivro');

const seta = document.getElementsByClassName('seta');

const pesquisa = document.getElementById('pesquisa');
const lupaImg = document.getElementById('lupa');

for(let i = 0; i<livros.length; i++){
    const li = document.createElement('li')
    li.innerHTML = `<span id="titulo">${livros[i]["livro"]["nome"]}</span><span id="autor">${livros[i]["livro"]["autor"]}</span><span id="genero">${livros[i]["livro"]["genero"]}</span><span id="ano">${livros[i]["livro"]["ano"]}</span><span id="avaliacao">${livros[i]["livro"]["avaliacao"]}</span>`;
    listLivros.appendChild(li);
};

function add(){
    formulario.style.border = ' 0.5px solid rgb(184, 175, 175)';
    formulario.style.alignItems = 'start';
    
    const h2 = document.createElement('h2');
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
    const enviar = document.createElement('button');
    enviar.id = 'btnEnv';
    
    h2.innerText = 'Register your book';
    label1.innerText = 'Nome';
    label2.innerText = 'Autor';
    label3.innerText = 'Gênero';
    label4.innerText = 'Ano';
    label5.innerText = 'Avaliação';
    enviar.innerText = 'Enviar';

    formulario.innerText = '';
    formulario.append(h2,label1,input1,label2,input2,label3,input3,label4,input4,label5,input5,enviar);

    formulario.querySelector('button').addEventListener('click',(e)=>{
        e.preventDefault();
        formulario.style.border = 'none';
        formulario.style.alignItems = 'center';
        const corpoLivro = {
            "nome":input1.value,
            "autor":input2.value,
            "genero":input3.value,
            "ano":input4.value,
            "keyWords":[input1.value,input2.value,input3.value,input4.value],
            "avaliacao":input5.value
        };

        const novoLivro = {"livro":corpoLivro}
        livros.push(novoLivro);
        listLivros.innerHTML = '';
        for(let i = 0; i<livros.length; i++){
            const li = document.createElement('li')
            li.innerHTML = `<span id="titulo">${livros[i]["livro"]["nome"]}</span><span id="autor">${livros[i]["livro"]["autor"]}</span><span id="genero">${livros[i]["livro"]["genero"]}</span><span id="ano">${livros[i]["livro"]["ano"]}</span><span id="avaliacao">${livros[i]["livro"]["avaliacao"]}</span>`;
            listLivros.appendChild(li);
        };
        formulario.innerHTML = `<button type="button" id="addBtn" onclick="add()">Adicionar Livro</button>`;
        console.log(livros);
    });
};

function alfaSort(){
    seta[0].style.transform = 'rotate(180deg)';
    livros.sort((a, b) => {
        let nomeA = a.livro.nome.toUpperCase(); 
        let nomeB = b.livro.nome.toUpperCase(); 
        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });
    listLivros.innerHTML = '';
        for(let i = 0; i<livros.length; i++){
            const li = document.createElement('li')
            li.innerHTML = `<span id="titulo">${livros[i]["livro"]["nome"]}</span><span id="autor">${livros[i]["livro"]["autor"]}</span><span id="genero">${livros[i]["livro"]["genero"]}</span><span id="ano">${livros[i]["livro"]["ano"]}</span><span id="avaliacao">${livros[i]["livro"]["avaliacao"]}</span>`;
            listLivros.appendChild(li);
        };
    console.log(livros)
}

function review(){
    seta[1].style.transform = 'rotate(180deg)';
    livros.sort((a, b) => {
        let avA = parseFloat(a.livro.avaliacao); 
        let avB = parseFloat(b.livro.avaliacao); 
        return avB - avA;
    });
    listLivros.innerHTML = '';
        for(let i = 0; i<livros.length; i++){
            const li = document.createElement('li')
            li.innerHTML = `<span id="titulo">${livros[i]["livro"]["nome"]}</span><span id="autor">${livros[i]["livro"]["autor"]}</span><span id="genero">${livros[i]["livro"]["genero"]}</span><span id="ano">${livros[i]["livro"]["ano"]}</span><span id="avaliacao">${livros[i]["livro"]["avaliacao"]}</span>`;
            listLivros.appendChild(li);
        };
}

let contador = 0;
function pesquisar(){
    if(contador==0){
        contador+=1;
        pesquisa.innerHTML = `<img src="lupa.png" alt="" id="lupa" onclick=""><input type="text" name="" id="iptPesq">`;

        const inpPesq = pesquisa.querySelector('#iptPesq');
        let keyw = [];
        for(livro of livros){
            for(keywrd of livro.livro.keyWords){
                keyw.push(keywrd);
            }
        };

        console.log(keyw)

       pesquisa.querySelector('#lupa').addEventListener('click',()=>{
        console.log(inpPesq.value);
        for(kw of keyw){
            console.log(kw)
            if(inpPesq.value.toUpperCase() == kw.toUpperCase()){
                for(livro of livros){
                    if(livro.livro.nome.toUpperCase() == inpPesq.value.toUpperCase() ||livro.livro.autor.toUpperCase() == inpPesq.value.toUpperCase() ||livro.livro.genero.toUpperCase() == inpPesq.value.toUpperCase() ||livro.livro.ano.toUpperCase() == inpPesq.value.toUpperCase()){
                        listLivros.innerHTML = '';
                        const li = document.createElement('li')
                        li.innerHTML = `<span id="titulo">${livro["livro"]["nome"]}</span><span id="autor">${livro["livro"]["autor"]}</span><span id="genero">${livro["livro"]["genero"]}</span><span id="ano">${livro["livro"]["ano"]}</span><span id="avaliacao">${livro["livro"]["avaliacao"]}</span>`;
                        listLivros.appendChild(li);
                        break;
                    } else{
                        console.log('deu errado')
                    }
                }
                break;
            } else{
                console.log('Diferente');
            }
        }
        });

        lupaImg.style.margin = '0px';
    } else{
        contador-=1;

        pesquisa.innerHTML = `<img src="lupa.png" alt="" id="lupa" onclick="pesquisar()">`;
        console.log(keyw);
    }
    
}
