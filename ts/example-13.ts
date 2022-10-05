
// Functions can be decribed as a type.
// This happens when you need to pass a callback 
// or have a function that returns another function. 
// Read about function type expressions:

// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions

// This function returns a function that returns a number

function count(): () => number {
	let n: number = 0
	return (): number => {
		return n += 1
	}
}

// This function takes an array and returns an item from
// the array

function next(arr: Array<any>): () => any {
	let i = -1
	return (): any => {
		i += 1
		i = i === arr.length ? 0 : i
		return arr[i]
	}
}


// This function returns a function that generates a 
// die roll. 

function dice(sides: number): (n: number) => number {
	return (n: number): number => {
		return Math.floor(Math.random() * sides) * n
	}
}

export {
	count,
	next,
	dice
}
