var cmdCong = require('cmd-conf');
var params = cmdCong.getParameters();

var siren = params.siren ?  params.siren : Math.trunc(Math.random()*100000000);
var nic = params.nic ? params.nic : Math.trunc(Math.random()*10000);

siren = siren.toString().split('');
nic = nic.toString().split('');

for(var i = siren.length; i< 8; i++){
    siren.unshift('0');
}
for(var i = nic.length; i< 4; i++){
    nic.unshift('0');
}

/** @var {Array} siren */
/** @var {Array} nic */

if(siren.length == 9 && luhn(siren) % 10 != 0){
    console.error("Le siren entré ne peu pas être validé (numéro complet mais non valide)");
    process.exit(0);
} else if(siren.length > 9){
    console.error("Le siren entré est trop long (9 caractères max)");
    process.exit(0);
} else if(siren.length < 9){
    var sum = luhn(siren.concat(0));
    siren.push(10-(sum % 10 == 0 ? 10 : sum % 10))
}

if(nic.length == 5 && luhn(siren.concat(nic)) % 10 != 0){
    console.error("Le nic entré ne peu pas être validé (numéro complet mais non valide)");
    process.exit(0);
} else if(nic.length > 5){
    console.error("Le nic entré est trop long (5 caractères max)");
    process.exit(0);
} else if(nic.length < 5){
    var sum = luhn(siren.concat(nic,0));
    nic.push(10-(sum % 10 == 0 ? 10 : sum % 10))
}

console.log(siren.join(''),'-',nic.join(''));

function luhn(number){
    var multi = 1;
    var sum = 0;
    for(var i = number.length- 1; i>=0; i--){
        var tmp = parseInt(number[i]) * multi;
        multi = multi == 2 ? 1 : 2;

        if(tmp > 9){
            tmp = 1 + tmp - 10;
        }

        sum += tmp;
    }
    return sum;
}