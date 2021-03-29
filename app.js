import Alligator from './Model/a.js'
import Bear from './Model/b.js'
import Cobra from './Model/c.js'
import Dragon from './Model/d.js'
import Ewok from './Model/e.js'
import Fairy from './Model/f.js'
import God from './Model/g.js'
import Howlers from './Model/h.js'

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
let Yogi = new Bear("Yogi", "brown", "M", 60, "sharp");
let Kai = new Cobra("Kai", "black/red", "M", 35);
let Drako = new Dragon("Drako", "black", "ancient", "fire", "solid");
let Chirpa = new Ewok("Chief Chirpa", "brown", "brown", 60, "omnivore");
let Sapphire = new Fairy("Sapphire Lightningvale", "purple", 5, "Holy", "Glows")
let Thor = new God("Thor", "large", "lightning", "hammer", "Zeus", "might")
let Mangler = new Howlers("Mangler", "black", 4, "sharp", 7, "bite")

ally.eat('people');
ally.speak('raww');

Yogi.eat('fish');
Yogi.speak('raw');

Kai.eat('mouse');
Kai.speak('hiss');

Drako.eats('sheep');
Drako.attack('swipe');

Chirpa.eats('jerky');
Chirpa.attack('stick');

Sapphire.eats('teeth');
Sapphire.attack('shoots an arrow');

Thor.issue('crime');
Thor.destroys('New York');

Mangler.eats('Captain Tom');
Mangler.attacks('bites');