const url = "https://api.genshin.dev/characters"
const $name = $('#name')
const $description = $('#description')
const $vision = $('#vision')
const $weapon = $('#weapon')
const $rarity = $('#rarity')
const $waysObtained = $('#wayObtained')
const $form = $('form')
const $input = $( 'input[type="text"]' )
function handleGetData (event)
{
event.preventDefault()
userInput = $input.val()
if ( userInput === '') return;
$.ajax(url + userInput).then(
    function(data) {
        $name.text = (data.characters)
        $input.val('')
    }
);
}
