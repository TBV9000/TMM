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