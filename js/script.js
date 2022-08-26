const URL = "https://api.genshin.dev/characters/"
// Variables
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

// Allows me to submit the search
$form.on( 'submit', handleGetData )



function handleGetData (event)
{
event.preventDefault() // prevents site restarting before getting response
userInput = $input.val() // assigns the input value to userInput
if ( userInput === '') return; // returns the userInput if its a string
$.ajax(URL+userInput).then( // Combines the URL + the userInput to pull information from the api with ajax
     function (data) {
      // Grabs the info within the api and displays it as the text within the variables
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

//Function that resets all text
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