
//let form = document.getElementById('calculadora');
//form.style.backgroundColor = 'blue';

const CALCULAR = document.getElementById('calcular');
const IMPUT = document.getElementById('peso');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

function redondo(r){
    return r - ( r % 1 ) + ( ( r % 1 ) < 0.5 ? 0 : 1 );
}

IMPUT.focus();
IMPUT.addEventListener( 'keyup', () => calc() )
CALCULAR.addEventListener('click', () => calc())

function calc() {

    let p = document.getElementById('peso').value;
    let sc;
    let sc1,  sc2; 
    let vd = 0 ;
    let m, m2;
    
    switch (true) {
    
        case p > 30:
            sc = ( ( p * 4 ) + 7 ) / ( p + 90 );
            sc1 = sc * 1500;
            sc2 = sc * 2000;
            console.log("SC1 = " + sc1 + "\nSC2 = " + sc2);
            sc1 = redondo(sc1);
            sc2 = redondo(sc2);
            FLU.innerHTML = '*1500 ' + sc1 + ' cc/hr';
            MAN.innerHTML = '*2000 ' + sc2 + ' cc/hr';
            ERROR.style.display = 'none';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            break;
        
        case p > 20: 
            vd += ( p - 20 ) * 20;
            p = 20;
            /* falls through */
        case p > 10:
            vd += ( p - 10 ) * 50;
            p = 10;
            /* falls through */
        case p > 0:
            vd += p * 100;
            m = vd / 24;
            m2 = m *  1.5;
            console.log("\nvd= " + vd + "\(nm= " + m + "\nm2= " + m2);
            m = redondo(m);
            m2 = redondo(m2);
            FLU.innerHTML = m + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + m2 + ' cc/hr';
            ERROR.style.display = 'none';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            break;
    
        default:
            console.log("Peso negativo o nulo");
            ERROR.style.display = 'block';
            FLU.style.display = 'none';
            MAN.style.display = 'none';
            break;
    }

}

function major(a, b, c){

    if ( a > ( b && c ) )
        return a;
    else if ( b > ( a && c ) )
        return b;
        else if ( c > ( a && b ) )
            return c;
    
    console.log("Error")
    return false;
}


let resultado = major(10, 20, 30);

if (resultado)
    console.log(resultado)
