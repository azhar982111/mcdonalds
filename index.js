const foodItem = document.getElementsByClassName("food");
const displayDiv = document.querySelector("#main-section");
const orderBtn = document.querySelector("#order-btn");
const orderid2 = document.getElementById("orderDiv")

const foodImages = {
	burger: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
	fries: "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG",
	icecream: "https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg",
	smoothie: "https://www.simplyrecipes.com/thmb/yrUVXAmeScpZH4DM7tY1WYR5cmg=/3776x2832/smart/filters:no_upscale()/Simply-Recipes-Coffee-Smoothie-LEAD-7-22cbbd9cd6844b97b68c3a69c8a40561.jpg",
	chicken: "https://i.ytimg.com/vi/-lwHfv0iMgY/maxresdefault.jpg",
	shake: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hha2V8ZW58MHx8MHx8&w=1000&q=80",
};

let foodPromises = [];

for (let i = 0; i < foodItem.length; i++) {
	let food = foodItem[i];

	food.addEventListener("click", function () {
		if (food.checked) {
			let myPromise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(food.value);
				}, 1000 * i);
			});

			foodPromises.push(myPromise);
		} else if (food.checked === false) {
			// foodPromises = foodPromises.filter((e) => e.then((r) => r !== food.value));
		}
	});
	console.log(foodPromises)
}


var ordernumber = "MAC-D-01"
orderBtn.addEventListener("click", function () {
	// console.log(foodPromises)
	
	foodPromises.map((e) => {
		e.then((result) => {
			let itemDiv = document.createElement("div");
			itemDiv.className = "food-item";
			let itemImg = document.createElement("img");
			

			itemImg.src = foodImages[result];
			itemImg.style.width = "200px";
			itemImg.style.height = "200px";
			itemImg.className = result;

			itemDiv.appendChild(itemImg);

			displayDiv.appendChild(itemDiv);
			foodPromises = [];

			
			
		});
	});
	orderid2.innerText = ordernumber
});

