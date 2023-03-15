const input = document.querySelector('.container .input-user');
const komp = document.querySelector('.container .komputer')
const kirim = document.querySelector('.container .kirim');
const result = document.querySelector('.container .result');

var counter = 2;
var comp = Math.round(Math.random() * 10 + 1);

function hasil(player, komputer){
    //KALAU MENANG
    if(player == komputer) {
        result.style.color = 'green';
        result.style.textShadow = 'none';
        result.innerHTML = 'SELAMAT, ANDA MENANG!!!';
        komp.innerHTML = komputer;
        input.setAttribute('disabled', true);
        return;
    }

    // KALAU KALAH
    else {
        // KALAU MASIH ADA KESEMPATAN
        if(counter > 0) {
            counter--;
            kirim.innerHTML = `Submit ${counter+1}`

            if(komputer > player) {
                result.style.color = 'yellow';
                result.style.textShadow = '2px 1px 3px black';
                result.innerHTML = 'Komputer punya nilai lebih besar';
                return;

            } else {
                result.style.color = 'yellow';
                result.style.textShadow = '2px 1px 3px black';
                result.innerHTML = 'Komputer punya nilai lebih kecil';
                return;
            }
        }

        // KALAU UDAH GA ADA KESEMPATAN
        else {
            kirim.innerHTML = 'Submit';
            result.style.color = 'red';
            result.style.textShadow = 'none';
            result.innerHTML = 'MAAF, ANDA KALAH :(';
            komp.innerHTML = komputer;
            input.setAttribute('disabled', true);
            return;
        }
    }
}

// SETIAP BUTTON DI CLICK
kirim.addEventListener('click', function(){
    hasil(input.value, comp);
});
