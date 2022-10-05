

// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape

import { Kaiju, KaijuType } from "./example-8"

// Import Kaiju and KaijuType from example-8.js

// Fix the rampage function so it makes use of the KaijuType enum

function rampage(kaiju:Kaiju, city: string): string {
	// const { name, type, power } = kaiju
	let action: string

	switch(kaiju.type) {
		case KaijuType.ape:  
			action = 'smash'
			break

		case KaijuType.lizard:
			action = 'burn'
			break

		case KaijuType.flying: 
			action = 'flap'	
			break
	} 
	let result = `${kaiju.name} ${action} over ${city} causing ${kaiju.power * 10000} damage!`
	return result
}

console.log(rampage({name:'Gojira', type:KaijuType.lizard, power:90}, 'tokyo'))
console.log(rampage({name:"Mothra", type:KaijuType.flying, power:40}, 'istanbul'))
console.log(rampage({name:'Kong',type:KaijuType.ape, power:88}, 'bishkek'))

