const app = new Vue({
	el: '#app',
	data:{
		equipmentAvailable: [],
		typeOfSportsActivtyEquipment:[
		{label: "Soccer Ball", value: "soccerBall" },
		{label: "Baseball", value: "Baseball" },
		{label: "Basketball", value: "basketball" },
		{label: "Basketball Hoop", value: "basketballHoop" },
		{label: "Tennis Ball", value: "tennisBall" },
		{label: "Tennis Racket", value: "tennisRacket" },
		{label: "Tennis Court", value: "tennisCourt" },
		{label: "Hockey Puck", value: "hockeyPuck" },
		{label: "Hockey Stick", value: "hockeyStick" },
		{label: "Ice Rink", value: "iceRink" },
		{label: "Ice Skates", value: "iceSkates" },
		{label: "Large Grass Field", value: "largeGrassField" },
		{label: "Soccer Net", value: "soccerNet" },
		{label: "Baseball Mitt", value: "baseballMitt" },
		{label: "Baseball Bat", value: "baseballBat" }
		
		],
		sportsActivities:[]
	}
})