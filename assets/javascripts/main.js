$(document).ready(function() {
  $(document).foundation({
    "magellan-expedition": {
      active_class: 'active', // specify the class used for active sections
      threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
      destination_threshold: 20, // pixels from the top of destination for it to be considered active
      throttle_delay: 50, // calculation throttling to increase framerate
      fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
      offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
    },
    "orbit": {
       animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
       timer_speed: 10000, // Sets the amount of time in milliseconds before transitioning a slide
       pause_on_hover: false, // Pauses on the current slide while hovering
       resume_on_mouseout: false, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
       next_on_click: true, // Advance to next slide on click
       animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
       stack_on_small: false,
       navigation_arrows: true,
       slide_number: false,
       slide_number_text: 'of',
       bullets: true, // Does the slider have bullets visible?
       circular: true, // Does the slider should go to the first slide after showing the last?
       timer: false, // Does the slider have a timer active? Setting to false disables the timer.
       variable_height: false, // Does the slider have variable height content?
       swipe: true
    }
  });
});
