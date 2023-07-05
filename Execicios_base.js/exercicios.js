/*
console.log(typeof (23 + 1));
console.log(typeof (4 * 4));
console.log(typeof (20 / 2));
console.log(typeof (40 % 2));
console.log(typeof (23 - 1));
console.log("Primeira linha \n segunda linha");
console.log(`a soma de 1 mais 1 é ${1+1}`);

//#----------------------------------------------------#

console.log("teste");
console.log('teste2');
console.log(`teste`);
console.log(3 > 2);
console.log(4> 5);
console.log("Cintia" != "Maria");
console.log(3 > 2 && 5 == 5);
console.log(!(3>1))
console.log("2teste" * 2)

//#----------------------------------------------------#

let idade = prompt("Qual sua idade?");

console.log(idade);

let nome = prompt("Qual seu nome?");

console.log(`Meu nome é ${nome} e a minha idade é ${idade}`);

alert("obrigada!")

//#----------------------------------------------------#

let maiornumero = Math.max(20,50,80,4,7);

console.log(maiornumero);

let menornumero = Math.min(4,5,8,8,54,21);

console.log(menornumero);

let arrendondar = Math.round(8.24545454)

console.log(arrendondar)

let arrendondarcima = Math.ceil(8.24545454);

console.log(arrendondarcima)

//#----------------------------------------------------#

let nome = 'cintia';
let x = 10;
let y = Boolean(true);

console.log(typeof (x));
console.log(typeof (y));
console.log(typeof (nome));

//#----------------------------------------------------#

for (let i=0; i<100; i = i + 3){
    console.log(`a soma de 2 + 1 é ${i + 2}`)
}

//#----------------------------------------------------#

let x = 10;

while(x > 0){
    console.log("x é " + x);

    x = x - 1;
}

let z = 0;
while(z <= 10){
    console.log(z);
    z = z + 1;
}

//#----------------------------------------------------#


let idade = prompt("Qual a sua idade?")

if(idade >= 18){
    console.log("Pode entrar, cuidado eim!");
}
else{
    console.log("Volte para casa jovenzinho");
}

//#----------------------------------------------------#

const nome = "cintia";

if(nome == "cintia")
{
    console.log(`olá ${nome} Seja bem vinda dona menina`);
}

//#----------------------------------------------------#

let aoQuadradro = Math.pow(2,2);

console.log(aoQuadradro); 

//#----------------------------------------------------#

let idade = 18;

let cnh = true;

if(idade >= 18 && cnh == true){
    console.log("Pode seguir viagem");

}else if(idade >= 18 && cnh == false){

    console.log("Não pode seguir viagem");
} else(idade < 18 && cnh == false)
{
    console.log("Idade menor que 18 anos");
}
//#----------------------------------------------------#

for(let i = 100; i >= 50; i--){
    console.log(i);
}

//#----------------------------------------------------#

for(i = 0; i <= 50; i++){
    if(i %2 == 0){
        console.log(`O valor ${i} é par`);
    }
    else{
        console.log(`O valor ${i} é impar`);
    }
}
//#----------------------------------------------------#

let n = 0;
while(n <= 50){
    if(n % 2 == 0){
        console.log(`O valor de ${n} é par`);
    }
    else{
        console.log(`O valor de ${n} é impar`);
    }

    n = n+1;
}
*/