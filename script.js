function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizeCount();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        realizeCount() {
            let count = this.display.value;
            try {
                count = eval(count);
                if(!count) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(count);
            }  catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizeCount();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();