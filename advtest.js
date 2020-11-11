
let roomText = document.getElementById("mainText");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let currentRoom;
import {rooms2} from "./roomlist.js";
console.log(rooms2);
const rooms={
	mainRoom:{
		roomName: "roomTest",
		roomText: "You enter the room. Torchlight flickers down the corridor ahead.",
		option1:{
			optionName: "newRoom",
			optionText:  "Go North"
		},
		option2:{
			optionName: null,
			optionText: "Go West"
		},
		option3:{
			optionName: null,
			optionText: "Go South"
		},
		option4:{
			optionName: null,
			optionText: "Go East"
		}
	},
	newRoom:{
		roomName: "newRoom",
		roomText: "You awake to the pain of a new existence in a dank womb of darkness and decay.",
		option1:{
			optionName: null,
			optionText: "Go North"
		},
		option2:{
			optionName: null,
			optionText: "Go West"
		},
		option3:{
			optionName: null,
			optionText: "Go South"
		},
		option4:{
			optionName: "mainRoom",
			optionText: "Go North"
		}
	}
}

///load main room first
loadRoom(rooms["mainRoom"]);
///buttonclicked function
function buttonClicked(button){
	console.log("clicked " + button + " " + currentRoom[button].optionName);
	//get name of new room
	let nextRoom = currentRoom[button].optionName;
	if(nextRoom!= null){
		console.log("going to " + nextRoom);
		loadRoom(rooms[nextRoom]);
	}else{
		console.log("room not found");
	}
	
}

function loadRoom(room){
	console.log("loading " + room.roomName);
	currentRoom = room;
	//change room text
	roomText.innerHTML = room.roomText;
	///change all buttons
	//i guess it might make more sense 
	///to have an arry of the html objects and an array of options in the room
	//the just foreach them
	option1.innerHTML = room.option1.optionText;
	option2.innerHTML = room.option2.optionText;
	option3.innerHTML = room.option3.optionText;
	option4.innerHTML = room.option4.optionText;


}