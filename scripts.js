let nevem="Janos"
let azEnkorom=54
console.log('A Javascript is betoltodott')
console.log(azEnkorom)

//Ez egy egysoros komment.
/*
Ez egy többsoros
komment.
*/

// >, <, >=, <=, ==; ===
if(azEnkorom >= 21){
} else if(azEnkorom >=18)  
    console.log('Mar eleg idos ahhoz, hogy igyon egy sort')
 else {
    console.log('Még nem nem lephetsz dohanyboltba')
    }

let masikKor = 18

if(azEnkorom > 18){
    console.log('A masik is eleg idos ahhoz, hogy igyon egy sort')
    }

console.log('Ez itt a vege')

//JQerys rész

console.log($(h1).text())
$(h1).text('Ezt javascripbol valtoztattuk meg!')
if(azEnkorom >= 21){
} else if(azEnkorom >=18)  
$(h1).text('Mar eleg idos ahhoz, hogy igyon egy sort')
 else {
    $(h1).text('Még nem nem lephetsz dohanyboltba')
    }

  console.log ($(".sarga").css('background-color'))
  $(".sarga").css('background-color','magenta')
  $("Li").css('background-color', 'Line')
  $("p").html('alma ami <strong>nagyon</strong>fontos')
  $("ul").append('<li>ujabb elem</li>')
  $(".sarga").remove()

  //Ciklusok

 for (let i=0; i<100; i=i+1 ){
    $("ul").append('<li>Men csalok tobbet a vazsgan</li>')
 }
  
 let szinek=['orange','magenta','red','brown','green','blue','teal']
S ('.kontener').append(<div class="doboz"></div>)

function egySzinDoboz(szin){
 S('.kontener div:last-of-type').css('background-color,szin')
}
egySzinDoboz('lime')
egySzinDoboz('pink')

 szinek.forEach()