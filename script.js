//base de dados
const specs = [
    "6 núcleos/ 12 threads",
    "Clock básico 3.9GHz",
    "Gráficos Radeon Vega 7",
    "Socket AM4"
];

//Lista vazia html
const listaUI = document.getElementById('lista-specs');

//Loop da lista
for(let i = 0; i < specs.length; i++){
    let item = document.createElement('li');
    item.innerText = specs[i];
    listaUI.appendChild(item);
}

const btnDetalhes = document.querySelector('button');
const modal = document.getElementById('modal-overlay');
const btnFechar = document.getElementById('close-modal');
const modalSpecsUI = document.getElementById('modal-specs');

btnDetalhes.addEventListener('click', () => {
    modalSpecsUI.innerHTML = "";
    for(let i = 0; i < specs.length; i++){
        let p = document.createElement('p');
        p.innerHTML = `<strong></strong> ${specs[i]}`;
        modalSpecsUI.appendChild(p);
    }
    modal.style.display = 'flex';
});

btnFechar.addEventListener('click', () =>{
    modal.style.display = 'none';
})