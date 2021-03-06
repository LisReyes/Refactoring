
//console.log(explorers)
//Parte 2: Obtener la cantidad de nombres de explorers en el nodo
//Utilizamos el operando filter para poder obtener solo los que cumplan con este criterio
const explorersInNode = explorers.filter((explorer)=> explorer.mission == "node");

//console.log("Paso 2 " + explorersInNode.length);
//Parte 3:  Obtener los nomres de usuario del explorador en Node
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);

//console.log("Paso 3: "+usernamesInNode.length);

const assignFizzTrick = function(explorer){//Cone sto comprobamos que explorer es FIXX
    if(explorer.score%3 === 0){//Comprobamos que el modulo sea EXACTAMENTE IGUAL A 0 o es divisible en 3
        explorer.trick  ="FIZZ";
        //console.log(explorer)
        return explorer;
    }else{
        explorer.trick  = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));
//console.log(explorersInNodeAndFizzTrick);
//Get una nueva lista de exploradores en Node si el score es divisible en 5
//creamos una nueva propiedad llamada BUZZ si no dejamos el score original
const assignBuzzTrick = function(explorer){
    if(explorer.score%5 === 0){
        explorer.trick = "BUZZ";
        //console.log(explorer);
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer));

//console.log(explorersInNodeAndBuzzTrick);

//Obtenemos una nueva lista de exploradores en Node, si el numero de puntaje es divisible por 3 Y
//por 5, debemos establecer una nueva propiedad llamada FIZZBUZZ, si no, este valor debera ser el mismo putnaje

const assignFizzBuzzTrick = function(explorer){
    if(explorer.score%3 === 0 && explorer.score%5 === 0){
        explorer.trick = "FIZZBUZZ"
        //console.log(explorer);
        return explorer;        
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));

