const URL = "https://api.genshin.dev/characters/"
const $name = $('#name')
const $description = $('#description')
const $vision = $('#vision')
const $weapon = $('#weapon')
const $rarity = $('#rarity')
const $constellation = $('#constellation')
const $faction = $('#faction')
 const $nation = $('#nation')
 const $ab1n = $('#ab1n')
 const $ab1d = $('#ab1d')
 const $ab2n = $('#ab2n')
 const $ab2d = $('#ab2d')
const $form = $('form')
const $input = $( 'input[type="text"]' )
$form.on( 'submit', handleGetData )
function handleGetData (event)
{
event.preventDefault()
userInput = $input.val()
if ( userInput === '') return;
$.ajax(URL+userInput).then(
     function (data) {
        console.log(data)
        $name.text  (data.name)
        $description.text  (data.description)
        $vision.text  (data.vision)
        $weapon.text (data.weapon)
        $rarity.text  (data.rarity)
        $constellation.text (data.constellation)
        $faction.text (data.affiliation)
        $nation.text (data.nation)
        $ab1n.text (data.skillTalents[1].name)
        $ab1d.text (data.skillTalents[1].description)
        $ab2n.text (data.skillTalents[2].name)
        $ab2d.text (data.skillTalents[2].description)
        
    }
 );
} 

function resetText() {
   $name.text  (" ")
   $description.text  (" ")
   $vision.text  (" ")
   $weapon.text (" ")
   $rarity.text  (" ")
   $constellation.text (" ")
   $faction.text (" ")
   $nation.text (" ")
   $ab1n.text (" ")
   $ab1d.text (" ")
   $ab2n.text (" ")
   $ab2d.text (" ")
}