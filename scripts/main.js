



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
//     alert(x);
// }

// window.addEventListener("devicemotion", handleMotionEvent, true);




if ( location.protocol != "https:" ) {
    location.href = "https:" + window.location.href.substring( window.location.protocol.length );
} else {
    function permission () {
        if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
            // (optional) Do something before API request prompt.
            DeviceMotionEvent.requestPermission()
                .then( response => {
                // (optional) Do something after API prompt dismissed.
                if ( response == "granted" ) {
                    window.addEventListener( "devicemotion", (e) => {
                        // do something for 'e' here.
                        
                        var x = e.accelerationIncludingGravity.x;
                        var y = e.accelerationIncludingGravity.y;
                        var z = e.accelerationIncludingGravity.z;

                        document.querySelector("div p:nth-of-type(1)").innerHTML = x;
                        document.querySelector("div p:nth-of-type(2)").innerHTML = y;
                        document.querySelector("div p:nth-of-type(3)").innerHTML = z;



                    })
                }
            })
            .catch( console.error )
        } else {
            alert( "DeviceMotionEvent is not defined" );
        }
    }
    const btn = document.getElementById( "request" );
    btn.addEventListener( "click", permission );

}