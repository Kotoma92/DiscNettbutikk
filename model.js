var discView = '';
var priceTotal = 0;
var undoClicked = true;
var discClicked = false;
var cart = [];
const discArray = [
	{
		name: 'MVP Atom',
		type: 'Putter',
		spec: '3/3/0/1',
		weight: '175g',
		image: 'mvp-atom.jpg',
		stock: 15,
		price: 149,
	},
	{
		name: 'MVP Matrix',
		type: 'Midrange',
		spec: '5/4/-1/2',
		weight: '173g',
		image: 'mvp-matrix.jpg',
		stock: 2,
		price: 189,
	},
	{
		name: 'MVP Relay',
		type: 'Fairway Driver',
		spec: '6/5/-2/1',
		weight: '172g',
		image: 'mvp-relay.jpg',
		stock: 4,
		price: 179,
	},
	{
		name: 'MVP Volt',
		type: 'Fairway Driver',
		spec: '8/5/-0.5/2',
		weight: '175g',
		image: 'mvp-volt.jpg',
		stock: 1,
		price: 179,
	},
	{
		name: 'MVP Fission Wave',
		type: 'Distance Driver',
		spec: '11/5/-2/2',
		weight: '165g',
		image: 'mvp-fission-wave.jpg',
		stock: 0,
		price: 199,
	},
	{
		name: 'MVP Wave',
		type: 'Distance Driver',
		spec: '11/5/-2/2',
		weight: '175g',
		image: 'mvp-wave.jpg',
		stock: 10,
		price: 199,
	},
	{
		name: 'Axiom Fireball',
		type: 'Distance Driver',
		spec: '9/3.5/0/3.5',
		weight: '175g',
		image: 'axiom-fireball.jpg',
		stock: 2,
		price: 249,
	},
];
