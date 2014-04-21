/*
 * this is the core game logic
 * DO NOT PUT EVENT LISTENERS INTO THIS FILE
 * DO NOT PUT CREATE JS OR JQUERY INTO THIS FILE
 */

 /**
  * Allows an object to be moved based on key press integers
  * @param object to be moved
  * @param direction the object is moving in
  */

var gamestate = {
    position : {
        x: 0,
        y: 0
    },
    level: 1,
    start: {
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0
    },
    aha: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    elevator: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    gap: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    interest: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    survey: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    }
};


// For switching between the two animation sprites, ugly method!!!
var moving = false;
var noText = true;

function move (direction) {

    beginGame();

    console.log("X Pos:" + userPlayer.x);
    console.log("Y Pos:" + userPlayer.y);

    switch (direction) {

        // Left
        case 37:
            // Ugly way to handle sprite animation :(
            if (moving === false) {
                userPlayer.gotoAndPlay("left1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("left2");
                moving = false;
            }

            switch (canvasID) {
                // Start
                case canvasIDList[0]:
                    if (userPlayer.x > 600 && userPlayer.x < 710 && userPlayer.y > 70) {     // Stay within vertical sidewalk
                        userPlayer.x -= 10;
                    } else if (userPlayer.x > -10 && userPlayer.y > 290) {    // Stay within horizontal sidewalk
                        userPlayer.x -= 10;
                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    //if ((userPlayer.x > 490 && userPlayer.y > 190) || (userPlayer.y < 200)) {
                        userPlayer.x -= 10;
                    //}
                    break;

                // Gap
                case canvasIDList[2]:
                    if (userPlayer.x > 70 && userPlayer.x <= 1240 && userPlayer.y >= 0 && userPlayer.y <= 110) {
                        userPlayer.x -= 10;
                    } else if (userPlayer.x > 600 && userPlayer.x <= 710 && userPlayer.y >= 100 && userPlayer.y <= 410) {
                        userPlayer.x -= 10;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    if (userPlayer.x > 70 && userPlayer.x <= 1240 && userPlayer.y >= 0 && userPlayer.y <= 110) {
                        userPlayer.x -= 10;
                    } else if (userPlayer.x > 600 && userPlayer.x <= 710 && userPlayer.y >= 100 && userPlayer.y <= 410) {
                        userPlayer.x -= 10;
                    }
                    break;

                // Inter
                case canvasIDList[4]:
                    userPlayer.x -= 10;
                    break;

                // Elev
                case canvasIDList[5]:
                    userPlayer.x -= 10;
                    break;

                // End
                case canvasIDList[6]:
                    userPlayer.x -= 10;
                    break;
            }
            break;

        // Up
        case 38:
            // Ugly way to handle sprite animation :(
            // We also don't have sprites for up animation
            if (moving === false) {
                userPlayer.gotoAndPlay("down1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("down2");
                moving = false;
            }

            switch (canvasID) {
                // Start
                case canvasIDList[0]:
                    if (userPlayer.y > 300 || (userPlayer.x > 590 && userPlayer.x < 710 && userPlayer.y > 130 || goToNextGame)) {
                        userPlayer.y -= 10;
                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    userPlayer.y -= 10;
                    break;

                // Gap
                case canvasIDList[2]:
                    if (userPlayer.x >= 60 && userPlayer.x <= 1240 && userPlayer.y > 10 && userPlayer.y <= 110) {
                        userPlayer.y -= 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x <= 710 && userPlayer.y > 100 && userPlayer.y <= 410) {
                        userPlayer.y -= 10;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    if (userPlayer.x >= 60 && userPlayer.x <= 1240 && userPlayer.y > 10 && userPlayer.y <= 110) {
                        userPlayer.y -= 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x <= 710 && userPlayer.y > 100 && userPlayer.y <= 410) {
                        userPlayer.y -= 10;
                    }
                    break;

                // Inter
                case canvasIDList[4]:
                    userPlayer.y -= 10;
                    break;

                // Elev
                case canvasIDList[5]:
                    userPlayer.y -= 10;
                    break;

                // End
                case canvasIDList[6]:
                    userPlayer.y -= 10;
                    break;
            }
            break;

        // Right
        case 39:
            // Ugly way to handle sprite animation :(
            if (moving === false) {
                userPlayer.gotoAndPlay("right1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("right2");
                moving = false;
            }

            switch (canvasID) {
                // Start
                case canvasIDList[0]:
                    if (userPlayer.x > 580 && userPlayer.x < 700 && userPlayer.y > 70) {   // Stay within vertical sidewalk
                        userPlayer.x += 10;
                    } else if (userPlayer.x < 1310 && userPlayer.y > 290) {    // Stay within horizontal sidewalk
                        userPlayer.x += 10;
                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    //if ((userPlayer.x < 810 && userPlayer.y > 190) || (userPlayer.y < 200 & userPlayer.x < 1250) || (userPlayer.y < 120 && userPlayer.x < 800)) {
                        userPlayer.x += 10;
                    //}
                    break;

                // Gap
                case canvasIDList[2]:
                    if (userPlayer.x >= 60 && userPlayer.x < 1230 && userPlayer.y >= 0 && userPlayer.y <= 110) {
                        userPlayer.x += 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x < 700 && userPlayer.y >= 100 && userPlayer.y <= 410) {
                        userPlayer.x += 10;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    if (userPlayer.x >= 60 && userPlayer.x < 1230 && userPlayer.y >= 0 && userPlayer.y <= 110) {
                        userPlayer.x += 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x < 700 && userPlayer.y >= 100 && userPlayer.y <= 410) {
                        userPlayer.x += 10;
                    }
                    break;

                // Inter
                case canvasIDList[4]:
                    userPlayer.x += 10;
                    break;

                // Elev
                case canvasIDList[5]:
                    userPlayer.x += 10;
                    break;

                // End
                case canvasIDList[6]:
                    userPlayer.x += 10;
                    break;
            }
            break;

        // Down
        case 40:
            // Ugly way to handle sprite animation :(
            if (moving === false) {
                userPlayer.gotoAndPlay("down1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("down2");
                moving = false;
            }

            switch (canvasID) {
                // Start
                case canvasIDList[0]:
                    if (userPlayer.y < 370) {
                        userPlayer.y += 10;
                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    userPlayer.y += 10;
                    break;

                // Gap
                case canvasIDList[2]:
                    if (userPlayer.x >= 60 && userPlayer.x <= 1240 && userPlayer.y >= 0 && userPlayer.y < 100) {
                        userPlayer.y += 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x <= 710 && userPlayer.y >= 100 && userPlayer.y < 400) {
                        userPlayer.y += 10;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    if (userPlayer.x >= 60 && userPlayer.x <= 1240 && userPlayer.y >= 0 && userPlayer.y < 100) {
                        userPlayer.y += 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x <= 710 && userPlayer.y >= 100 && userPlayer.y < 400) {
                        userPlayer.y += 10;
                    }
                    break;

                // Inter
                case canvasIDList[4]:
                    userPlayer.y += 10;
                    break;

                // Elev
                case canvasIDList[5]:
                    userPlayer.y += 10;
                    break;

                // End
                case canvasIDList[6]:
                    userPlayer.y += 10;
                    break;
            }
            break;

        default:
            break;
    }
}

function beginGame () {

    switch (canvasID) {

        // Start
        case canvasIDList[0]:
            //if (userPlayer.x >= 640 && userPlayer.x <= 660 && userPlayer.y >= 0 && userPlayer.y <= 20) {
            if (userPlayer.x > 590 && userPlayer.x < 710 && userPlayer.y > 50 && userPlayer.y < 200 && noText) {
                beginText(790,330);
                noText = false;
            }

            if (userPlayer.x > 590 && userPlayer.x < 710 && userPlayer.y < 120 && goToNextGame) {
                switchGame();
            }

            break;
/*
        // Aha
        case canvasIDList[1]:
            break;
*/
        // Gap
        case canvasIDList[2]:
            if (userPlayer.x >= 340 && userPlayer.x <= 360 && userPlayer.y >= 0 && userPlayer.y <= 20 && noText) {
                beginText(150,35);
                noText = false;
            }
            break;

        // Survey
        case canvasIDList[3]:
            if (userPlayer.x >= 940 && userPlayer.x <= 960 && userPlayer.y >= 0 && userPlayer.y <= 20 && noText) {
                beginText(1130,35);
                noText = false;
            }
            break;
/*
        // Interest
        case canvasIDList[4]:
            break;

        // Elevator
        case canvasIDList[5]:
            break;

        // End
        case canvasIDList[6]:
            break;
*/
        default:
            break;
    }
}
