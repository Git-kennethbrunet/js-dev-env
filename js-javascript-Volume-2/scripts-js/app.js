
console.log("Loading app.js with ES2015 format, built w/Webpack and Babel loader in js-javascript-Volume-2 ..." + "\n");

// js-javascript-Volume-2
// Chapter 5 ---------------------------------------------------------------------------------------------------------
// Function & addisional practice w/functions 

// Example 3

var name = "Mark";
var name2 = "Lisa";
var name3 = "Denny";
var msg = "Hi! ";

function sayHello(message, person) {
  var strName = person;
  var strMsg = message;
  alert(strMsg + strName);
  console.log(strMsg + strName);
}

sayHello(msg, name); // invole a function with 2 arguments(NOTE: if undefined; you must pass a value type...)
sayHello(msg, name2);
sayHello(msg, name3);
sayHello("This is the first argument", ", this is the second agument!")

/* Example 2

var name = "Mark";
var name2 = "Lisa";
var name3 = "Denny";
var msg = "Hi! ";

function sayHello (message, person) {
  var strName = person;
  var strMsg = message;
  alert(strMsg + strName);
  console.log(strMsg + strName);
}

sayHello(msg, name);
sayHello(msg, name2);
sayHello(msg, name3);

*/

/* Example 1 

var name = "Mark";
var name2 = "Lisa";
var name3 = "Denny";

console.log("Hi! " + name);
console.log("Hi! " + name2);
console.log("Hi! " + name3);

alert("Hi! " + name + ", " + name2 + ", " + name3 + ", ");

*/

// Chapter 4 ---------------------------------------------------------------------------------------------------------
// Control Flows "do while and while" loops statement

/*

 while looping (sample example 1)
console.log("\n" + "Continue with 'CheerUp' sample #4...");

var sad = confirm("Would you like to be cheered up?");
while (sad) {
  alert("What do you call a booerang that doesn't come back? A stick... Lol....!")
  var yes = confirm("Would you like to continue our session?")
  if (yes) {
    var response = prompt("Tell me about your blessing!", "Type your blessings here!"); 
    if (response) {
      alert("Wow! You sure have a lot to be Greatful for!")
      sad = false;
    }
  } else {
    sad = false;
  }
}

 while looping (example 3) - this code will only run if always true.
confirm("Continue with 'while' looping example 3?")
console.log("\n" + "Continue with 'while' example #3...");
var p = 1;
while (p < 11) {  
  console.log("Prinitng number " + p + " to console.log.");
  p++;
}

 do while looping (example 2) - this code will always run once.
confirm("Continue with 'do while' looping looping example 2?")
console.log("\n" + "Continue with 'do while' example #2...");  next line break
var p = 1;
do {  
  console.log("Prinitng number " + p + " to console.log.");
  p++;
} while (p < 11);

 do while looping (example 1)
confirm("Continue wiht 'do while' looping example 1?")
console.log("\n" + "Continue with 'do while' example #1...");  next line break
var p = 1;
do {
  if (p % 3 === 0 && p != 0) {
    if (p % 5 === 0) {
      console.log("Number " + p + " fizzbuzz");
    } else {
      console.log("Number " + p + " fizz");
    }
  } else if (p % 5 === 0 && p != 0) {
    console.log("Number " + p + " buzz");
  } else {
    console.log("Number " + p + " ---");
  }
  p++;
} while (p <= 100);
*/

// Chapter 3 ---------------------------------------------------------------------------------------------------------
// Control Flows "for" loops statement
/*

for (var a = 1; a <= 100; a++) {
  if (a % 3 === 0 && a != 0) {
    if (a % 5 === 0) {
      console.log("Number " + a + " fizzbuzz");
    } else {
      console.log("Number " + a + " fizz");
    }
  } else if (a % 5 === 0 && a != 0) {
    console.log("Number " + a + " buzz");
  } else {
    console.log("Number " + a + " ---");
  }
}

confirm("continue to next?")

if (randomNumber % 3 === 0 && randomNumber != 0) {  modulo
  if (randomNumber % 5 === 0) {
    console.log("fizzbuzz = " + randomNumber);
  } else {
    console.log("fizz = " + randomNumber);
  }
} else if (randomNumber % 5 === 0 && randomNumber != 0) {
  console.log("buzz = " + randomNumber);
} else {
  console.log(randomNumber);
}

confirm("continue to next?")

var fizzbuzzLoopCount = 100;
var fizzbuzzCount = 0;
var fizzCount = 0;
var buzzCount = 0;
var otherCount = 0;
var totalCount = 0;
var x = 1;

for (x; x <= fizzbuzzLoopCount; x++) {

  var randomNumber = Math.round(Math.random() * 15);  generate & round (by 15)
  if (randomNumber % 3 === 0 && randomNumber != 0) {  modulo
    if (randomNumber % 5 === 0) {
      //console.log("Line " + x + " fizzbuzz = " + randomNumber);
      fizzbuzzCount++;
    } else {
      //console.log("Line  " + x + " fizz = " + randomNumber);
      fizzCount++;
    }
  } else if (randomNumber % 5 === 0 && randomNumber != 0) {
    //console.log("Line  " + x + " buzz = " + randomNumber);
    buzzCount++;
  } else {
    //console.log("Line  " + x + " " + randomNumber);
    otherCount++;
  }

}
console.log("+-- Fizz Buzz Count --");
console.log("+ Fizz Count = " + fizzCount);
console.log("+ Buzz Count = " + buzzCount);
console.log("+ Other Count = " + otherCount);
console.log("+ Fizzbuzz Count = " + fizzbuzzCount);
totalCount = otherCount + buzzCount + fizzCount + fizzbuzzCount;
console.log("+ =====================");
console.log("+ Total Count = " + totalCount);

*/

// Chapter 2 ---------------------------------------------------------------------------------------------------------
// Control Flows "for" loops statement
// this should be checked for logic errors; the inner condition must be set to false at some point or infinity loop...

/*

 var i = 10;
 for (i; i > 0; i--) {
   console.log("Number " + i);
   alert("Number " + i);
 }
 console.log("NEXT LOOP");
 var x = 1;
 for (x; x <= 10; x++) {
   console.log("Number " + x);
   alert("Number " + x);
 }

 Control Flows "switch" statement

/*
 Astrological signs
var sign = "Aquarius, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, and Pisces?"
var signMsg = "What is you astrological sige? " + sign + "?";
var signSelection = prompt(sign);
signSelection = signSelection.trim().toLowerCase();
switch (signSelection) {
  case "aquarius":
    alert("Intellectual stimulation is by far the greatest aphrodisiac for Aquarius. There"s nothing that can "
      + "attract an Aquarius more than an interesting conversation with a person. Openness, communication, imagination and "
      + "willingness to risk are the qualities that fit well in the perspective of life of this zodiac sign. Their compatibility "
      + "with other signs can be complex, Integrity and honesty are essential for anyone who wants a long-term relationship "
      + "with this dynamic person. In love, they are loyal, committed and not at all possessive - they give independence to "
      + "their partners and consider them as equals.");
    break;
  case "taurus":
    alert("One always has to be prepared to have patience for a Taurus lover. They are extremely sensual, "
      + "touch, smell and all pleasurable senses being extremely important to them, but they also need time to create "
      + "a safe environment and relax in their sexual encounters. When they create enough intimacy with a loved one, "
      + "they become a bit gooey, sometimes even needy, and have to keep their emotions in check, holding on to practical "
      + "reasoning, while embracing change and initiative of their partner at all times. ");
    break;
  case "gemini":
    alert("Fun and always ready for an intellectual challenge, Gemini sees love first through communication and "
      + "verbal contact, and find it as important as physical contact with their partner. When these two combine, obstacles "
      + "all seem to fade. Inquisitive and always ready to flirt, a Gemini could spend a lot of time with different lovers "
      + "until they find the right one who is able to match their intellect and energy. They need excitement, variety and "
      + "passion, and when they find the right person, a lover, a friend and someone to talk to combined into one, they will "
      + "be faithful and determined to always treasure their heart.");
    break;
  case "cancer":
    alert("Cancer is a very emotional sign, and feelings are the most important thing in their relationships. Gentle "
      + "and caring, they will show their sensibility to the world without even thinking they might get hurt. For partners, they "
      + "always choose a person who is able to understand them through non-verbal, silent contact, and a shared daily routine, "
      + "and their affection won"t last long with superficial, flaky or unreliable partners. The lack of initiative these "
      + "individuals suffer from won"t make it easy for them to build a sex life they wish for, if they don"t find a partner "
      + "who is able to make them feel calm, protected, and free to express.");
    break;
  case "leo":
    alert("This Fire sign is passionate and sincere and its representatives show their feelings with ease and clarity. "
      + "When in love, they are fun, loyal, respectful and very generous towards their loved one. They will take the role of a leader "
      + "in any relationship, and strongly rely on their need for independency and initiative. This can be tiring for their partner "
      + "at times, especially if they start imposing their will and organizing things that aren"t theirs to organize in the first "
      + "place. Each Leo needs a partner who is self-aware, reasonable and on the same intellectual level as them. Their partner "
      + "also has to feel free to express and fight for themselves, or too much light from their Leo"s Sun might burn their own "
      + "personality down.");
    break;
  case "virgo":
    alert("The sign of Virgo leads Venus to its tragic fall and speaks of one’s inability to feel worthy, beautiful, "
      + "or lovable. Compatibility of Virgo with other zodiac signs is mostly based on the ability of their partner to give them "
      + "all the love they need to start feeling safe and open up enough to show their soft, vulnerable heart. They will rarely "
      + "have direct statements of love, but intimacy brings out all of the beauty of their emotional self-expression. A Virgo "
      + "will prefer a stable relationship than having fun, casual lovers, except if they become one, using their charm and "
      + "superficial communication to win hearts without ever investing their own. Methodical and intellectually dominant, each "
      + "Virgo seems to have an equation in their mind that their partner has to follow.");
    break;
  case "aries":
    alert("Aries is a fire sign with the need to take initiative when it comes to romance. When they fall in love, "
      + "they will express their feelings to the person they are in love with, without even giving it a considerable thought. "
      + "The compatibility of an Aries with other signs of the zodiac is very complex. Aries in love may shower their loved "
      + "one with affection, sometimes even an excess of it, forgetting to check the information they get in return. They "
      + "are very passionate, energetic and love adventures. An Aries is a passionate lover, sometimes even an addict to "
      + "pleasures of the flesh and sexual encounters.");
    break;
  case "scorpio":
    alert("Scorpio is the most sensual sign of the zodiac. Scorpios are extremely passionate and intimacy is "
      + "very important to them. They want intelligent and honest partners. Once Scorpios fall in love, they are very "
      + "dedicated and faithful. However, they enter into a relationship very carefully, because sometimes they need a "
      + "lot of time to build trust and respect for partners.");
    break;
  case "sagittarius":
    alert("People born under the sign of Sagittarius are very playful and humorous, which means that they will enjoy "
      + "having fun with their partners. Partners who are equally open, will certainly suit the passionate, expressive "
      + "Sagittarius who is willing to try almost anything... "
      + "For this sign there is always a thin line between love and sex. Their love for change and diversity can bring a "
      + "lot of different faces in their bedroom. But when they are truly in love, their very loyal, faithful and dedicated. "
      + "They want their partners to be intellectual, sensitive and expressive.");
    break;
  case "capricorn":
    alert("It is not easy to win over the attention and the heart of a Capricorn, but once their walls break "
      + "and their heart melts they stay committed for a lifetime. Their Their relationships with other signs can be "
      + "challenging due to their difficult character, but any shared feeling that comes from such a deep emotional "
      + "place is a reward for their partner’s efforts. Shown sensitivity comes through acts rather than words, and "
      + "years are often needed for them to open enough to chat about their actual emotional problems.");
    break;
  case "aquarius":
    alert("Intellectual stimulation is by far the greatest aphrodisiac for Aquarius. There"s nothing that can "
      + "attract an Aquarius more than an interesting conversation with a person. Openness, communication, imagination and "
      + "willingness to risk are the qualities that fit well in the perspective of life of this zodiac sign. Their "
      + "compatibility with other signs can be complex, Integrity and honesty are essential for anyone who wants a "
      + "long-term relationship with this dynamic person. In love, they are loyal, committed and not at all possessive - "
      + "they give independence to their partners and consider them as equals.");
    break;
  case "pisces":
    alert("Deep in their hearts, Pisces-born are incorrigible romantics. They are very loyal, gentle and "
      + "unconditionally generous to their partners. Pisces are passionate lovers who have a need to feel a real connection "
      + "with their partners. Short-term relationships and adventures are not peculiar to this zodiac sign. In love and "
      + "relationship, they are blindly loyal and very caring.");
    break;
  default:
    break;
}
*/

/*
 js-javascript-Volume-1 (Chapter 1-11)
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

/*
 Zombie Apocalypse game
var weapons = "A Bow and arrow, an Axe or the Rubber chicken next to you?"
var zombieMsg = "A widespread rise of zombies hostile to human life engages in a general assault on civilization; you are in a looting a store and suddenly a zombie burst though the door!!!"
alert(zombieMsg);

 Selection of weapon
var zombieMsg2 = "You search agound franticlly for a weapon. What do you choose? " + weapons + "?";
var weaponChoiceIs = prompt(zombieMsg2);
var radnomNumber = Math.round(Math.random());

weaponChoiceIs = weaponChoiceIs.trim().toLowerCase();  normilize the string to lower case
if (weaponChoiceIs === "bow and arrow") {
  alert("The " + weaponChoiceIs + " is a great selection, this give you the ability to shoot from far away!");
} else if (weaponChoiceIs === "axe") {
  alert("The " + weaponChoiceIs + " is a great selection, this give you the ability for close hand-to-had combat!");
} else if (weaponChoiceIs === "rubber chicken") {
  alert("The " + weaponChoiceIs + " is a good selection, but not as deadly as the rest!");
} else {  default
  alert("This selection is not valid, you must have a weapon, so you grab the rubber chicken next to you!");
  weaponChoiceIs = "rubber chicken";
}

 Attacking the zombie 50/50
alert("You attack the zombie with the " + weaponChoiceIs + "!!!");

 50/50 chance of killing the zombie
if (radnomNumber === 0) {
  alert("Ouch... you have been attack and the zombie bites you!!! You are now part of the Zombies of the apocalypse.");
} else if (radnomNumber === 1) {
  alert("You have been attack by the zombie... you have killed the zombie with the " + weaponChoiceIs + "!!!");
}
*/

Control Flows and comparison operators

/*
var randomNumber = Math.round(Math.random() * 15);  generate & round (by 15)
if (randomNumber % 3 === 0 && randomNumber != 0) {  modulo
    if (randomNumber % 5 === 0) {
        alert("fizzbuzz = " + randomNumber);
    } else {
        alert("fizz = " + randomNumber);
    }
} else if (randomNumber % 5 === 0 && randomNumber != 0) {
    alert("buzz = " + randomNumber);
} else {
    console.log(randomNumber);
}
*/
