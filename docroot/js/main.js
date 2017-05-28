// SMOOTH SCROLLING
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#checked').attr('checked', false); // hides mobile nav
        $('html, body').animate({ // animates scroll to section
          scrollTop: target.offset().top
        }, 720);
        return false;
      }
    }
  });
});

// YEAR

var today = new Date();
var year = today.getFullYear();
console.log(year);
$('.year').text(year);

// TOP ANIMATION
var tl1 = new TimelineMax({ delay: .7 });

tl1.from('#divide-anim', .3, {opacity:0});
tl1.from('#divide-anim', .7, {y:60}), '=.3';
tl1.from('#divide-anim-two', .7, {y:-30,opacity:0}, '-=.7');
tl1.from('#mobile-hero', .5, {opacity:0}, '=.3');
tl1.from('#logo-anim', .8, {opacity:0,y:17.5, ease: Power4.easeOut});




/// SVG 

/*
* Hey Folks, feel free to use this Code
* You can find some more Animated Icons in my Collection
* http://codepen.io/collection/XyyOGm/
*/


var svg = $('#hands-svg');
var contact = $('#contact');
var form = $('#contact-form');

svg.setActive = false;

var svgHands = function(element) {
  var
    select = function(e) {
      return document.querySelector(e);
    },
    hands = select('#hands'),
    left_hand = select('#left_hand'),
    right_hand = select('#right_hand'),
    left_index_finger = select("#left_index_finger"),
    left_middle_finger = select("#left_middle_finger"),
    left_ring_finger = select("#left_ring_finger"),
    right_index_finger = select("#right_index_finger"),
    right_middle_finger = select("#right_middle_finger"),
    right_ring_finger = select("#right_ring_finger");

  var tl_lh = new TimelineLite();
  tl_lh
    .add(
      TweenMax.set(
        [left_index_finger, left_middle_finger, left_ring_finger], {
          transformOrigin: "50% 100%"
        }),
      TweenMax.set(
        left_hand, {
          transformOrigin: "50% 100%",
          x: 0,
          y: 0
        })
    )
    .add(TweenMax.to(left_hand, 0.5, {
      y: -10
    }, 0))
    .add(TweenMax.to(left_index_finger, 0.15, {
      scaleY: 0.8
    }))
    .add(TweenMax.to(left_index_finger, 0.15, {
      scaleY: 1
    }))
    .add(TweenMax.to(left_hand, 0.2, {
      y: -20,
      x: -10
    }))
    .add(TweenMax.to(left_middle_finger, 0.15, {
      scaleY: 0.8
    }))
    .add(TweenMax.to(left_middle_finger, 0.15, {
      scaleY: 1
    }))
    .add(TweenMax.to(left_hand, 0.1, {
      y: -24,
      x: 24
    }))
    .add(TweenMax.to(left_middle_finger, 0.15, {
      scaleY: 0.8
    }))
    .add(TweenMax.to(left_middle_finger, 0.15, {
      scaleY: 1
    }))
    .add(TweenMax.to(left_ring_finger, 0.15, {
      scaleY: 0.8
    }))
    .add(TweenMax.to(left_ring_finger, 0.15, {
      scaleY: 1
    }))
    .add(TweenMax.to(left_hand, 0.5, {
      x: 0,
      y: 0
    }, 0));

  var tl_rh = new TimelineLite();

  tl_rh
    .add(
      TweenMax.set(
        [right_index_finger, right_middle_finger, right_ring_finger], {
          transformOrigin: "50% 100%"
        }),
      TweenMax.set(
        right_hand, {
          transformOrigin: "50% 100%",
          x: 0,
          y: 0
        })
    )
    .add(TweenMax.to(right_hand, 0.5, {
      y: -10
    }, 0))
    .add(TweenMax.to(right_index_finger, 0.15, {
      scaleY: 0.8
    }))
    .add(TweenMax.to(right_index_finger, 0.15, {
      scaleY: 1
    }))
    .add(TweenMax.to(right_hand, 0.2, {
      y: -20,
      x: -10
    }))
    .add(TweenMax.to(right_middle_finger, 0.15, {
      scaleY: 0.8
    }))
    .add(TweenMax.to(right_middle_finger, 0.15, {
      scaleY: 1
    }))
    .add(TweenMax.to(right_hand, 0.1, {
      y: -24,
      x: 12
    }))
    .add(TweenMax.to(right_middle_finger, 0.15, {
      scaleY: 0.8
    }))
    .add(TweenMax.to(right_middle_finger, 0.15, {
      scaleY: 1
    }))
    .add(TweenMax.to(right_ring_finger, 0.15, {
      scaleY: 0.8
    }))
    .add(TweenMax.to(right_ring_finger, 0.15, {
      scaleY: 1
    }))
    .add(TweenMax.to(right_hand, 0.5, {
      x: 0,
      y: 0
    }, 0));

  var timeline = new TimelineLite({
    onComplete: function() {
      svg.setActive = false
    }
  });

  timeline.append(tl_lh).append(tl_rh, -2);

  timeline.pause().progress();

  return timeline;
}

contact.on("mouseenter", function() {
  if (svg.setActive == false) {
    svg.setActive = true;
    svgHands().play();
  }
  return svg.setActive = true;
});
form.on("mouseenter", function() {
  if (svg.setActive == false) {
    svg.setActive = true;
    svgHands().play();
  }
  return svg.setActive = true;
});




$(function(){


	var offset = 0;

	var body = $('svg #body');
	var head = $('svg #head');
	var real = $('#real');

	init();

	function init(){
		timer = setInterval(loop, 30);
	}
    
	function loop(){
		head.attr('stroke-dashoffset', offset);
		body.attr('stroke-dashoffset', offset);
		offset += 0.5;
		if(offset>=6) offset = 0;
	}

});
