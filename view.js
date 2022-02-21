function createDiscView(y) {
	discView = '';
	for (let i = 0; i < y.length; i++) {
		let disc = y[i];
		discView += `
        <div onclick="choosenDisc(${i})" id="discBox${i}" class="discBox">
            <div>${disc.name}</div>
            <img class="discImage" src="./discbilder/${disc.image}" />
            <div>${disc.spec}</div>
            <div>Pris: ${disc.price},-</div>
            <div>Lager: ${disc.stock}</div>
        </div>
        `;
	}
}

showView();
function showView() {
	createDiscView(discArray);
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="buyDisks()">Kjøp disker</button> <button ${
			undoClicked ? 'hidden' : ''
		} onclick="undo(discFromArray)">Angre forrige</button>
    <button onclick="showCart()">Se Handlevogn</button>
    <div>Du har: ${
			cart.length
		} disker i handlevognen til den nette sum av ${priceTotal},-.</div>
    <div class="discContainer">${discView}</div><br>
    `;
}

function showDisc(discFromArray) {
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="showView()">Hjem</button><br>
    <button onclick="toCart(discFromArray)">Legg i Handlevogn</button>
    <div class="chosenDiscView">
    <div>${discFromArray.name}</div>
    <div>Pris: ${discFromArray.price},-</div>
    <img class="singleDisk" src="./discbilder/${discFromArray.image}" />
    <div>Spec: ${discFromArray.spec}</div>
    <div>Vekt: ${discFromArray.weight}</div>
    <div>På lager: ${discFromArray.stock}</div>
    </div>
    `;
}

function showBoughtDisks() {
	createDiscView(cart);
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="location.href = 'https://www.youtube.com/watch?v=Gc2u6AFImn8';" >Ut av butikken</button> <button onclick="showView()">Hjem</button>
    <div>Du har kjøpt: ${
			cart ? cart.length : ''
		} disker til en pris av ${priceTotal},-, takk for handelen!</div>
    <div class="discContainer">${discView}</div><br>
    `;
}

function showUndoAll() {
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="showView()">Hjem</button>
    <div>Du har angret kjøpet</div>
    `;
}

function showNoStock() {
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="showView()">Hjem</button>
    <div>Denne disken er ikke på lager</div>
    `;
}

function showCart() {
	createDiscView(cart);
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="buyDisks()">Kjøp Disker</button> 
    <button onclick="undoAll()">Tøm Handlevogn</button>
    <div>Du har: ${cart ? cart.length : ''} disker i handlevognen!</div>
    <div>Pris på disker i handlevogn: ${priceTotal},-</div>
    <div class="discContainer">${discView}</div><br>
    `;
}
