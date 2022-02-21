function createDiscView(y) {
	discView = '';
	for (let i = 0; i < y.length; i++) {
		let disc = y[i];
		discView += `
        <div onclick="choosenDisc(${i})" id="discBox${i}" class="discBox">
            <div>${disc.name}</div>
            <img class="discImage" src="./discbilder/${disc.image}" />
            <div>${disc.spec}</div>
        </div>
        `;
	}
}

showView();
function showView() {
	createDiscView(discs);
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="buyDisks()">Kjøp disker</button> <button onclick="undo()">Angre forrige</button>
    <div>Du har: ${cart ? cart.length : ''} disker i handlevognen</div>
    <div class="discContainer">${discView}</div><br>
    `;
}

function showDisc(disc) {
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="showView()">Hjem</button><br>
    <button onclick="toCart(disc)">Legg i Handlevogn</button>
    <div class="chosenDiscView">
    <div>${disc.name}</div>
    <img class="singleDisk" src="./discbilder/${disc.image}" />
    <div>Spec: ${disc.spec}</div>
    <div>Vekt: ${disc.weight}</div>    
    </div>
    `;
}

function showBoughtDisks() {
	createDiscView(cart);
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="location.href = 'https://www.youtube.com/watch?v=Gc2u6AFImn8';" >Ut av butikken</button> <button onclick="undoAll()">Angre kjøpet</button>
    <div>Du har kjøpt: ${
			cart ? cart.length : ''
		} disker, takk for handelen!</div>
    <div class="discContainer">${discView}</div><br>
    `;
}

function showUndoAll() {
	document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="showView()">Hjem</button>
    <div>Du har angret kjøpet</div>
    `;
}
