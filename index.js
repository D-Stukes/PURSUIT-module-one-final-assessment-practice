const characters = require('./data/swapi');
// DO NOT CHANGE THE LINE ABOVE

/**
 * listAllCharacters()
 * -------------------
 * Returns all character names from an array of characters. If the inputted array is empty, returns 0.
 * 
 * @param {Object[]} characters - an array of movie characters
 * @returns {string[]} an array of strings, which are character names
 *
 * EXAMPLE:
 * 
 * listAllCharacters([])
 * 
 * //> 0
 * 
 * 
 * 
 * listAllCharacters(characters);
 *
 * //> [
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Biggs Darklighter',
  'Obi-Wan Kenobi'
   ];
 *
 */

function listAllCharacters() {
  let starWarsChars = []

  // if(results.length === 0)
  //return 0

  for(let character of characters){
    starWarsChars.push(character["name"])
  }

  // if(starWarsChars.length === 0 || characters.length === 0){
  //   starWarsChars.push(0)
  // }

  return (starWarsChars)
}
//UNCOMMENT THE LINES BELOW TO TEST YOUR SOLUTION
    console.log(listAllCharacters([]));
  // console.log(listAllCharacters(characters));


/**
 * averageHeightOfAllCharacters()
 * ------------------------------
 * Returns the average height of all of the listed characters
 *
 * @param {Object[]} characters - an array of movie characters
 * @returns {number} - a number representing the average height
 *
 * No example for this one. You should be able to find the average at this point
 */

function averageHeightOfAllCharacters() {
  let strHeight = ""
  let charHeight = 0
  let totalHeight = 0
  let avgHeight = 0
  let counter = 0

  for(let character of characters){
    strHeight = (character["height"])
    charHeight = +strHeight
    totalHeight = totalHeight + charHeight
    counter++
  }
   avgHeight = totalHeight/counter

   return avgHeight
}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
//console.log(averageHeightOfAllCharacters(characters))

/**
 * countByEyeColor()
 * -----------------
 * Returns an object where the keys are the eye colors and the values are number of characters with that eye color.
 * If the inputted array is empty, return 'Nothing to check.'
 *
 * @param {Object[]} characters - an array of movie characters
 * @returns {Object} - keys are the eye colors and values are the number of characters with that eye color
 *
 * EXAMPLE:
 * countByEyeColor([])
 *
 * //> 'Nothing to check.'
 *
 * countByEyeColor(characters)
 *
 * { blue: 3, yellow: 2, red: 2, brown: 2, blue-gray: 1 };
 *
 */

function countByEyeColor() {
  
  let iColors = {}
  let colorNum = 0
  let blues = 0
  let yellows = 0
  let reds = 0 
  let browns = 0 
  let blue_grays = 0
    
      for (char of characters){
        //eyeColor = (char["eye_color"])
        iColors[char["eye_color"]] = 0
       // iColors[eyeColor] = 0  
      }
       //console.log(iColors)
        
        for (char of characters){
          //console.log("char eye-color", char["eye_color"])
          let color = char["eye_color"]
           if(color === "blue") {
             blues = blues + 1
             iColors["blue"]= blues
           }
           if(color === "yellow") {
             yellows++
             iColors.yellow = yellows
           }
           if(color === "red") {
             reds++
             iColors.red = reds
           }
           if(color === "brown") {
             browns++
             iColors.brown = browns
           }          
           if(color === "blue-gray") {
             blue_grays++
             iColors["blue-gray"] = blue_grays
           }       
         }

   return iColors

}

//UNCOMMENT THE LINES BELOW TO TEST YOUR SOLUTION
// console.log(countByEyeColor([]))
 console.log(countByEyeColor(characters));

/**
 * getAllCharactersCreatedAfterYear()
 * ----------------------------------
 * Returns an array of all characters created on or after a certain year
 * 
 * @param {Object[]} characters - an array of movie characters
 * @param {Number} date - date to be considered for when character object was created
 * @returns {String[]} - returns an array of character names
 * 
 * EXAMPLE:
 * getAllCharactersCreatedAfterYear(characters, 2014)
 *
 * [
  'R2-D2',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Obi-Wan Kenobi'
 * ]
 * 
 * 
 *
 */

function getAllCharactersCreatedAfterYear() {}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
// console.log(getAllCharactersCreatedAfterYear(characters, 2014));

/** getCharactersInMovie()
 *  ----------------------
 *  Returns an object of characters who were in a certain film. 
 *  Their id will be the key and their name should be the value. 
 *  Title should be CASE INCENSITIVE meaning, 
 *  if the string argument is e.g. 'star wars' or 'STAR WARS' or 'STaR wArs' 
 *  and there is a film called 'Star Wars' in the character's data, 
 *  the character was in the film and should be returned.
 * 
 *  @param {Object[]} characters - an array of movie characters
 *  @param {String} - string with the title of the movie
 *  @returns {Object} - key should be the id and the value should be their name
 *
 * EXAMPLE:
 *
 * getCharacterIds(characters, 'return of the jedi')
 * 
 * //> {
   L3kdddkek: 'Luke Skywalker',
   Idkk99dkc: 'C-3PO',
   Kekk39dis: 'R2-D2',
   O894iriie: 'Darth Vader',
   Viie78949: 'Leia Organa',
   Ghfjkd998: 'Obi-Wan Kenobi'
   }
 */

function getCharactersInMovie() {}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
// console.log(getCharactersInMovie(characters, 'return of the jedi'));
