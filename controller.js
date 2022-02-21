function choosenDisc(i) {
	disc = discs[i];
	console.log(disc);
	showDisc(disc);
}

function toCart(disc) {
	cart.push(disc);
	showView();
}

function undo() {
	cart.splice(-1);
	showView();
}

function buyDisks() {
	showBoughtDisks();
}

function undoAll() {
	cart = [];
	showUndoAll();
}
