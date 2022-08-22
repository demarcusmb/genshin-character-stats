const URL = "https://api.genshin.dev/characters/"
const $name = $('#name')
const $description = $('#description')
const $vision = $('#vision')
const $weapon = $('#weapon')
const $rarity = $('#rarity')
const $constellation = $('#constellation')
const $faction = $('#faction')
 const $nation = $('#nation')
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
        $input.val('')
    }
 );
} 
