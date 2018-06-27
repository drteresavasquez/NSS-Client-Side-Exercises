let bandNumber = 1

const takeNumber = function (band) {
    // CONCAT THE NUMBER AND BAND NAME
    console.log(`${bandNumber}. ${band}`)
    // INCREMENT BANDNUMBER BY 1 AFTER THE FIRST BAND
    bandNumber++
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console