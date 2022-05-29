

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

var fluidCola = document.querySelector("main > article:nth-of-type(1) > section:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1)");
fluidCola.style.setProperty("--device-rotation-x", "0");
fluidCola.style.setProperty("--device-rotation-x-reversed", "10");





var body = document.querySelector("body");


// if ( location.protocol != "https:" ) {
//     location.href = "https:" + window.location.href.substring( window.location.protocol.length );
// } else {
    function permission () {
        if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
            // (optional) Do something before API request prompt.
            DeviceMotionEvent.requestPermission()
                .then( response => {
                // (optional) Do something after API prompt dismissed.
                if ( response == "granted" ) {
                    window.addEventListener( "devicemotion", (e) => {
                        // do something for 'e' here.
                        
                        // alert( "DeviceMotionEvent is defined" );
                        var DetailedtiltDeviceX = e.accelerationIncludingGravity.x;
                        var DetailedtiltDeviceY = e.accelerationIncludingGravity.y;
                        var DetailedtiltDeviceZ = e.accelerationIncludingGravity.z;

                        var tiltDeviceX = Math.round(DetailedtiltDeviceX * 10) / 10;
                        var tiltDeviceXRounded = Math.round(DetailedtiltDeviceX);
                        
                        


                        var fluidCola = document.querySelector("main > article:nth-of-type(1) > section:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1)");
                        var tiltDeviceXAdjusted = tiltDeviceX * (-1);
                        var tiltDeviceXAdjustedRounded = Math.round(tiltDeviceXAdjusted);
                        fluidCola.style.setProperty("--device-rotation-x", tiltDeviceXAdjusted);

                        if (tiltDeviceXAdjustedRounded >= 0.0) {
                            var tiltDeviceXReversed = 10 - tiltDeviceXAdjusted;

                            // body.style.backgroundColor = "red";
                        } else {
                            var tiltDeviceXReversed = 11 - tiltDeviceX;

                            // body.style.backgroundColor = "green";
                        }

                        fluidCola.style.setProperty("--device-rotation-x-reversed", tiltDeviceXReversed);

                        // if (tiltDeviceXRounded == "0") {
                        //     tiltDeviceXReversed = 10;
                        // } if (tiltDeviceXRounded == "1") {
                        //     tiltDeviceXReversed = 9;
                        // } if (tiltDeviceXRounded == "2") {
                        //     tiltDeviceXReversed = 8;
                        // } if (tiltDeviceXRounded == "3") {
                        //     tiltDeviceXReversed = 7;
                        // } if (tiltDeviceXRounded == "4") {
                        //     tiltDeviceXReversed = 10;
                        // } if (tiltDeviceXRounded == "5") {
                        //     tiltDeviceXReversed = 10;
                        // } if (tiltDeviceXRounded == "6") {
                        //     tiltDeviceXReversed = 10;
                        // } if (tiltDeviceXRounded == "7") {
                        //     tiltDeviceXReversed = 10;
                        // } if (tiltDeviceXRounded == "8") {
                        //     tiltDeviceXReversed = 10;
                        // } if (tiltDeviceXRounded == "9") {
                        //     tiltDeviceXReversed = 10;
                        // } if (tiltDeviceXRounded == "10") {
                        //     tiltDeviceXReversed = 10;
                        // }


                        if (tiltDeviceX <= -9.5) {
                            body.classList.add("rotate-locked");

                            // PRESS ON CAP > FOR NEXT STEP???
                        } else {
                            // body.classList.remove("rotate-locked");
                        }



                        document.querySelector("div p:nth-of-type(1)").innerHTML = tiltDeviceX;
                        document.querySelector("div p:nth-of-type(2)").innerHTML = tiltDeviceXAdjusted;
                        document.querySelector("div p:nth-of-type(3)").innerHTML = tiltDeviceXReversed;

                    });
                }
            })
            .catch( console.error )
        } else {
            alert( "DeviceMotionEvent is not defined" );
        }
    }
    const btn = document.getElementById( "request" );
    btn.addEventListener( "click", permission );

// }









function getDeviceRotationInfo() {

}