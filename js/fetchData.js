function loadJSON(file, callback) {   
        
        
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            
			
			callback(JSON.parse(xobj.responseText));
          }
    };

    xobj.send(null);
    }
	
	function processEntry(currPlayer, cardArray, starArray, tmpitr) {
            var currIcon = cardArray[ (tmpitr * 2) + 1 ].childNodes[1].childNodes[1].childNodes[1].childNodes[1];
            var currIconPath = currIcon.currentSrc.replace(/([00-99])+.png/g, currPlayer.icon);
        
            currIcon.src=currIconPath;
        
            var currElement = cardArray[ (tmpitr * 2) + 1 ].childNodes[1].childNodes[1].childNodes[3].childNodes[1];
            var currName = currElement.childNodes[1].childNodes[0];
            var currYears = currElement.childNodes[3].childNodes[0];
            var compatPercent = currElement.childNodes[7].childNodes[0];
            
            currName.nodeValue = currPlayer.screenName;
            currYears.nodeValue= "Years of Exp.:" + currPlayer.yearsExp;
			compatPercent.nodeValue = "Compatability: " + compatArray[currPlayer.playernum - 1] + "%";
            $(starArray[ tmpitr].toString()).rating("update", currPlayer.rating);
    }

    function displayPlayer(cardID) {        
        var currPlayerName = document.getElementById(cardID).childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[0].data;
        
        var currPlayer = null;
        for(var i = 0; i < playerData.length; i++) {
            if(playerData[i].screenName == currPlayerName)
                currPlayer = playerData[i];
        }
        document.getElementById("screenName").childNodes[0].nodeValue = currPlayer.screenName;
        document.getElementById("compat").childNodes[0].nodeValue = compatArray[currPlayer.playernum];
        document.getElementById("age").childNodes[0].nodeValue = currPlayer.age;
        document.getElementById("yearsExp").childNodes[0].nodeValue = currPlayer.yearsExp;
        document.getElementById("groupSize").childNodes[0].nodeValue = currPlayer.groupSize;
        document.getElementById("campaignsPlayed").childNodes[0].nodeValue = currPlayer.gamesPlayed;
        
        $("#roleplaySlider").data("ionRangeSlider").update({
            from: currPlayer.roleplaySliderFrom,
            to: currPlayer.roleplaySliderTo
        });
		$("#contentSlider").data("ionRangeSlider").update({
            from: currPlayer.contentSliderFrom,
            to: currPlayer.contentSliderTo
        });
		$("#humorSlider").data("ionRangeSlider").update({
            from: currPlayer.humorSliderFrom,
            to: currPlayer.humorSliderTo
        });
		$("#violenceSlider").data("ionRangeSlider").update({
            from: currPlayer.violenceSliderFrom,
            to: currPlayer.violenceSliderTo
        });
		
		$("#stars").rating("update", currPlayer.rating);
		$("#icon").attr("src", "img/" + currPlayer.icon);
    }
	
	function displayCurrUser(cardID) {        
        var currPlayerName = currUser.screenName;        
        var currPlayer = currUser;
        document.getElementById("screenName").childNodes[0].nodeValue = currPlayer.screenName;
        document.getElementById("age").childNodes[0].nodeValue = currPlayer.age;
        document.getElementById("yearsExp").childNodes[0].nodeValue = currPlayer.yearsExp;
        document.getElementById("groupSize").childNodes[0].nodeValue = currPlayer.groupSize;
        document.getElementById("campaignsPlayed").childNodes[0].nodeValue = currPlayer.gamesPlayed;
        
        $("#roleplaySlider").data("ionRangeSlider").update({
            from: currPlayer.roleplaySliderFrom,
            to: currPlayer.roleplaySliderTo
        });
		$("#contentSlider").data("ionRangeSlider").update({
            from: currPlayer.contentSliderFrom,
            to: currPlayer.contentSliderTo
        });
		$("#humorSlider").data("ionRangeSlider").update({
            from: currPlayer.humorSliderFrom,
            to: currPlayer.humorSliderTo
        });
		$("#violenceSlider").data("ionRangeSlider").update({
            from: currPlayer.violenceSliderFrom,
            to: currPlayer.violenceSliderTo
        });
		
		$("#stars").rating("update", currPlayer.rating);
		$("#icon").attr("src", "img/" + currPlayer.icon);
    }
	
	function populateList(cardArray, starArray, playerList) {
	
		for(var i = 0; i < 6 /*max card number*/; i++){
			if(playerList[i]) {
				
			var currPlayer = playerList[i];
			var currIcon = cardArray[i].childNodes[1].childNodes[1].childNodes[1].childNodes[1];
            var currIconPath = currIcon.currentSrc.replace(/([00-99])+.png/g, currPlayer.icon);
        
            currIcon.src=currIconPath;
        
            var currElement = cardArray[i].childNodes[1].childNodes[1].childNodes[3].childNodes[1];
            var currName = currElement.childNodes[1].childNodes[0];
            var currYears = currElement.childNodes[3].childNodes[0];
            var compatPercent = currElement.childNodes[7].childNodes[0];
            
            currName.nodeValue = currPlayer.screenName;
            currYears.nodeValue= "Years of Exp.:" + currPlayer.yearsExp;
			compatPercent.nodeValue = "Compatability: " + compatArray[currPlayer.playernum - 1] + "%";
			$("#"+cardArray[i].id.toString()).collapse("show");
            $(starArray[i].toString()).rating("update", currPlayer.rating);
			}else {
				$("#"+cardArray[i].id.toString()).collapse("hide");
			}
		}
	}
