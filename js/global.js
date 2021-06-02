
//função que chama o popup 

function IniciarPopup(popupId){
    const popups = document.getElementById(popupId);

    if(popups){
        popups.classList.add('mostrarPopup');

        popups.addEventListener('click',(elemento) => {
            //console.log(elemento.target) //pra saber a pode está o click do cursor

            if (elemento.target.id == popupId || elemento.target.className == 'buttonFecharPopup'){
                popups.classList.remove('mostrarPopup');
            }
        });
    }
}

function FecharPopup(popupId){
    document.getElementById(popupId).classList.remove('mostrarPopup');
}

//Fecha o popup atual e abre um novo, através dos Ids
function ProximoPopup(antigoPopupId, novoPopupId){
    FecharPopup(antigoPopupId);
    IniciarPopup(novoPopupId);
}
//salvar valores para no final trazer pagina de esolha 
function SalvarEscolhaPopup(keys,valor){
    localStorage.setItem(keys,valor);
}
//Salva escolha do usuário no file storage como array para que receba de volta.
function SalvarInfoPopup(keys,valor){
    const escolhas = [keys ,valor];
    localStorage['PoPups'] = JSON.stringify(escolhas);  
}

//Salva escolha do usuário e chama próximo popup
function SalvarInfoPopup_ProximoPopup(keys, valor, antigoPopupId, novoPopupId){
    SalvarInfoPopup(keys,valor);
    SalvarEscolhaPopup(keys,valor);
    ProximoPopup(antigoPopupId, novoPopupId);
    
}
//salva um array com o ultimo popup fechado
function Ultimo_Popup(){
    const escolha = JSON.parse(localStorage['PoPups']);
    const ultima_escolha = escolha[escolha.length - 1];
    if (ultima_escolha == 'Gamer' || ultima_escolha == 'Profissional'||ultima_escolha == 'Casual'){
         var Ultimo_Popup_escolha = "popup-perfil"
    }
    else if(ultima_escolha == 'Barato'||ultima_escolha == 'Mediano'||ultima_escolha == 'Caro'){
            Ultimo_Popup_escolha = "popup-valor"
    }
    else if(ultima_escolha == 'Comp'||ultima_escolha == 'Note'){
        Ultimo_Popup_escolha = "popup-Pc"
    }
    else if(ultima_escolha == 'Novo'||ultima_escolha == 'Upgrad'){
        Ultimo_Popup_escolha = "popup-novo"
    }
    ProximoPopup('popup-local',Ultimo_Popup_escolha);
}
//verifica o local storage e chama o popup inicial ou o ultimo 
function verificaLocalStage(){
    
    
        const V = localStorage.getItem('20');
        if (localStorage.getItem('20','Bem') && V == 'Bem') {
            FecharPopup('popupBemVindo');
        }
        else if (localStorage.getItem('PoPups')== null){
            VerificaPrimeira();
        }   
        else{
            IniciarPopup('popup-local');
        }
   
}
//limpa localStorage 
function limpaStorage(popupId){
    localStorage.clear();    
    FecharPopup(popupId);
}
//verifica local storage pela segunda vez
function VerificaPrimeira(){
    if(localStorage.getItem('20','Bem')){
        FecharPopup('popupBemVindo');
    }
    else{
        IniciarPopup('popupBemVindo');
    }
}   
//função mais importante do site
function PaginaDaEscolha(){
    if(localStorage.getItem('20') == 'Gamer' && localStorage.getItem('02') == 'Caro' && localStorage.getItem('03') == 'Comp'){
        FecharPopup('popup-novo');
        location.href = '../html/escolha.html';
        
    }
    else if(localStorage.getItem('20') == 'Gamer' && localStorage.getItem('02') == '' && localStorage.getItem('03') == '' && localStorage.getItem('04') == ''){

    }
    else if(localStorage.getItem('20') == 'Gamer' && localStorage.getItem('02') == '' && localStorage.getItem('03') == '' && localStorage.getItem('04') == ''){

    }
    else if(localStorage.getItem('20') == 'Gamer' && localStorage.getItem('02') == '' && localStorage.getItem('03') == '' && localStorage.getItem('04') == ''){

    }
    else{
        FecharPopup('popup-novo');
    }
} 