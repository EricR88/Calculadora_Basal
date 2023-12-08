
function major(p) {

    for ( let i = 30; i >= 0; i -= 10 )
        if ( p > i )
            return i;

    return -1;
}

let p = 30;
let sc, sc1,  sc2; 
let vd = 0 ;
let m, m2;

let peso_es_major_que = major(p);

switch (peso_es_major_que) {

    case 30:
        sc = ( ( p * 4 ) + 7 ) / ( p + 90 );
        sc1 = sc * 1500;
        sc2 = sc * 2000;
        console.log("SC1 = " + sc1 + "\nSC2 = " + sc2);
        break;
    
    case 20: 
        vd += ( p - 20 ) * 20;
        p = 20;
        /* falls through */
    case 10:
        vd += ( p - 10 ) * 50;
        p = 10;
        /* falls through */
    case 0:
        vd += p * 100;
        m = vd / 24;
        m2 = m *  1.5;
        console.log("vd= " + vd + "\nm= " + m + "\nm2= " + m2);
        break;

    default:
        console.log("Peso negativo o nulo");
        break;
}

//let form = document.getElementById('calculadora');
//form.style.backgroundColor = 'blue';

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    console.log('Se hizo click!')
})
