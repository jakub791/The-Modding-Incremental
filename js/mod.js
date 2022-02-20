const modInfo = {
	name: `???`, //game name
	id: "mymod", //only change at the start of making game!
	author: "nobody",
	modFiles: ["layers.js", "tree.js"], //files to load

	discordName: "",
	discordLink: "",
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
const VERSION = {
	num: "0.0",
	name: "Literally nothing",
}

//changelog
const changelog = `<span><h1>Changelog:</h1><br>
	<h3 v-bind:style="{color: tmp.m.color}">v0.0</h3><br>
		- added stuff<br>
    - added tbings
    </span>`

//text on endgame screen
const winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
const doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Determines when the game "ends"
function isEndgame() {
	return player.m.distance.gte("1e1000")
}



// Less important things beyond this point!

//if you need more distance units for formatDistance (normally ends at mlt) add them here
const extraDistances = {
}

//if distance unit type is "log" it grows much slower (log10 is apllied)
const extraDistanceTypes = {  
}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() { 
  return 3600
} // Default is 1 hour which is just arbitrarily large


// Use this if you need to undo inflation from an older version. This is called when the save version is different from current version ,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}