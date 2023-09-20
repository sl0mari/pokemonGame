let pikachu = "0025"
let animDataPath = './img/pokemonSprites/' + pikachu + '/AnimData.json';
import data from './img/pokemonSprites/0025/AnimData.json' assert { type: 'json' };
	console.long(data);
/*
function fetchAnimData(pokemon){
	fetch("img/pokemonSprites/" + pokemon + "/AnimData.json")
	.then(function(resp){
		return resp.json();
	})
	.then(function(data){
		console.log(data);
	});
}
*/