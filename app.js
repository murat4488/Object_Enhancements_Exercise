// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

  /* Write an ES2015 Version */
  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  console.log(createInstructor('Murat', 'Guney'));

//   var favoriteNumber = 42;
//   var instructor = {
//     firstName: "Colt"
//   }
//   instructor[favoriteNumber] = "That is my favorite!"
/* Write an ES2015 Version */
const favoriteNumber = 42;

const instructor = function(firstName, favoriteNumber){
  return {
    [firstName] : favoriteNumber,
    [favoriteNumber] : firstName
    }
}

instructor[favoriteNumber] = "That is my favorite!"
console.log(instructor);

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }
 

 const instructor1 = {
    firstName: 'Colt',
    sayHi: () =>
      'Hi!'
    ,
    sayBye: ()=> this.firstName + ' says bye!'
    
  }
  
/* Write an ES2015 Version */
const {firstName="Colt", sayHi, sayBye} = instructor1;
console.log(sayBye());

// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:
// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.
function createAnimal(species, verb, noise){
    return {
        species:()=>{'cat', 'dog'}, 
        verb:{
            bark,
            bleet
        },
        noise:{
             bark:'woof',
             bleet:'baaa'   
        }
    }
}

createAnimal('dog', 'bark', 'woof');
//I have error. I did not complete code yet.!!  









