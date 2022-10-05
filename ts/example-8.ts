// We need a Kaiju class
// All Kaiju have name, power and type. 
// Type can be: lizard, flying, or ape. 
// Be sure to include a constructor in the 
// Kaiju class that initializes it's properties!

enum KaijuType { 
	lizard,
	flying,
	ape,
}

class Kaiju {
	name: string
	power: number
	type: KaijuType
}

export {
	Kaiju, 
	KaijuType
}
