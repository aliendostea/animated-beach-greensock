//////----- Beach Ball
console.log('beach 2222');
TweenMax.to('#ball-group', 30, { x: -1700,
                                repeat: -1,
                                ease: Power0.easeNone,
                                repeatDelay: 10
})
TweenMax.to('#ball', 30, { rotation: "-4000deg",
                          repeat: -1,
                          transformOrigin:"center center",
                          ease: Power0.easeNone,
                          repeatDelay: 10                          
})
//////----- sun-band
TweenMax.to("#sun-band-1", 2, {
                        scale: 6.4,
                        repeat: -1,
                        transformOrigin: "center center",
                        yoyo: true,
                        ease: Power0.easeNone,
                        repeatDelay: 1
})
TweenMax.to("#sun-band-2", 3, {
                        scale: 8.3,
                        repeat: -1,
                        transformOrigin: "center center",
                        yoyo: true,
                        ease: Power0.easeNone,
                        repeatDelay: 3
})
TweenMax.set("#sun-group",{
                        x: 1100,
                        
})
//////----- fence
TweenMax.to("#fence-1, #fence-2", 4, {
                        x: -1500,
                        repeat: -1,
                        ease: Power0.easeNone
                        // repeatDelay: 3
})
//////----- waves
TweenMax.to("#wave-group", 20, {
                        x: -2000,
                        repeat: -1,
                        ease: Power0.easeNone
})
TweenMax.to("#wave-group", 5, {
                        scaleY: .5,
                        repeat: -1,
                        yoyo: true,
                        transformOrigin: "top center",
                        ease: Power1.easeInOut,
                        repeatDelay: 3
})
//////----- rocks
TweenMax.to("#rocks-1", 75, {
                        x: -3500,
                        repeat: -1,
                        ease: Power0.easeNone
})
TweenMax.to("#rocks-2", 77, {
                        x: -3400,
                        repeat: -1,
                        ease: Power0.easeNone
})
//////----- clouds
TweenMax.to("#clouds-1", 130, {
                        x: -2500,
                        repeat: -1,
                        ease: Power0.easeNone
})
TweenMax.to("#clouds-2", 140, {
                        x: -2400,
                        repeat: -1,
                        ease: Power0.easeNone
})
//////----- islands
TweenMax.to("#islands-1", 200, {
                        x: -1500,
                        repeat: -1,
                        ease: Power0.easeNone
})
TweenMax.to("#islands-2", 200, {
                        x: -1400,
                        repeat: -1,
                        ease: Power0.easeNone
})
//////----- surfboards
TweenMax.to("#surfboard-1", 20, {
                        x: -2000,
                        repeat: -1,
                        ease: Power0.easeNone,
                        repeatDelay: 15
})
TweenMax.to("#surfboard-2", 20, {
                        x: -2000,
                        repeat: -1,
                        ease: Power0.easeNone,
                        delay: 20,
                        repeatDelay: 15
})
//////----- bird
TweenMax.to("#bird", 8, {
                        x: -2000,
                        repeat: -1,
                        // repeatDelay: 7
})
TweenMax.to("#bird", 3, {
                        y: 200,
                        yoyo: true,
                        repeat: -1,
                        ease: Power1.easeInOut,
                        // repeatDelay: 7
})
TweenMax.to("#front-wing, #back-wing", 1, {
                        scaleY: -1.1,
                        yoyo: true,
                        repeat: -1,
                        ease: Power1.easeInOut,
                        transformOrigin: "bottom center",
                        // repeatDelay: 7
})
