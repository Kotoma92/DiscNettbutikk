function choosenDisc(i) {
	discFromArray = discArray[i];
	console.log(discFromArray);
	showDisc(discFromArray);
}

function toCart(disc) {
	if (disc.stock > 0) {
		cart.push(disc);
		disc.stock--;
		priceTotal += disc.price;
		undoClicked = false;
		showView();
	} else {
		showNoStock();
	}
	discClicked = true;
}

function undo(disc) {
	disc.stock++;
	priceTotal -= disc.price;
	cart.splice(-1);
	undoClicked = true;
	showView();
}

function buyDisks() {
	showBoughtDisks();
}

function undoAll() {
	cart.forEach((disc) => {
		disc.stock++;
	});
	priceTotal = 0;
	cart = [];
	undoClicked = true;
	discClicked = false;
	showUndoAll();
}
