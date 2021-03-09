class DefaultMap extends Map { //no Conozco la clase Map
	
	constructor(defaultValue) {
		super();
		this.defaultValue = defaultValue;
	}

	get(key){
		if (this.has(key)){
			return super.get(key);
		} else {
			return this.defaultValue;		
		}
	}

}

class Histogram {

	constructor() {
		this.letterCount = new DefaultMap(0);
		this.totalLetters = 0;
	}

	add(text){
		text = text.replace(/\s/g,"").toUpperCase(); //no entiendo la expresión regular
		for (let character of text) {
				let count = this.letterCount.get(character);
				this.letterCount.set(character, count+1);
				this.totalLetters++;
		}
	}

	toString(){
		let entries = [...this.letterCount]; //no entiendo por que crear un array iniciando con tres puntos
		
		entries.sort((a,b)=>{ //no entiendo la lógica de este metodo sort o este ordenamiento
			if (a[1]===b[1]) {
				return a[0] < b[0]? -1 : 1;
			} else {
				return b[1] - a[1];
			}
		});

		for (let entry of entries) {
			entry[1] = entry[1] / this.totalLetters * 100;
		}
		
		entries = entries.filter(entry => entry[1]>= 1);
		let lines = entries.map(
				([l,n])=>`${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);//no entiendo esta función del map
		return lines.join("\n");
	}

}

async function histogramFromStdin(){
	process.stdin.setEncoding("utf-8");
	let histogram = new Histogram();
	for await (let chunk of process.stdin) { //no conozco este tipo for await.
		histogram.add(chunk);
	}
	return histogram;
}

histogramFromStdin().then(histogram =>{
	console.log(histogram.toString());
});
