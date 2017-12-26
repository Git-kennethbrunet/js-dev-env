
console.log('Loading app.js with ES2015 format, built w/Webpack and Babel loader in js-javascript-Volume-1 ...' + '\n');

// Chapter 11 ----------------------------------------------------------------------------------------------------

/* block comment
// line comment
String
Numbers
Variable
"if else"
"else if {}"
Math.round()
Math.random()
promot()
alert()
confirm()
Operators ( i.e., ===, !=, &&, >, <, +, -, *, and / )
*/

// Zombie Apocalypse game
var weapons = "A Bow and arrow, an Axe or the Rubber chicken next to you?"
var zombieMsg = "A widespread rise of zombies hostile to human life engages in a general assault on civilization; you are in a looting a store and suddenly a zombie burst though the door!!!"
alert(zombieMsg);

// Selection of weapon
var zombieMsg2 = "You search agound franticlly for a weapon. What do you choose? " + weapons + "?";
var weaponChoiceIs = prompt(zombieMsg2);
var radnomNumber = Math.round(Math.random());

weaponChoiceIs = weaponChoiceIs.toLowerCase(); // normilize the string to lower case
if (weaponChoiceIs === "bow and arrow") {
  alert("The " + weaponChoiceIs + " is a great selection, this give you the ability to shoot from far away!");
} else if (weaponChoiceIs === "axe") {
  alert("The " + weaponChoiceIs + " is a great selection, this give you the ability for close hand-to-had combat!");
} else if (weaponChoiceIs === "rubber chicken") {
  alert("The " + weaponChoiceIs + " is a good selection, but not as deadly as the rest!");
} else { // default
  alert("This selection is not valid, you must have a weapon, so you grab the rubber chicken next to you!");
  weaponChoiceIs = "rubber chicken";
}

// Attacking the zombie 50/50
alert("You attack the zombie with the " + weaponChoiceIs + "!!!");

// 50/50 chance of killing the zombie
if (radnomNumber === 0) {
  alert("Ouch... you have been attack and the zombie bites you!!! You are now part of the Zombies of the apocalypse.");
} else if (radnomNumber === 1) {
  alert("You have been attack by the zombie... you have killed the zombie with the " + weaponChoiceIs + "!!!");
}

// Chapter 10 -----------------------------------------------------------------------------------------------------
// Control Flows and comparison operators

/*
var randomNumber = Math.round(Math.random() * 15); // generate & round (by 15)
if (randomNumber % 3 === 0 && randomNumber != 0) { // modulo
    if (randomNumber % 5 === 0) {
        alert('fizzbuzz = ' + randomNumber);
    } else {
        alert('fizz = ' + randomNumber);
    }
} else if (randomNumber % 5 === 0 && randomNumber != 0) {
    alert('buzz = ' + randomNumber);
} else {
    console.log(randomNumber);
}
*/

// var randomNumber = Math.random(); // generate
// randomNumber = randomNumber * 5; // up to five
// randomNumber = Math.round(randomNumber); // round

// var randomNumber = Math.round(Math.random() * 15); // generate & round (by 15)
// if (randomNumber % 3 === 0 && randomNumber != 0) { // modulo
//    alert('fizz rounded number = ' + randomNumber);
//} else if (randomNumber % 5 === 0 && randomNumber != 0) {
//    alert('buzz rounded number = ' + randomNumber);
//} else if (randomNumber % 3 === 0 && randomNumber % 5 === 0 && randomNumber != 0) {
//    alert('fizzbuzz rounded number = ' + randomNumber);
//} else {
//    console.log(randomNumber);
//} */

// Chapter 9 ------------------------------------------------------------------------------------------------------
// FizzBuzz:

/*

var randomNumber = Math.random(); // generate
console.log('Random Number = ' + randomNumber);
randomNumber = Math.round(randomNumber * 5); //round
console.log('Rounded Number = ' + randomNumber);

if (randomNumber % 3 === 0) { // modulo
  alert('Fizz rounded number = ' + randomNumber);
} else if (randomNumber % 5 === 0) {
  alert('Buzz rounded number = ' + randomNumber);
} else {
  console.log('Rounded number = ' + randomNumber);
}

*/

/*

// Chapter 9 - Control Flows (if/else)
var url = 'https://a-z-animals.com/animals/';
var selected = "";
selected = prompt('What is your favorite animal?');
selected = selected.trim().toLowerCase();

//a
if (selected === "aardvark") {
    alert('post-url = ' + url + selected);
} else if (selected === "abyssinian") {
    alert('post-url = ' + url + selected);
} else if (selected === "adelie penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "affenpinscher") {
    alert('post-url = ' + url + selected);
} else if (selected === "afghan hound") {
    alert('post-url = ' + url + selected);
} else if (selected === "african bush elephant") {
    alert('post-url = ' + url + selected);
} else if (selected === "african civet") {
    alert('post-url = ' + url + selected);
} else if (selected === "african clawed frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "african forest elephant") {
    alert('post-url = ' + url + selected);
} else if (selected === "african palm civet") {
    alert('post-url = ' + url + selected);
} else if (selected === "african penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "african tree toad") {
    alert('post-url = ' + url + selected);
} else if (selected === "african wild dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "ainu dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "airedale terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "akbash") {
    alert('post-url = ' + url + selected);
} else if (selected === "akita") {
    alert('post-url = ' + url + selected);
} else if (selected === "alaskan malamute") {
    alert('post-url = ' + url + selected);
} else if (selected === "albatross") {
    alert('post-url = ' + url + selected);
} else if (selected === "aldabra giant tortoise") {
    alert('post-url = ' + url + selected);
} else if (selected === "alligator") {
    alert('post-url = ' + url + selected);
} else if (selected === "alpine dachsbracke") {
    alert('post-url = ' + url + selected);
} else if (selected === "american bulldog") {
    alert('post-url = ' + url + selected);
} else if (selected === "american cocker spaniel") {
    alert('post-url = ' + url + selected);
} else if (selected === "american coonhound") {
    alert('post-url = ' + url + selected);
} else if (selected === "american eskimo dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "american foxhound") {
    alert('post-url = ' + url + selected);
} else if (selected === "american pit bull terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "american staffordshire terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "american water spaniel") {
    alert('post-url = ' + url + selected);
} else if (selected === "anatolian shepherd dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "angelfish") {
    alert('post-url = ' + url + selected);
} else if (selected === "ant") {
    alert('post-url = ' + url + selected);
} else if (selected === "anteater") {
    alert('post-url = ' + url + selected);
} else if (selected === "antelope") {
    alert('post-url = ' + url + selected);
} else if (selected === "appenzeller dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "arctic fox") {
    alert('post-url = ' + url + selected);
} else if (selected === "arctic hare") {
    alert('post-url = ' + url + selected);
} else if (selected === "arctic wolf") {
    alert('post-url = ' + url + selected);
} else if (selected === "armadillo") {
    alert('post-url = ' + url + selected);
} else if (selected === "asian elephant") {
    alert('post-url = ' + url + selected);
} else if (selected === "asian giant hornet") {
    alert('post-url = ' + url + selected);
} else if (selected === "asian palm civet") {
    alert('post-url = ' + url + selected);
} else if (selected === "asiatic black bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "australian cattle dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "australian kelpie dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "australian mist") {
    alert('post-url = ' + url + selected);
} else if (selected === "australian shepherd") {
    alert('post-url = ' + url + selected);
} else if (selected === "australian terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "avocet") {
    alert('post-url = ' + url + selected);
} else if (selected === "axolotl") {
    alert('post-url = ' + url + selected);
} else if (selected === "aye aye") {
    alert('post-url = ' + url + selected);
    //b
} else if (selected === "baboon") {
    alert('post-url = ' + url + selected);
} else if (selected === "bactrian camel") {
    alert('post-url = ' + url + selected);
} else if (selected === "badger") {
    alert('post-url = ' + url + selected);
} else if (selected === "balinese") {
    alert('post-url = ' + url + selected);
} else if (selected === "banded palm civet") {
    alert('post-url = ' + url + selected);
} else if (selected === "bandicoot") {
    alert('post-url = ' + url + selected);
} else if (selected === "barb") {
    alert('post-url = ' + url + selected);
} else if (selected === "barn owl") {
    alert('post-url = ' + url + selected);
} else if (selected === "barnacle") {
    alert('post-url = ' + url + selected);
} else if (selected === "barracuda") {
    alert('post-url = ' + url + selected);
} else if (selected === "basenji dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "basking shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "basset hound") {
    alert('post-url = ' + url + selected);
} else if (selected === "bat") {
    alert('post-url = ' + url + selected);
} else if (selected === "bavarian mountain hound") {
    alert('post-url = ' + url + selected);
} else if (selected === "beagle") {
    alert('post-url = ' + url + selected);
} else if (selected === "bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "bearded collie") {
    alert('post-url = ' + url + selected);
} else if (selected === "bearded dragon") {
    alert('post-url = ' + url + selected);
} else if (selected === "beaver") {
    alert('post-url = ' + url + selected);
} else if (selected === "bedlington terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "beetle") {
    alert('post-url = ' + url + selected);
} else if (selected === "bengal tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "bernese mountain dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "bichon frise") {
    alert('post-url = ' + url + selected);
} else if (selected === "binturong") {
    alert('post-url = ' + url + selected);
} else if (selected === "bird") {
    alert('post-url = ' + url + selected);
} else if (selected === "birds of paradise") {
    alert('post-url = ' + url + selected);
} else if (selected === "birman") {
    alert('post-url = ' + url + selected);
} else if (selected === "bison") {
    alert('post-url = ' + url + selected);
} else if (selected === "black bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "black rhinoceros") {
    alert('post-url = ' + url + selected);
} else if (selected === "black russian terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "black widow spider") {
    alert('post-url = ' + url + selected);
} else if (selected === "bloodhound") {
    alert('post-url = ' + url + selected);
} else if (selected === "blue lacy dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "blue whale") {
    alert('post-url = ' + url + selected);
} else if (selected === "bluetick coonhound") {
    alert('post-url = ' + url + selected);
} else if (selected === "bobcat") {
    alert('post-url = ' + url + selected);
} else if (selected === "bolognese dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "bombay") {
    alert('post-url = ' + url + selected);
} else if (selected === "bongo") {
    alert('post-url = ' + url + selected);
} else if (selected === "bonobo") {
    alert('post-url = ' + url + selected);
} else if (selected === "booby") {
    alert('post-url = ' + url + selected);
} else if (selected === "border collie") {
    alert('post-url = ' + url + selected);
} else if (selected === "border terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "bornean orang-utan") {
    alert('post-url = ' + url + selected);
} else if (selected === "borneo elephant") {
    alert('post-url = ' + url + selected);
} else if (selected === "boston terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "bottle nosed dolphin") {
    alert('post-url = ' + url + selected);
} else if (selected === "boxer dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "boykin spaniel") {
    alert('post-url = ' + url + selected);
} else if (selected === "brazilian terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "brown bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "budgerigar") {
    alert('post-url = ' + url + selected);
} else if (selected === "buffalo") {
    alert('post-url = ' + url + selected);
} else if (selected === "bull mastiff") {
    alert('post-url = ' + url + selected);
} else if (selected === "bull shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "bull terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "bulldog") {
    alert('post-url = ' + url + selected);
} else if (selected === "bullfrog") {
    alert('post-url = ' + url + selected);
} else if (selected === "bumble bee") {
    alert('post-url = ' + url + selected);
} else if (selected === "burmese") {
    alert('post-url = ' + url + selected);
} else if (selected === "burrowing frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "butterfly") {
    alert('post-url = ' + url + selected);
} else if (selected === "butterfly fish") {
    alert('post-url = ' + url + selected);
    //c
} else if (selected === "caiman") {
    alert('post-url = ' + url + selected);
} else if (selected === "caiman lizard") {
    alert('post-url = ' + url + selected);
} else if (selected === "cairn terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "camel") {
    alert('post-url = ' + url + selected);
} else if (selected === "canaan dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "capybara") {
    alert('post-url = ' + url + selected);
} else if (selected === "caracal") {
    alert('post-url = ' + url + selected);
} else if (selected === "carolina dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "cassowary") {
    alert('post-url = ' + url + selected);
} else if (selected === "cat") {
    alert('post-url = ' + url + selected);
} else if (selected === "caterpillar") {
    alert('post-url = ' + url + selected);
} else if (selected === "catfish") {
    alert('post-url = ' + url + selected);
} else if (selected === "cavalier king charles spaniel") {
    alert('post-url = ' + url + selected);
} else if (selected === "centipede") {
    alert('post-url = ' + url + selected);
} else if (selected === "cesky fousek") {
    alert('post-url = ' + url + selected);
} else if (selected === "chameleon") {
    alert('post-url = ' + url + selected);
} else if (selected === "chamois") {
    alert('post-url = ' + url + selected);
} else if (selected === "cheetah") {
    alert('post-url = ' + url + selected);
} else if (selected === "chesapeake bay retriever") {
    alert('post-url = ' + url + selected);
} else if (selected === "chicken") {
    alert('post-url = ' + url + selected);
} else if (selected === "chihuahua") {
    alert('post-url = ' + url + selected);
} else if (selected === "chimpanzee") {
    alert('post-url = ' + url + selected);
} else if (selected === "chinchilla") {
    alert('post-url = ' + url + selected);
} else if (selected === "chinese crested dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "chinook") {
    alert('post-url = ' + url + selected);
} else if (selected === "chinstrap penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "chipmunk") {
    alert('post-url = ' + url + selected);
} else if (selected === "chow chow") {
    alert('post-url = ' + url + selected);
} else if (selected === "cichlid") {
    alert('post-url = ' + url + selected);
} else if (selected === "clouded leopard") {
    alert('post-url = ' + url + selected);
} else if (selected === "clown fish") {
    alert('post-url = ' + url + selected);
} else if (selected === "clumber spaniel") {
    alert('post-url = ' + url + selected);
} else if (selected === "coati") {
    alert('post-url = ' + url + selected);
} else if (selected === "cockroach") {
    alert('post-url = ' + url + selected);
} else if (selected === "collared peccary") {
    alert('post-url = ' + url + selected);
} else if (selected === "collie") {
    alert('post-url = ' + url + selected);
} else if (selected === "common buzzard") {
    alert('post-url = ' + url + selected);
} else if (selected === "common frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "common loon") {
    alert('post-url = ' + url + selected);
} else if (selected === "common toad") {
    alert('post-url = ' + url + selected);
} else if (selected === "coral") {
    alert('post-url = ' + url + selected);
} else if (selected === "cottontop tamarin") {
    alert('post-url = ' + url + selected);
} else if (selected === "cougar") {
    alert('post-url = ' + url + selected);
} else if (selected === "cow") {
    alert('post-url = ' + url + selected);
} else if (selected === "coyote") {
    alert('post-url = ' + url + selected);
} else if (selected === "crab") {
    alert('post-url = ' + url + selected);
} else if (selected === "crab-eating macaque") {
    alert('post-url = ' + url + selected);
} else if (selected === "crane") {
    alert('post-url = ' + url + selected);
} else if (selected === "crested penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "crocodile") {
    alert('post-url = ' + url + selected);
} else if (selected === "cross river gorilla") {
    alert('post-url = ' + url + selected);
} else if (selected === "curly coated retriever") {
    alert('post-url = ' + url + selected);
} else if (selected === "cuscus") {
    alert('post-url = ' + url + selected);
} else if (selected === "cuttlefish") {
    alert('post-url = ' + url + selected);
    //d
} else if (selected === "dachshund") {
    alert('post-url = ' + url + selected);
} else if (selected === "dalmatian") {
    alert('post-url = ' + url + selected);
} else if (selected === "darwin's frog") {
    alert('post - url = ' + url + selected);
} else if (selected === "deer") {
    alert('post-url = ' + url + selected);
} else if (selected === "desert tortoise") {
    alert('post-url = ' + url + selected);
} else if (selected === "deutsche bracke") {
    alert('post-url = ' + url + selected);
} else if (selected === "dhole") {
    alert('post-url = ' + url + selected);
} else if (selected === "dingo") {
    alert('post-url = ' + url + selected);
} else if (selected === "discus") {
    alert('post-url = ' + url + selected);
} else if (selected === "doberman pinscher") {
    alert('post-url = ' + url + selected);
} else if (selected === "dodo") {
    alert('post-url = ' + url + selected);
} else if (selected === "dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "dogo argentino") {
    alert('post-url = ' + url + selected);
} else if (selected === "dogue de bordeaux") {
    alert('post-url = ' + url + selected);
} else if (selected === "dolphin") {
    alert('post-url = ' + url + selected);
} else if (selected === "donkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "dormouse") {
    alert('post-url = ' + url + selected);
} else if (selected === "dragonfly") {
    alert('post-url = ' + url + selected);
} else if (selected === "drever") {
    alert('post-url = ' + url + selected);
} else if (selected === "duck") {
    alert('post-url = ' + url + selected);
} else if (selected === "dugong") {
    alert('post-url = ' + url + selected);
} else if (selected === "dunker") {
    alert('post-url = ' + url + selected);
} else if (selected === "dusky dolphin") {
    alert('post-url = ' + url + selected);
} else if (selected === "dwarf crocodile") {
    alert('post-url = ' + url + selected);
    //e
} else if (selected === "eagle") {
    alert('post-url = ' + url + selected);
} else if (selected === "earwig") {
    alert('post-url = ' + url + selected);
} else if (selected === "eastern gorilla") {
    alert('post-url = ' + url + selected);
} else if (selected === "eastern lowland gorilla") {
    alert('post-url = ' + url + selected);
} else if (selected === "echidna") {
    alert('post-url = ' + url + selected);
} else if (selected === "edible frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "egyptian mau") {
    alert('post-url = ' + url + selected);
} else if (selected === "electric eel") {
    alert('post-url = ' + url + selected);
} else if (selected === "elephant") {
    alert('post-url = ' + url + selected);
} else if (selected === "elephant seal") {
    alert('post-url = ' + url + selected);
} else if (selected === "elephant shrew") {
    alert('post-url = ' + url + selected);
} else if (selected === "emperor penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "emperor tamarin") {
    alert('post-url = ' + url + selected);
} else if (selected === "emu") {
    alert('post-url = ' + url + selected);
} else if (selected === "english cocker spaniel") {
    alert('post-url = ' + url + selected);
} else if (selected === "english shepherd") {
    alert('post-url = ' + url + selected);
} else if (selected === "english springer spaniel") {
    alert('post-url = ' + url + selected);
} else if (selected === "entlebucher mountain dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "epagneul pont audemer") {
    alert('post-url = ' + url + selected);
} else if (selected === "eskimo dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "estrela mountain dog") {
    alert('post-url = ' + url + selected);
    //f
} else if (selected === "falcon") {
    alert('post-url = ' + url + selected);
} else if (selected === "fennec fox") {
    alert('post-url = ' + url + selected);
} else if (selected === "ferret") {
    alert('post-url = ' + url + selected);
} else if (selected === "field spaniel") {
    alert('post-url = ' + url + selected);
} else if (selected === "fin whale") {
    alert('post-url = ' + url + selected);
} else if (selected === "finnish spitz") {
    alert('post-url = ' + url + selected);
} else if (selected === "fire-bellied toad") {
    alert('post-url = ' + url + selected);
} else if (selected === "fish") {
    alert('post-url = ' + url + selected);
} else if (selected === "fishing cat") {
    alert('post-url = ' + url + selected);
} else if (selected === "flamingo") {
    alert('post-url = ' + url + selected);
} else if (selected === "flat coat retriever") {
    alert('post-url = ' + url + selected);
} else if (selected === "flounder") {
    alert('post-url = ' + url + selected);
} else if (selected === "fly") {
    alert('post-url = ' + url + selected);
} else if (selected === "flying squirrel") {
    alert('post-url = ' + url + selected);
} else if (selected === "fossa") {
    alert('post-url = ' + url + selected);
} else if (selected === "fox") {
    alert('post-url = ' + url + selected);
} else if (selected === "fox terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "french bulldog") {
    alert('post-url = ' + url + selected);
} else if (selected === "frigatebird") {
    alert('post-url = ' + url + selected);
} else if (selected === "frilled lizard") {
    alert('post-url = ' + url + selected);
} else if (selected === "frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "fur seal") {
    alert('post-url = ' + url + selected);
    //g
} else if (selected === "galapagos penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "galapagos tortoise") {
    alert('post-url = ' + url + selected);
} else if (selected === "gar") {
    alert('post-url = ' + url + selected);
} else if (selected === "gecko") {
    alert('post-url = ' + url + selected);
} else if (selected === "gentoo penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "geoffroys tamarin") {
    alert('post-url = ' + url + selected);
} else if (selected === "gerbil") {
    alert('post-url = ' + url + selected);
} else if (selected === "german pinscher") {
    alert('post-url = ' + url + selected);
} else if (selected === "german shepherd") {
    alert('post-url = ' + url + selected);
} else if (selected === "gharial") {
    alert('post-url = ' + url + selected);
} else if (selected === "giant african land snail") {
    alert('post-url = ' + url + selected);
} else if (selected === "giant clam") {
    alert('post-url = ' + url + selected);
} else if (selected === "giant panda bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "giant schnauzer") {
    alert('post-url = ' + url + selected);
} else if (selected === "gibbon") {
    alert('post-url = ' + url + selected);
} else if (selected === "gila monster") {
    alert('post-url = ' + url + selected);
} else if (selected === "giraffe") {
    alert('post-url = ' + url + selected);
} else if (selected === "glass lizard") {
    alert('post-url = ' + url + selected);
} else if (selected === "glow worm") {
    alert('post-url = ' + url + selected);
} else if (selected === "goat") {
    alert('post-url = ' + url + selected);
} else if (selected === "golden lion tamarin") {
    alert('post-url = ' + url + selected);
} else if (selected === "golden oriole") {
    alert('post-url = ' + url + selected);
} else if (selected === "golden retriever") {
    alert('post-url = ' + url + selected);
} else if (selected === "goose") {
    alert('post-url = ' + url + selected);
} else if (selected === "gopher") {
    alert('post-url = ' + url + selected);
} else if (selected === "gorilla") {
    alert('post-url = ' + url + selected);
} else if (selected === "grasshopper") {
    alert('post-url = ' + url + selected);
} else if (selected === "great dane") {
    alert('post-url = ' + url + selected);
} else if (selected === "great white shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "greater swiss mountain dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "green bee-eater") {
    alert('post-url = ' + url + selected);
} else if (selected === "greenland dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "grey mouse lemur") {
    alert('post-url = ' + url + selected);
} else if (selected === "grey reef shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "grey seal") {
    alert('post-url = ' + url + selected);
} else if (selected === "greyhound") {
    alert('post-url = ' + url + selected);
} else if (selected === "grizzly bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "grouse") {
    alert('post-url = ' + url + selected);
} else if (selected === "guinea fowl") {
    alert('post-url = ' + url + selected);
} else if (selected === "guinea pig") {
    alert('post-url = ' + url + selected);
} else if (selected === "guppy") {
    alert('post-url = ' + url + selected);
    //h
} else if (selected === "hammerhead shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "hamster") {
    alert('post-url = ' + url + selected);
} else if (selected === "hare") {
    alert('post-url = ' + url + selected);
} else if (selected === "harrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "havanese") {
    alert('post-url = ' + url + selected);
} else if (selected === "hedgehog") {
    alert('post-url = ' + url + selected);
} else if (selected === "hercules beetle") {
    alert('post-url = ' + url + selected);
} else if (selected === "hermit crab") {
    alert('post-url = ' + url + selected);
} else if (selected === "heron") {
    alert('post-url = ' + url + selected);
} else if (selected === "highland cattle") {
    alert('post-url = ' + url + selected);
} else if (selected === "himalayan") {
    alert('post-url = ' + url + selected);
} else if (selected === "hippopotamus") {
    alert('post-url = ' + url + selected);
} else if (selected === "honey bee") {
    alert('post-url = ' + url + selected);
} else if (selected === "horn shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "horned frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "horse") {
    alert('post-url = ' + url + selected);
} else if (selected === "horseshoe crab") {
    alert('post-url = ' + url + selected);
} else if (selected === "howler monkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "human") {
    alert('post-url = ' + url + selected);
} else if (selected === "humboldt penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "hummingbird") {
    alert('post-url = ' + url + selected);
} else if (selected === "humpback whale") {
    alert('post-url = ' + url + selected);
} else if (selected === "hyena") {
    alert('post-url = ' + url + selected);
    //i
} else if (selected === "ibis") {
    alert('post-url = ' + url + selected);
} else if (selected === "ibizan hound") {
    alert('post-url = ' + url + selected);
} else if (selected === "iguana") {
    alert('post-url = ' + url + selected);
} else if (selected === "impala") {
    alert('post-url = ' + url + selected);
} else if (selected === "indian elephant") {
    alert('post-url = ' + url + selected);
} else if (selected === "indian palm squirrel") {
    alert('post-url = ' + url + selected);
} else if (selected === "indian rhinoceros") {
    alert('post-url = ' + url + selected);
} else if (selected === "indian star tortoise") {
    alert('post-url = ' + url + selected);
} else if (selected === "indochinese tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "indri") {
    alert('post-url = ' + url + selected);
} else if (selected === "insect") {
    alert('post-url = ' + url + selected);
} else if (selected === "irish setter") {
    alert('post-url = ' + url + selected);
} else if (selected === "irish wolfhound") {
    alert('post-url = ' + url + selected);
    //j
} else if (selected === "jack russel") {
    alert('post-url = ' + url + selected);
} else if (selected === "jackal") {
    alert('post-url = ' + url + selected);
} else if (selected === "jaguar") {
    alert('post-url = ' + url + selected);
} else if (selected === "japanese chin") {
    alert('post-url = ' + url + selected);
} else if (selected === "japanese macaque") {
    alert('post-url = ' + url + selected);
} else if (selected === "javan rhinoceros") {
    alert('post-url = ' + url + selected);
} else if (selected === "javanese") {
    alert('post-url = ' + url + selected);
} else if (selected === "jellyfish") {
    alert('post-url = ' + url + selected);
    //k
} else if (selected === "kakapo") {
    alert('post-url = ' + url + selected);
} else if (selected === "kangaroo") {
    alert('post-url = ' + url + selected);
} else if (selected === "keel billed toucan") {
    alert('post-url = ' + url + selected);
} else if (selected === "killer whale") {
    alert('post-url = ' + url + selected);
} else if (selected === "king crab") {
    alert('post-url = ' + url + selected);
} else if (selected === "king penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "kingfisher") {
    alert('post-url = ' + url + selected);
} else if (selected === "kiwi") {
    alert('post-url = ' + url + selected);
} else if (selected === "koala") {
    alert('post-url = ' + url + selected);
} else if (selected === "komodo dragon") {
    alert('post-url = ' + url + selected);
} else if (selected === "kudu") {
    alert('post-url = ' + url + selected);
    //l
} else if (selected === "labradoodle") {
    alert('post-url = ' + url + selected);
} else if (selected === "labrador retriever") {
    alert('post-url = ' + url + selected);
} else if (selected === "ladybird") {
    alert('post-url = ' + url + selected);
} else if (selected === "leaf-tailed gecko") {
    alert('post-url = ' + url + selected);
} else if (selected === "lemming") {
    alert('post-url = ' + url + selected);
} else if (selected === "lemur") {
    alert('post-url = ' + url + selected);
} else if (selected === "leopard") {
    alert('post-url = ' + url + selected);
} else if (selected === "leopard cat") {
    alert('post-url = ' + url + selected);
} else if (selected === "leopard seal") {
    alert('post-url = ' + url + selected);
} else if (selected === "leopard tortoise") {
    alert('post-url = ' + url + selected);
} else if (selected === "liger") {
    alert('post-url = ' + url + selected);
} else if (selected === "lion") {
    alert('post-url = ' + url + selected);
} else if (selected === "lionfish") {
    alert('post-url = ' + url + selected);
} else if (selected === "little penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "lizard") {
    alert('post-url = ' + url + selected);
} else if (selected === "llama") {
    alert('post-url = ' + url + selected);
} else if (selected === "lobster") {
    alert('post-url = ' + url + selected);
} else if (selected === "long-eared owl") {
    alert('post-url = ' + url + selected);
} else if (selected === "lynx") {
    alert('post-url = ' + url + selected);
    //m
} else if (selected === "macaroni penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "macaw") {
    alert('post-url = ' + url + selected);
} else if (selected === "magellanic penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "magpie") {
    alert('post-url = ' + url + selected);
} else if (selected === "maine coon") {
    alert('post-url = ' + url + selected);
} else if (selected === "malayan civet") {
    alert('post-url = ' + url + selected);
} else if (selected === "malayan tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "maltese") {
    alert('post-url = ' + url + selected);
} else if (selected === "manatee") {
    alert('post-url = ' + url + selected);
} else if (selected === "mandrill") {
    alert('post-url = ' + url + selected);
} else if (selected === "manta ray") {
    alert('post-url = ' + url + selected);
} else if (selected === "marine toad") {
    alert('post-url = ' + url + selected);
} else if (selected === "markhor") {
    alert('post-url = ' + url + selected);
} else if (selected === "marsh frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "masked palm civet") {
    alert('post-url = ' + url + selected);
} else if (selected === "mastiff") {
    alert('post-url = ' + url + selected);
} else if (selected === "mayfly") {
    alert('post-url = ' + url + selected);
} else if (selected === "meerkat") {
    alert('post-url = ' + url + selected);
} else if (selected === "millipede") {
    alert('post-url = ' + url + selected);
} else if (selected === "minke whale") {
    alert('post-url = ' + url + selected);
} else if (selected === "mole") {
    alert('post-url = ' + url + selected);
} else if (selected === "molly") {
    alert('post-url = ' + url + selected);
} else if (selected === "mongoose") {
    alert('post-url = ' + url + selected);
} else if (selected === "mongrel") {
    alert('post-url = ' + url + selected);
} else if (selected === "monitor lizard") {
    alert('post-url = ' + url + selected);
} else if (selected === "monkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "monte iberia eleuth") {
    alert('post-url = ' + url + selected);
} else if (selected === "moorhen") {
    alert('post-url = ' + url + selected);
} else if (selected === "moose") {
    alert('post-url = ' + url + selected);
} else if (selected === "moray eel") {
    alert('post-url = ' + url + selected);
} else if (selected === "moth") {
    alert('post-url = ' + url + selected);
} else if (selected === "mountain gorilla") {
    alert('post-url = ' + url + selected);
} else if (selected === "mountain lion") {
    alert('post-url = ' + url + selected);
} else if (selected === "mouse") {
    alert('post-url = ' + url + selected);
} else if (selected === "mule") {
    alert('post-url = ' + url + selected);
    //n
} else if (selected === "neanderthal") {
    alert('post-url = ' + url + selected);
} else if (selected === "neapolitan mastiff") {
    alert('post-url = ' + url + selected);
} else if (selected === "newfoundland") {
    alert('post-url = ' + url + selected);
} else if (selected === "newt") {
    alert('post-url = ' + url + selected);
} else if (selected === "nightingale") {
    alert('post-url = ' + url + selected);
} else if (selected === "norfolk terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "norwegian forest") {
    alert('post-url = ' + url + selected);
} else if (selected === "numbat") {
    alert('post-url = ' + url + selected);
} else if (selected === "nurse shark") {
    alert('post-url = ' + url + selected);
    //o
} else if (selected === "ocelot") {
    alert('post-url = ' + url + selected);
} else if (selected === "octopus") {
    alert('post-url = ' + url + selected);
} else if (selected === "okapi") {
    alert('post-url = ' + url + selected);
} else if (selected === "old english sheepdog") {
    alert('post-url = ' + url + selected);
} else if (selected === "olm") {
    alert('post-url = ' + url + selected);
} else if (selected === "opossum") {
    alert('post-url = ' + url + selected);
} else if (selected === "orang-utan") {
    alert('post-url = ' + url + selected);
} else if (selected === "ostrich") {
    alert('post-url = ' + url + selected);
} else if (selected === "otter") {
    alert('post-url = ' + url + selected);
} else if (selected === "oyster") {
    alert('post-url = ' + url + selected);
    //p
} else if (selected === "pademelon") {
    alert('post-url = ' + url + selected);
} else if (selected === "panther") {
    alert('post-url = ' + url + selected);
} else if (selected === "parrot") {
    alert('post-url = ' + url + selected);
} else if (selected === "patas monkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "peacock") {
    alert('post-url = ' + url + selected);
} else if (selected === "pekingese") {
    alert('post-url = ' + url + selected);
} else if (selected === "pelican") {
    alert('post-url = ' + url + selected);
} else if (selected === "penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "persian") {
    alert('post-url = ' + url + selected);
} else if (selected === "pheasant") {
    alert('post-url = ' + url + selected);
} else if (selected === "pied tamarin") {
    alert('post-url = ' + url + selected);
} else if (selected === "pig") {
    alert('post-url = ' + url + selected);
} else if (selected === "pika") {
    alert('post-url = ' + url + selected);
} else if (selected === "pike") {
    alert('post-url = ' + url + selected);
} else if (selected === "pink fairy armadillo") {
    alert('post-url = ' + url + selected);
} else if (selected === "piranha") {
    alert('post-url = ' + url + selected);
} else if (selected === "platypus") {
    alert('post-url = ' + url + selected);
} else if (selected === "pointer") {
    alert('post-url = ' + url + selected);
} else if (selected === "poison dart frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "polar bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "pond skater") {
    alert('post-url = ' + url + selected);
} else if (selected === "poodle") {
    alert('post-url = ' + url + selected);
} else if (selected === "pool frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "porcupine") {
    alert('post-url = ' + url + selected);
} else if (selected === "possum") {
    alert('post-url = ' + url + selected);
} else if (selected === "prawn") {
    alert('post-url = ' + url + selected);
} else if (selected === "proboscis monkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "puffer fish") {
    alert('post-url = ' + url + selected);
} else if (selected === "puffin") {
    alert('post-url = ' + url + selected);
} else if (selected === "pug") {
    alert('post-url = ' + url + selected);
} else if (selected === "puma") {
    alert('post-url = ' + url + selected);
} else if (selected === "purple emperor") {
    alert('post-url = ' + url + selected);
} else if (selected === "puss moth") {
    alert('post-url = ' + url + selected);
} else if (selected === "pygmy hippopotamus") {
    alert('post-url = ' + url + selected);
} else if (selected === "pygmy marmoset") {
    alert('post-url = ' + url + selected);
    //q
} else if (selected === "quail") {
    alert('post-url = ' + url + selected);
} else if (selected === "quetzal") {
    alert('post-url = ' + url + selected);
} else if (selected === "quokka") {
    alert('post-url = ' + url + selected);
} else if (selected === "quoll") {
    alert('post-url = ' + url + selected);
    //r
} else if (selected === "rabbit") {
    alert('post-url = ' + url + selected);
} else if (selected === "raccoon") {
    alert('post-url = ' + url + selected);
} else if (selected === "raccoon dog") {
    alert('post-url = ' + url + selected);
} else if (selected === "radiated tortoise") {
    alert('post-url = ' + url + selected);
} else if (selected === "ragdoll") {
    alert('post-url = ' + url + selected);
} else if (selected === "rat") {
    alert('post-url = ' + url + selected);
} else if (selected === "rattlesnake") {
    alert('post-url = ' + url + selected);
} else if (selected === "red knee tarantula") {
    alert('post-url = ' + url + selected);
} else if (selected === "red panda") {
    alert('post-url = ' + url + selected);
} else if (selected === "red wolf") {
    alert('post-url = ' + url + selected);
} else if (selected === "red-handed tamarin") {
    alert('post-url = ' + url + selected);
} else if (selected === "reindeer") {
    alert('post-url = ' + url + selected);
} else if (selected === "rhinoceros") {
    alert('post-url = ' + url + selected);
} else if (selected === "river dolphin") {
    alert('post-url = ' + url + selected);
} else if (selected === "river turtle") {
    alert('post-url = ' + url + selected);
} else if (selected === "robin") {
    alert('post-url = ' + url + selected);
} else if (selected === "rock hyrax") {
    alert('post-url = ' + url + selected);
} else if (selected === "rockhopper penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "roseate spoonbill") {
    alert('post-url = ' + url + selected);
} else if (selected === "rottweiler") {
    alert('post-url = ' + url + selected);
} else if (selected === "royal penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "russian blue") {
    alert('post-url = ' + url + selected);
    //s
} else if (selected === "sabre-toothed tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "saint bernard") {
    alert('post-url = ' + url + selected);
} else if (selected === "salamander") {
    alert('post-url = ' + url + selected);
} else if (selected === "sand lizard") {
    alert('post-url = ' + url + selected);
} else if (selected === "saola") {
    alert('post-url = ' + url + selected);
} else if (selected === "scorpion") {
    alert('post-url = ' + url + selected);
} else if (selected === "scorpion fish") {
    alert('post-url = ' + url + selected);
} else if (selected === "sea dragon") {
    alert('post-url = ' + url + selected);
} else if (selected === "sea lion") {
    alert('post-url = ' + url + selected);
} else if (selected === "sea otter") {
    alert('post-url = ' + url + selected);
} else if (selected === "sea slug") {
    alert('post-url = ' + url + selected);
} else if (selected === "sea squirt") {
    alert('post-url = ' + url + selected);
} else if (selected === "sea turtle") {
    alert('post-url = ' + url + selected);
} else if (selected === "sea urchin") {
    alert('post-url = ' + url + selected);
} else if (selected === "seahorse") {
    alert('post-url = ' + url + selected);
} else if (selected === "seal") {
    alert('post-url = ' + url + selected);
} else if (selected === "serval") {
    alert('post-url = ' + url + selected);
} else if (selected === "sheep") {
    alert('post-url = ' + url + selected);
} else if (selected === "shih tzu") {
    alert('post-url = ' + url + selected);
} else if (selected === "shrimp") {
    alert('post-url = ' + url + selected);
} else if (selected === "siamese") {
    alert('post-url = ' + url + selected);
} else if (selected === "siamese fighting fish") {
    alert('post-url = ' + url + selected);
} else if (selected === "siberian") {
    alert('post-url = ' + url + selected);
} else if (selected === "siberian husky") {
    alert('post-url = ' + url + selected);
} else if (selected === "siberian tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "silver dollar") {
    alert('post-url = ' + url + selected);
} else if (selected === "skunk") {
    alert('post-url = ' + url + selected);
} else if (selected === "sloth") {
    alert('post-url = ' + url + selected);
} else if (selected === "slow worm") {
    alert('post-url = ' + url + selected);
} else if (selected === "snail") {
    alert('post-url = ' + url + selected);
} else if (selected === "snake") {
    alert('post-url = ' + url + selected);
} else if (selected === "snapping turtle") {
    alert('post-url = ' + url + selected);
} else if (selected === "snowshoe") {
    alert('post-url = ' + url + selected);
} else if (selected === "snowy owl") {
    alert('post-url = ' + url + selected);
} else if (selected === "somali") {
    alert('post-url = ' + url + selected);
} else if (selected === "south china tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "spadefoot toad") {
    alert('post-url = ' + url + selected);
} else if (selected === "sparrow") {
    alert('post-url = ' + url + selected);
} else if (selected === "spectacled bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "sperm whale") {
    alert('post-url = ' + url + selected);
} else if (selected === "spider monkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "spiny dogfish") {
    alert('post-url = ' + url + selected);
} else if (selected === "sponge") {
    alert('post-url = ' + url + selected);
} else if (selected === "squid") {
    alert('post-url = ' + url + selected);
} else if (selected === "squirrel") {
    alert('post-url = ' + url + selected);
} else if (selected === "squirrel monkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "sri lankan elephant") {
    alert('post-url = ' + url + selected);
} else if (selected === "staffordshire bull terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "stag beetle") {
    alert('post-url = ' + url + selected);
} else if (selected === "starfish") {
    alert('post-url = ' + url + selected);
} else if (selected === "stellers sea cow") {
    alert('post-url = ' + url + selected);
} else if (selected === "stick insect") {
    alert('post-url = ' + url + selected);
} else if (selected === "stingray") {
    alert('post-url = ' + url + selected);
} else if (selected === "stoat") {
    alert('post-url = ' + url + selected);
} else if (selected === "striped rocket frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "sumatran elephant") {
    alert('post-url = ' + url + selected);
} else if (selected === "sumatran orang-utan") {
    alert('post-url = ' + url + selected);
} else if (selected === "sumatran rhinoceros") {
    alert('post-url = ' + url + selected);
} else if (selected === "sumatran tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "sun bear") {
    alert('post-url = ' + url + selected);
} else if (selected === "swan") {
    alert('post-url = ' + url + selected);
    //t
} else if (selected === "tang") {
    alert('post-url = ' + url + selected);
} else if (selected === "tapanuli orang-utan") {
    alert('post-url = ' + url + selected);
} else if (selected === "tapir") {
    alert('post-url = ' + url + selected);
} else if (selected === "tarsier") {
    alert('post-url = ' + url + selected);
} else if (selected === "tasmanian devil") {
    alert('post-url = ' + url + selected);
} else if (selected === "tawny owl") {
    alert('post-url = ' + url + selected);
} else if (selected === "termite") {
    alert('post-url = ' + url + selected);
} else if (selected === "tetra") {
    alert('post-url = ' + url + selected);
} else if (selected === "thorny devil") {
    alert('post-url = ' + url + selected);
} else if (selected === "tibetan mastiff") {
    alert('post-url = ' + url + selected);
} else if (selected === "tiffany") {
    alert('post-url = ' + url + selected);
} else if (selected === "tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "tiger salamander") {
    alert('post-url = ' + url + selected);
} else if (selected === "tiger shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "tortoise") {
    alert('post-url = ' + url + selected);
} else if (selected === "toucan") {
    alert('post-url = ' + url + selected);
} else if (selected === "tree frog") {
    alert('post-url = ' + url + selected);
} else if (selected === "tropicbird") {
    alert('post-url = ' + url + selected);
} else if (selected === "tuatara") {
    alert('post-url = ' + url + selected);
} else if (selected === "turkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "turkish angora") {
    alert('post-url = ' + url + selected);
    //u
} else if (selected === "uakari") {
    alert('post-url = ' + url + selected);
} else if (selected === "uguisu") {
    alert('post-url = ' + url + selected);
} else if (selected === "umbrellabird") {
    alert('post-url = ' + url + selected);
    //v
} else if (selected === "vampire bat") {
    alert('post-url = ' + url + selected);
} else if (selected === "vervet monkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "vulture") {
    alert('post-url = ' + url + selected);
    //w
} else if (selected === "wallaby") {
    alert('post-url = ' + url + selected);
} else if (selected === "walrus") {
    alert('post-url = ' + url + selected);
} else if (selected === "warthog") {
    alert('post-url = ' + url + selected);
} else if (selected === "wasp") {
    alert('post-url = ' + url + selected);
} else if (selected === "water buffalo") {
    alert('post-url = ' + url + selected);
} else if (selected === "water dragon") {
    alert('post-url = ' + url + selected);
} else if (selected === "water vole") {
    alert('post-url = ' + url + selected);
} else if (selected === "weasel") {
    alert('post-url = ' + url + selected);
} else if (selected === "welsh corgi") {
    alert('post-url = ' + url + selected);
} else if (selected === "west highland terrier") {
    alert('post-url = ' + url + selected);
} else if (selected === "western gorilla") {
    alert('post-url = ' + url + selected);
} else if (selected === "western lowland gorilla") {
    alert('post-url = ' + url + selected);
} else if (selected === "whale shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "whippet") {
    alert('post-url = ' + url + selected);
} else if (selected === "white faced capuchin") {
    alert('post-url = ' + url + selected);
} else if (selected === "white rhinoceros") {
    alert('post-url = ' + url + selected);
} else if (selected === "white tiger") {
    alert('post-url = ' + url + selected);
} else if (selected === "wild boar") {
    alert('post-url = ' + url + selected);
} else if (selected === "wildebeest") {
    alert('post-url = ' + url + selected);
} else if (selected === "wolf") {
    alert('post-url = ' + url + selected);
} else if (selected === "wolverine") {
    alert('post-url = ' + url + selected);
} else if (selected === "wombat") {
    alert('post-url = ' + url + selected);
} else if (selected === "woodlouse") {
    alert('post-url = ' + url + selected);
} else if (selected === "woodpecker") {
    alert('post-url = ' + url + selected);
} else if (selected === "woolly mammoth") {
    alert('post-url = ' + url + selected);
} else if (selected === "woolly monkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "wrasse") {
    alert('post-url = ' + url + selected);
    //x
} else if (selected === "x-ray tetra") {
    alert('post-url = ' + url + selected);
    //y
} else if (selected === "yak") {
    alert('post-url = ' + url + selected);
} else if (selected === "yellow-eyed penguin") {
    alert('post-url = ' + url + selected);
} else if (selected === "yorkshire terrier") {
    alert('post-url = ' + url + selected);
    //z
} else if (selected === "zebra") {
    alert('post-url = ' + url + selected);
} else if (selected === "zebra shark") {
    alert('post-url = ' + url + selected);
} else if (selected === "zebu") {
    alert('post-url = ' + url + selected);
} else if (selected === "zonkey") {
    alert('post-url = ' + url + selected);
} else if (selected === "zorse") {
    alert('post-url = ' + url + selected);
} else if (selected === "") {
    alert('post-url = ' + url + selected);
} else {
    alert('The ' + selected.toUpperCase() + ' is not found!');
}

*/

/*

var responce = prompt("What is the capital of Texas?");
// reassignment of the var to lowercase aznd also trim
responce = responce.trim().toLowerCase();
if (responce === "austin") {
    // alert to ui
    alert('Great, ' + responce + ' is the capital of the U.S. state of Texas!!! and did you also know' +
    'that seat of Travis County, with portions extending into Hays and Williamson counties. ' +
    'It is the 11th-most populous city in the United States and the 4th-most populous city in ' +
    'Texas. It is the fastest growing large city in the United States, it is the second most ' +
    'populous state capital ...');
    // log to console
    console.log('Great, ' + responce + ' is the capital of the U.S. state of Texas' + '\n' +
    'and the seat of Travis County, with portions extending into Hays and Williamson counties. ' + '\n' +
    'It is the 11th-most populous city in the United States and the 4th-most populous city in ' + '\n' +
    'Texas. It is the fastest growing large city in the United States, it is the second most ' + '\n' +
    'populous state capital ...');
}
else {
    alert ( 'Sorry, ' + responce + ' is not the capital of the U.S. state of Texas?!' );
}
responce = prompt("What is the capital of New York ?");
// reassignment of the var to lowercase aznd also trim
responce = responce.trim().toLowerCase();
if (responce === "albany") {
    // alert to ui
    alert('Great, ' + responce + ' is the capital of the U.S. state of New York and the seat ' +
    'of Albany County. Roughly 150 miles (240 km) north of New York City, Albany developed on ' +
    'the west bank of the Hudson River, about 10 miles (16 km) south of its confluence with ' +
    'the Mohawk River. The population of the City of Albany was 97,856 according to the 2010 census. ' +
    'Albany constitutes the economic and cultural core of the Capital District of New York State, ' +
    'which comprises the Albany-Schenectady-Troy, NY Metropolitan Statistical Area, including the ' +
    'nearby cities and suburbs of Troy, Schenectady, and Saratoga Springs. With a 2013 Census-estimated ' +
    'population of 1.1 million [6] the Capital District is the third-most populous metropolitan ' +
    'region in the state and 38th in the United States');
    // log to console
    console.log('Great, ' + responce + ' is the capital of the U.S. state of New York and the seat ' + '\n' +
    'of Albany County. Roughly 150 miles (240 km) north of New York City, Albany developed on ' + '\n' +
    'the west bank of the Hudson River, about 10 miles (16 km) south of its confluence with ' + '\n' +
    'the Mohawk River. The population of the City of Albany was 97,856 according to the 2010 census. ' + '\n' +
    'Albany constitutes the economic and cultural core of the Capital District of New York State, ' + '\n' +
    'which comprises the Albany-Schenectady-Troy, NY Metropolitan Statistical Area, including the ' + '\n' +
    'nearby cities and suburbs of Troy, Schenectady, and Saratoga Springs. With a 2013 Census-estimated ' + '\n' +
    'population of 1.1 million [6] the Capital District is the third-most populous metropolitan ' + '\n' +
    'region in the state and 38th in the United States');
}
else {
    alert ( 'Sorry, ' + responce + ' is not the capital of the U.S. state of New York?!' );
}
*/

// Chapter 8 -------------------------------------------------------------------------------------------------------
// Control Flows (if/else)
/*
var responce = prompt("What is the capital of Texas?");
// reassignment of the var to lowercase aznd also trim
responce = responce.trim().toLowerCase();
if ((responce === "Austin') || (responce === "austin')) {
    // alert to ui
    alert('Great, ' + responce + ' is the capital of the U.S. state of Texas!!! and did you also know' +
    'that seat of Travis County, with portions extending into Hays and Williamson counties. ' +
    'It is the 11th-most populous city in the United States and the 4th-most populous city in ' +
    'Texas. It is the fastest growing large city in the United States, it is the second most ' +
    'populous state capital ...');
    // log to console
    console.log('Great, ' + responce + ' is the capital of the U.S. state of Texas' + '\n' +
    'and the seat of Travis County, with portions extending into Hays and Williamson counties. ' + '\n' +
    'It is the 11th-most populous city in the United States and the 4th-most populous city in ' + '\n' +
    'Texas. It is the fastest growing large city in the United States, it is the second most ' + '\n' +
    'populous state capital ...');
}
else {
    alert ( 'Sorry, ' + responce + ' is not the capital of the U.S. state of Texas?!' );
}
*/

// Chapter 7 -------------------------------------------------------------------------------------------------------
// Using Variables
/*

var randomNumber = Math.random() / 100;
console.log( 'Your random number is = ' + randomNumber);

var myNameVar = "default ..." ;
console.log( 'my Name Str is = ' + myNameVar );
myNameVar = prompt("What is your name?" + '\n');
var myAlertStr = myNameVar;
// alert("Your name is = " + myAlertStr);
console.log( 'Your name is = ' + myAlertStr );
*/

// Chapter 6 -------------------------------------------------------------------------------------------------------
// Create Variables
/*

var myNameVar = "Ken" + '\n';
var myAlertStr = myNameVar;
alert("myAlertStr = " + myAlertStr);
console.log( 'myAlertStr = ' + myAlertStr );

// Variables ... and testing the TYPE OF variables
var x = 300 / 2;
console.log( 'Type of ' + x + ' = ' + typeof(x) + '\n' );

var str1 = "hello";
var str2 = " ";
var str3 = "World!";
var str4 = str1 + str2 + str3;
console.log( 'Type of ' + str4 + ' = ' + typeof(str4) + '\n' );

var h = 4 < 2;
console.log( 'Type of ' + h + ' = ' + typeof(h) + '\n' );

var k = 3 + "6";
console.log( 'Type of ' + k + ' = ' + typeof(k) + '\n' );

const a = 10;
const b = 3;
var i = 0;
i = a + b; // this is a boolean or undefinded
console.log( 'Type of ' + i + ' = ' + typeof(i) + '\n' );
*/

// Chapter 5 -------------------------------------------------------------------------------------------------------
/*
var x = 300/2;
console.log( 'Type of "x" = ' + typeof(x) + '\n' );

var str1 = "hello";
var str2 = " ";
var str3 = "World!";
var str4 = str1 + str2 + str3;
console.log( 'Type of "str4" = ' + typeof(str4) + '\n' );

var h = 4<2;
console.log( 'Type of "h" = ' + typeof(h) + '\n' );

//var a = 10;
//var b = 3;
var i = a<b; // this is a boolean or undefinded
console.log( 'Type of "i" = ' + typeof(i) + '\n' );

var k = 3+ "6";
console.log( 'Type of "k" = ' + typeof(k) + '\n' );

*/

// Chapter 4 -------------------------------------------------------------------------------------------------------
// Primitive Data Types: String, Number, and Boolean ...
/*
alert("Primitive Data Types: String, Number, Boolean, Null and Undfined!");
var str1 = "hello";
var str2 = " ";
var str3 = "World!";
console.log( str1 + str2 + str3 + '\n');

var x = 10;
var y = 2;
var z = x > y;
console.log( 'This is true, ' + x + ">" + y + "=" + z );

var h = 5;
var i = 8;
var k = h > i;
console.log( 'This is false, ' + h + ">" + i + "=" + k + '\n');

console.log( 'Type of "k" = , ' + typeof(k) + '\n');
*/

// Chapter 3 -------------------------------------------------------------------------------------------------------
// Console operations, other than a display
/*
alert("Console operations ");
var str = "this is a string value.";
console.log( 'Log to console, ' + str );
console.warn( 'Warning to console, ' + str );
console.error( 'Error to console, ' + str + '\n');
*/

// Chapter 2 -------------------------------------------------------------------------------------------------------
// Order of operations
/*
alert("Order of operations ... ");
var x = 0;
x = 30 - 2 * 3;
console.log( 'Operations answer 1 30 - 2 * 3 = ' + x );

var x = 0
x = (30 - 2) * 3
console.log( 'Operations answer 2 (30 - 2) * 3 = ' + x + '\n' );

// Common operators
alert("Common operators ... ");
var a = 2 + 1;
console.log( 'Addition 2 + 1 answer = ' + a );
var b = 2 - 1;
console.log( 'Subtraction 2 - 1answer = ' + b );
var c = 2 / 1;
console.log( 'Division 2 / 1 answer = ' + c );
var d = 2 * 1;
console.log( 'Mutiplication 2 * 1 answer = ' + d );
var e = 10 % 3;
console.log( 'Modulo 10 % 3 remainder = ' + e + '\n'); // returns the ramainder of the frirst value devided by the second.
*/

// Chapter 1 -------------------------------------------------------------------------------------------------------
/*
alert("Interactions in Javascript - alerts, confirms, and prompts! ... " + '\n');
alert("Hello World!");
confirm("I love Javascript!");
prompt("do you want to learn Javascript?");
*/
