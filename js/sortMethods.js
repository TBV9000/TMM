function calcCompat(players, User) {
	var tmpArray = new Array();
	players.forEach(function(currElement){
		var groupSizeScore = Math.abs(currElement.groupSize - User.groupSize) * 2.5;
		
		var rpScoreTo = Math.abs(currElement.roleplaySliderTo - User.roleplaySliderTo);
		var rpScoreFrom = Math.abs(currElement.roleplaySliderFrom - User.roleplaySliderFrom);

		var contentScoreTo = Math.abs(currElement.contentSliderTo - User.contentSliderTo) * 2.5;
		var contentScoreFrom = Math.abs(currElement.contentSliderFrom - User.contentSliderFrom) * 2.5;

		var humorScoreTo = Math.abs(currElement.humorSliderTo - User.humorSliderTo);
		var humorScoreFrom = Math.abs(currElement.humorSliderFrom - User.humorSliderFrom);

		var violenceScoreTo = Math.abs(currElement.violenceSliderTo - User.violenceSliderTo) * 2.5;
		var violenceScoreFrom = Math.abs(currElement.violenceSliderFrom - User.violenceSliderFrom) * 2.5;

		var totalScore
		var totalScore = 100 - Math.round((groupSizeScore+ rpScoreTo + rpScoreFrom + contentScoreTo + contentScoreFrom + humorScoreTo + humorScoreFrom + violenceScoreTo + violenceScoreFrom) * 1.11)
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

