
const randomValues  = [
    'Hello',
    0,
    true,
    { name: 'John Doe' },
    [3,2],
    () => 'Hello World'
]

//  create a function that receives as type paramete an array of any elements, then return it ramdomly using the same type
//  from the parameter type

function getRandomElement<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  const randomElement = getRandomElement(randomValues);
  console.log(randomElement);
  

const numbers = [2,3,4,5,1] as const

// Create a function that receives an array of numbers as const, then type the returned type values sorted

//YOUR
//CODE
//HERE

const value = true
//  create that doesnt receive any parameter type, but infer the type of the returned value

function getValue<D>(param: D): D {
    return param;
  }

//  create a function that infer the type of the returned value, but receives a parameter type, if the parameter type exist,
//  use it to determine the returned type, if not, use the type of the given 
//  you can check the definition od useSatate in react to see how it works.

function myFunction<T>(arg: T): T {
    return arg;
  }
  
  