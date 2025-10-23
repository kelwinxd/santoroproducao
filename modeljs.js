function result() {
    const element = document.querySelector('div')
    element.innerHTML = "<div><strong> Tradicional comum </strong><br> Modelo: 7mm <br> "

    
}

function result1(){
    const element = document.querySelector('div')
    element.innerHTML = "<div> <strong> Canelada padrão sem pedra </strong> </div> <br> <div><strong>Modelo:</strong> 6mm a 7mm <br> <strong>Acabamento:</strong> Friso de 0,8mm na lateral</div>"
}

function result2(){
    const element = document.querySelector('div')
    element.innerHTML =  Fotomega + "<div style='display:inline-block; horizontal-align:right; font-size:20px'><strong>Mega </strong><br><br> <strong>Modelo:</strong> 7mm <br> <strong>Acabamento:</strong> Rasgo de 1,5mm na lateral e Friso de 0,8mm ao lado. <br><br><br></div>" 
}
function result3(){
    const element = document.querySelector('div')
    element.innerHTML = Fototwenty + "<div style='display:inline-block; horizontal-align:right; font-size:20px'><strong>Twenty </strong><br> <strong>Modelo:</strong> 7mm <br> <strong>Acabamento:</strong> Chanfro nas laterais, Rasgo de 1,5mm no meio e Friso de 0,8mm dos lados </div>" 

}

function result4(){
    const element = document.querySelector('div')
    element.innerHTML = Foto01 + "<div style='display:inline-block; horizontal-align:right; font-size:20px'><strong>F01 </strong><br> <strong>Modelo:</strong> 7mm <br> <strong>Acabamento:</strong> Reta com pedras 1,5 envolto e 2 frisos de 0,5mm próximos ao rasgo </div>" 
}

const obje = [{ image:'espuria',
description:'sdasdasd'},
{ image:'sda',
description:'sdasdasd'}

   
]

obje.map((i) => (
    
  <p>{i.description}</p>
    
))



function result5(){
    const element = document.querySelector('div') 
    element.innerHTML = Foto017 + "<div style='display:in<dline-block; horizontal-align:right; font-size:20px'><strong>Chanfrada Com Friso </strong><br> <strong>Modelo:</strong> 7mm <br> <strong>Acabamento:</strong> Reta Chanfrada com friso na lateral</div>" 


}

const tool = document.getElementById('tool')
        function click() {
           tool.innerText = "ashfhsdkfhk"
        }




var Fototwenty = '<img src="./imgs/twenty.jpg" height="400" width="340" style="vertical-align: middle;">' 

var Fotomega = '<img src="./imgs/mega.jpg" height="400" width="340" style="vertical-align: middle;">'
var Foto01 = '<img src="./imgs/f01.jpeg" height="400" width="340" style="vertical-align: middle;">'
var Foto14 = '<img src="./imgs/mod14.jpg" height="400" width="340" style="vertical-align: middle;">'
var Foto017 = '<img src="./imgs/0177.jpg" height="400" width="340" style="vertical-align: middle;">'





//---------------------------
var input = document.querySelector('input'),
    form = document.querySelector('form');

form.addEventListener('submit', validateAndSubmit, false);

function validateAndSubmit(event) {
    // Prevenindo o comportamento padrão.
    event.preventDefault();

    // Pegando o valor do input.
    var value = input.value;

    // Fazendo a validação e enviando caso esteja OK.
     //tradicional
    if (value == 'jk2')
        result();
    
    else if (value == 'u8') {
        result();
    } 
    
    else if (value == 'a5500') {
        result1();
    } 
    else if (value == 'b1') {
        result1();
    } 
    else if (value == 'g9') {
        result1();
    } 
    else if (value == 'd30') {
        result1();
    } 
    //mega
    else if (value == 'mega') {
        result2();
    } 
    else if (value == 'espurias') {
        result2();
    } 
    else if (value == 'a7200') {
        result2();
    }
    else if (value == 'mod004') {
        result2();
    } 
    else if (value == 'mod021') {
        result2();
    }

    //twenty 
    else if (value == 'n2') {
        result3();
    } 
    else if (value == 'twenty') {
        result3();
    } 
    else if (value == 'mod015') {
        result3();
    } 
    //f01
    else if (value == 'f01') {
        result4();
    } 
    else if (value == 'a18') {
        result4();
    } 
    else if (value == 'mod014') {
        result4();
    } 
    else if (value == 'mod017') {
        result5();
    } 
    else if(value == 'r0223355'){
        result6()
    }
    
    else {
        alert('Modelo não identificado');
        form.submit();
    }
}