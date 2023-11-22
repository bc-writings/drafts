window.onload = function () {

    TweenMax.set('.centerX', {position:'absolute', xPercent:-50, left:'50%'});
    TweenMax.set('.centerY', {position:'absolute', yPercent:-50, top:'50%'});
    TweenMax.set('.centerXY', {position:'absolute', xPercent:-50, yPercent:-50, left:'50%', top:'50%'});

    var mySplitText = new SplitText("#text-middle .part1", {type:"words,chars"}), 
    chars1 = mySplitText.chars;

    var mySplitText = new SplitText("#text-middle .part2", {type:"words,chars"}), 
    chars2 = mySplitText.chars;

    new TimelineMax(/*{repeat:1, repeatDelay: 4}*/)
    .set('#ad', {visibility : 'visible'})

    .addLabel('anim-visuel')

    .addLabel('split', '+=2')
    //.staggerFrom('#text-middle div', .5, {opacity: 0, x: 100, ease: Power2.easeOut}, .1, 'split')
    .staggerFrom(chars1, .2, {opacity:0, ease: Linear.easeInOut}, .03, 'split')
    .staggerFrom(chars2, .25, {opacity:0, ease: Linear.easeInOut}, .06)


    .addLabel('close-split', '+=2')
    .to('#visuel-wrapper', .5, {width:0, ease:Power2.easeOut}, 'close-split')
    .to('#text-middle', .5, {opacity: 0, x: -150, ease: Power2.easeOut}, 'close-split')
    .from('#packshot-logo', .5, {opacity:0, x: 110, ease: Power2.easeOut}, 'close-split')

    .addLabel('packshot', '-=.2')
    .staggerFrom('#text-packshot-1 div', .5, {opacity: 0, x: 100, ease: Power2.easeOut}, .1, 'packshot')
    .from('.ml', .5, {opacity: 0, ease: Power2.easeOut}, 'packshot')

    .addLabel('shadow-cta')
    .from('#cta', .3, {width: 0, ease: Power3.easeOut}, 'shadow-cta+=.5')
    .from('#cta', .5, {height: '2px', ease: Power4.easeOut}, 'shadow-cta+=.8')

    .addLabel('end', '+=.7')
    .to('#text-packshot-1 div', .5, {opacity: 0, x: -150, ease: Power2.easeOut}, 'end')
    .staggerFrom('#text-packshot div', .5, {opacity: 0, x: 100, ease: Power2.easeOut}, .1)


    /* anim visuel start */
    .to('#visuel', 2, {x: -20, ease: Power2.easeOut}, 'anim-visuel')
    .to('#visuel-wrapper', .5, {width:'50%', ease:Power2.easeOut}, 'anim-visuel+=2')
    .to('#visuel', .5, {x: -85, ease:Power2.easeOut}, 'anim-visuel+=2')
    //.to('#visuel-text', .5, {opacity:0, x: -150, ease:Power2.easeOut}, 'anim-visuel+=2')
    .set('.logo-white', {className:'-=logo-white'}, 'anim-visuel+=2.03')

    GSDevTools.create();
}