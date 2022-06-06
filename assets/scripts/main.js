

// alert("HOI");

// if (window.DeviceOrientationEvent) {
//     window.addEventListener("deviceorientation", function(event) {
//         // alpha: rotation around z-axis
//         var rotateDegrees = event.alpha;
//         // gamma: left to right
//         var leftToRight = event.gamma;
//         // beta: front back motion
//         var frontToBack = event.beta;

//         handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
//     }, true);
// }

// var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
//     // do something amazing
// };








// function handleMotionEvent(event) {

//     var x = event.accelerationIncludingGravity.x;
//     var y = event.accelerationIncludingGravity.y;
//     var z = event.accelerationIncludingGravity.z;

//     // Do something awesome.
//     document.querySelector("div p:nth-of-type(1)").innerHTML = x;
//     document.querySelector("div p:nth-of-type(2)").innerHTML = y;
//     document.querySelector("div p:nth-of-type(3)").innerHTML = "zzzz";
// }

// window.addEventListener("devicemotion", handleMotionEvent, true);

// var fluidCola = document.querySelector("main > article:nth-of-type(1) > section:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1)");
// fluidCola.style.setProperty("--device-rotation-x", "0");
// fluidCola.style.setProperty("--device-rotation-x-reversed", "10");





var body = document.querySelector("body");


// if ( location.protocol != "https:" ) {
//     location.href = "https:" + window.location.href.substring( window.location.protocol.length );
// } else {
    function permission () {
        if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
            // (optional) Do something before API request prompt.
            DeviceMotionEvent.requestPermission()
                .then( response => {
                // IF PERMISSION IS DENIED
                body.classList.add("sensors-denied");

                if ( response == "granted" ) {
                    window.addEventListener( "devicemotion", (e) => {
                        // IF PERMISSION IS GRANTED
                        body.classList.add("rotate-allowed");
                        
                        // GET SENSOR INFO
                        var detailedtiltDeviceX = e.accelerationIncludingGravity.x;
                        var detailedtiltDeviceY = e.accelerationIncludingGravity.y;
                        var detailedtiltDeviceZ = e.accelerationIncludingGravity.z;

                        var tiltDeviceX = Math.round(detailedtiltDeviceX * 10) / 10;
                        var tiltDeviceXRounded = Math.round(detailedtiltDeviceX);
                        
                        // DEFINE COLA & CHECK TILT ANGLE
                        var fluidCola = document.querySelector("main > article:nth-of-type(1) > section:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1)");
                        var tiltDeviceXAdjusted = tiltDeviceX * (-1);
                        var tiltDeviceXAdjustedRounded = Math.round(tiltDeviceXAdjusted);

                        // SET COLA ROTATION ANGLE
                        if (tiltDeviceXAdjustedRounded <= -10) {
                            tiltDeviceXAdjusted = -9.5;
                        } else if (tiltDeviceXAdjustedRounded >= 10) {
                            tiltDeviceXAdjusted = 9.5;
                        }
                        fluidCola.style.setProperty("--device-rotation-x", tiltDeviceXAdjusted);
                        
                        // SET COLA ROTATION ANGLE (REVERSED)
                        if (tiltDeviceXAdjustedRounded >= 0.0) {
                            var tiltDeviceXReversed = 10 - tiltDeviceXAdjusted;
                        } else {
                            var tiltDeviceXReversed = 11 - tiltDeviceX;
                        }
                        fluidCola.style.setProperty("--device-rotation-x-reversed", tiltDeviceXReversed);

                        // ON DEVICE SHAKING INTERACTION
                        if (detailedtiltDeviceX >= 20 && detailedtiltDeviceZ >= 15) {
                            setTimeout(() => {
                                body.classList.add("rotate-locked");
                                body.classList.add("show-hint2");
                            }, "500");
                        } else if (tiltDeviceXAdjustedRounded <= -20 && detailedtiltDeviceZ <= -15) {
                            setTimeout(() => {
                                body.classList.add("rotate-locked");
                                body.classList.add("show-hint2");
                            }, "500");
                        } else if (detailedtiltDeviceZ <= -30) { 
                            setTimeout(() => {
                                body.classList.add("rotate-locked");
                                body.classList.add("show-hint2");
                            }, "500");
                        }
                        console.log(tiltDeviceXRounded);
                        // console.log(accelerationTiltDeviceX);

                        // SHOW HINTS
                        if (tiltDeviceXRounded > 6) {
                            body.classList.add("show-hint1");
                        } else {
                            body.classList.remove("show-hint1");
                        }


                        

                    });
                }
            })
            .catch( console.error )
        } else {
            alert( "DeviceMotionEvent is not defined" );
        }
    }
    const btn = document.getElementById( "request" );
    btn.addEventListener("click", permission);

// }




// BOTTLE CAP INTERACTION
var bottleCap = document.querySelector("main > article:nth-of-type(1) > section:nth-of-type(1)");
bottleCap.addEventListener("click", sprayCola);

function sprayCola() {
    body.classList.add("cap-removed");
    body.classList.remove("show-hint1");
    body.classList.remove("show-hint2");

    setTimeout(() => {
        body.classList.add("cap-removed-fully");

        // REMOVE RANDOMIZED POSTION FOR EACH BUBBLE
        var bubbles = document.querySelectorAll("main > article:nth-of-type(1) > div > div");
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].style.transform = "";
        }
    }, "800");
}



// RANDOMIZE BUBBLES POSITION IN BOTTLE
function bubblesRandomizer() {
    // GET ALL BUBBLES
    var bubbles = document.querySelectorAll("main > article:nth-of-type(1) > div > div");

    // FOR EACH BUBBLE
    for (var i = 0; i < bubbles.length; i++) {
        // RANDOM VALUES X-AXIS
        var bubbleRandomValuesX = Math.floor(Math.random() * (80 - 0 + 1) + 0);
        var bubbleRandomValuesMultipliedX = (bubbleRandomValuesX * 10) + 1225;

        // RANDOM VALUES Y-AXIS
        var bubbleRandomValuesY = Math.floor(Math.random() * (35 - 0 + 1) + 0);
        var bubbleRandomValuesMultipliedY = (bubbleRandomValuesY * 10) + 3450;

        // SET STYLE
        bubbles[i].style.transform = "translate(" + bubbleRandomValuesMultipliedX + "%, " + bubbleRandomValuesMultipliedY + "%)";
    }
}
window.addEventListener("load", bubblesRandomizer);