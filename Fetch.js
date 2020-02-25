let recipes=[];
fetch("https://cors-anywhere.herokuapp.com/https://us.api.blizzard.com/d3/data/artisan/blacksmith?locale=en_US&access_token=US6TfTT1VgVj8I6y2Zibl7Lhh4zCSIin5g")
.then((response) => {
	return response.json();
})
.then((data) => {
	console.log(data);
	//CraftItem(string input);
	//const item = data["trainedRecipes"];
	console.log(data.training.tiers[0].trainedRecipes[0].name); //returns an error
	//const crafting = data.trainedRecipe.name.reagents.name;
	//console.log(crafting);
	for(i=0; i< data.training.tiers.length; i++){
		for(j=0; j< data.training.tiers[i].trainedRecipes.length; j++){
			var recipe=data.training.tiers[i].trainedRecipes[j];
			recipes.push(recipe);
		}
	}
	console.log(recipes);
	/* 
	HAVE USER INPUT WORD(ITEM THEY WANT CRAFTED)
	SEARCH THROUGH API DATA FOR ITEM(PARSE THROUGH FILE FOR INPUTTED WORD)
	RETURN ALL REAGENTS INFO(NAME, QUANTITY, TOTAL VALUE)
	*/
	
})

function CraftItem(){
	var input = document.getElementById("itemName").value;
	

	for(i=0;i<recipes.length;i++){
	if(input === recipes[i].name){
		console.log(recipes[i].name);
		for(j=0;j<recipes[i].reagents.length;j++){
				//console.log(recipes[i].name);
				document.getElementById("Craftables").innerHTML += recipes[i].reagents[j].item.name + " " + recipes[i].reagents[j].quantity + "<br/>";
				console.log(recipes[i].reagents[j].item.name);
				console.log(recipes[i].reagents[j].quantity);
		}
	}		

	}
}