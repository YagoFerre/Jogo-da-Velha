let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box'); //O 'All' é para pegar todas as clases do '.box' <- classe.
let buttons = document.querySelectorAll('#buttons-container button'); //#buttons-container button pois é um id, pegando a tag
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let jogadorDois;
let container;

// Contador de jogadas, para definir quem irá jogar.
let jogador1 = 0;  //0 é o número de jogadas.
let jogador2 = 0;  //0 é o número de jogadas.

// Adicionando o evento de click aos boxes.
for(let i = 0; i < boxes.length; i++) {
    // Quando alguém clica na caixa.
    boxes[i].addEventListener("click", function() {
        let el = checkEl(jogador1, jogador2);

        // Verifica se já tem x ou o.
        if(this.childNodes.length == 0) {
        let cloneEl = el.cloneNode(true); //Clonando o elemento toda vez que rodar o loop.
        this.appendChild(cloneEl);

        //Computar a jogada
        if(jogador1 == jogador2) {
            jogador1++;
            if(jogadorDois == 'contra-computador') {
                //Função para executar jogada.
                computerPlay();
                jogador2++;
            }
        } else {
            jogador2++;
        }
        // Checando quem venceu.
         checkWinCondition()
    };
 });
};

// Evento para escolher multiplayer ou contra Computador.
for(let i = 0; i < buttons.length; i++) { //For para pegar os dois botões.
    buttons[i].addEventListener("click", function() {
        jogadorDois = this.getAttribute("id"); //Jogador(uma variável vazia la em cima) passou a ser um id.

        for(let x = 0; x < buttons.length; x++) { //For para esconder os dois botões.
            buttons[x].style.display = 'none'; // buttons[x].stule.display adicionando um elemento css.
        }

        setTimeout(function() {
            container = document.querySelector("#container");
            container.classList.remove('hide'); //Escondendo o 'hide' para aparecer o jogo, antes escondemos os botões.
        }, 500)
    });
};

// Verifica quem irá jogar.
function checkEl(jogador1, jogador2) {
    if(jogador1 == jogador2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    };
    return el;
}

// Função que checa quem venceu.
function checkWinCondition() {
// Vou declarar as variáveis.
    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

    // Horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o');
        }
    }
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x');
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o');
        }
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }
    // Vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o');
        }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }
    // Diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declareWinner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }
    // Deu velha
    let counter = 0;
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if(counter == 9) {
        declareWinner("Deu velha!")
    }
};

// Limpar o jogo, declara o venccedor e atualiza o placar.
function declareWinner(winner) {
    let scoreboardX = document.querySelector('#scoreboard-1');
    let scoreboardO = document.querySelector('#scoreboard-2');
    let msg = '';

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!"
    } else if(winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1
        msg = "O jogador 2 venceu!"
    } else {
        msg = "Deu velha!"
    };

    // Exibe a mensagem.
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");
    
    // Esconde a mensagem.
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000)

    // Zera as jogas.
    jogador1 = 0;
    jogador2 = 0;

    // Remove X e o O.
    let boxesToRemove = document.querySelectorAll('.box div');

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
};

// Executando a lógica da jogada do Computador.
function computerPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
            
    for(let i = 0; i < boxes.length; i++) {
  
      let randomNumber = Math.floor(Math.random() * 5);
  
      // só se não tiver marcado anteriormente
      if(boxes[i].childNodes[0] == undefined) {  
        if(randomNumber <= 1) {
          boxes[i].appendChild(cloneO);
          counter++;
          break;
        }
      // checar quantas estão preenchidas        
      } else {
        filled++;
      }
  
    }
  
    if(counter == 0 && filled < 9) {
      computerPlay();
    }
}  