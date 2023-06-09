let name : string | number
let age : number
let hobbies : string[]
hobbies = ['log', 'or']
let role : [number, string]

type Person = {
  name: string,
  age: number
}

let person : Person = {
  name: 'Rodrigue',
  age: 20
}

interface Props {
  name: string;
  age: number;

}

interface Guy extends Props {
  profession : string
}
function printName(name: string){
  console.log(name)
}