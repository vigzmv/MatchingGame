var numberOfFaces = 5;
function generateFaces(){
    var theLeftSide = document.getElementById("leftSide");
    var theBody = document.getElementsByTagName("body")[0];
    var theRightSide = document.getElementById("rightSide");

    for (var i = 0; i < numberOfFaces; i++) {

        var smile = document.createElement("img");
        smile.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        smile.style.top = Math.floor(Math.random() * 400) + "px";
        smile.style.left = Math.floor(Math.random() * 400) + "px";
        theLeftSide.appendChild(smile);

    }

    var leftSideImages = theLeftSide.cloneNode(true);

    theLeftSide.lastChild.onclick=
        function nextLevel(event) {
            event.stopPropagation();
            numberOfFaces += 5;
            while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild);
            }
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
            }
            generateFaces();
        };

    leftSideImages.removeChild(leftSideImages.lastChild);

    theRightSide.appendChild(leftSideImages);

    theBody.onclick = function gameOver() {

        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };
}