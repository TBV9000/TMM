function calcCompat(players, User) {
	var tmpArray = new Array();
	players.forEach(function(currElement){
		var groupSizeScore = Math.abs(currElement.groupSize - User.groupSize) * 2.5;
		
		var rpScore = Math.abs(currElement.roleplaySlider - User.roleplaySlider);
		var contentScore = Math.abs(currElement.contentSlider - User.contentSlider) * 2.5;
		var humorScore = Math.abs(currElement.humorSlider - User.humorSlider);
		var violenceScore = Math.abs(currElement.violenceSlider - User.violenceSlider) * 2.5;
		var totalScore
		var totalScore = 100 - Math.round((groupSizeScore+ rpScore + contentScore + humorScore + violenceScore) * 5)
		tmpArray.push(totalScore);
		console.log(totalScore);
		
	});
	return tmpArray;
}

function sort (playerData) {
	
	var topFirstRadio = document.getElementById("topFirstRadio");
	var topFirst = 0;
	if($(topFirstRadio).is(":checked")){
		topFirst = 1;
	}
	var compatRadio = document.getElementById("compatRadio");
	var expRadio = document.getElementById("expRadio");
	var ratingRadio = document.getElementById("ratingRadio");
	if($(compatRadio).is(":checked")){
		if(topFirst == 1)
			playerData.sort(byCompat);
		else
			playerData.sort(byCompatRev);
	} else {
		if($(expRadio).is(":checked")){
			if(topFirst == 1)
			playerData.sort(byExp);
		else
			playerData.sort(byExpRev);
		} else {
			if(topFirst == 1)
				playerData.sort(byRating);
			else
				playerData.sort(byRatingRev);
		}
	}
}

function byCompat(a, b) {
	if(compatArray[a.playernum - 1] > compatArray[b.playernum - 1])
		return 0;
	else
		return 1;
}

function byCompatRev(a, b) {
	if(compatArray[a.playernum - 1] < compatArray[b.playernum - 1])
		return 0;
	else
		return 1;
}

function byRating(a, b) {
	return( a.rating < b.rating);
}

function byRatingRev(a, b) {
	return( a.rating > b.rating);
}

function byExp(a, b) {
	return( a.yearsExp < b.yearsExp);
}

function byExpRev(a, b) {
	return( a.yearsExp > b.yearsExp);
}

