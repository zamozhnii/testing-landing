// VIDEO BACKGROUND

$(document).ready(function() {
    var videobackground = new $.backgroundVideo($('body'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "video/",
      "filename": "video-bg",
      "types": ["mp4","ogg","webm"],
      "preload": true,
      "autoplay": true,
      "loop": true
    });
  });

// PLAY VIDEO

var video = $('#video');
$('.play').on('click', function() {
  if(video.get(0).play()) {
    $('.play').css({'display': 'none'});
    if($('.pause').css({'display': 'block'})) {
      $('.pause').click(function() {
        video.get(0).pause();
        $('.pause').css({'display': 'none'});
        $('.play').css({'display': 'block'});
      })
    }
  }
});


// CAROUSEL

$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
  });

  $('.slick-prev').css({'display':'none'});
  $('.slick-next').css({'display':'none'});
});

// Testimonials switches

var activeButton = $('#test-btn');
var activeTestimonal = $('#first');
var buttonsWrap = $('#btns');

function switchingButton(node) {
  if(activeButton) {
    $(activeButton).removeClass('active-quote-btn');
  }
  activeButton = node;
  $(activeButton).addClass('active-quote-btn');
}

function showNewTestimonial(id) {
  var test = $('#'+id);
  if(activeTestimonal) {
    $(activeTestimonal).removeClass('rob-testimonial-active');
  }
  activeTestimonal = test;
  $(activeTestimonal).addClass('rob-testimonial-active');
}

$(buttonsWrap).on('click', function(e) {
  var target = e.target;
  var idForShow = $(target).attr('data-testim');
  if($(target).is('LI')) {
    switchingButton(target);
    showNewTestimonial(idForShow);
  } else {
    return;
  }
});

// BUTTONS ANCHORS

$(document).ready(function(){
  $('.btn-up').on('click', function (e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 1500);
  });
});

$(document).ready(function(){
  $('.nav').on('click', 'a', function (e) {
      e.preventDefault();
      e.returnValue = false;
      var id = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
  });
});

// ACCORDION

$(document).ready(function() {
  $('.btn-accordion').on('click', function() {
    if($(this).hasClass('active-acc')) {
      $(this).removeClass('active-acc');
      $('.btn-accordion > i').removeClass('material-icons-remove_circle').addClass('material-icons-add_circle');
    } else {
      $('.btn-accordion > i').removeClass('material-icons-remove_circle').addClass('material-icons-add_circle');
      $(this).find('i').removeClass('material-icons-add_circle').addClass('material-icons-remove_circle');
      $('.btn-accordion').removeClass('active-acc');
      $(this).addClass('active-acc');
    }
  })
});

$(document).ready(function() {
  $('.btn-accordion-2').on('click', function() {
    if($(this).hasClass('active-acc-2')) {
      $(this).removeClass('active-acc-2');
      $('.btn-accordion-2 > i').removeClass('material-icons-remove_circle').addClass('material-icons-add_circle');
    } else {
      $('.btn-accordion-2 > i').removeClass('material-icons-remove_circle').addClass('material-icons-add_circle');
      $(this).find('i').removeClass('material-icons-add_circle').addClass('material-icons-remove_circle');
      $('.btn-accordion-2').removeClass('active-acc-2');
      $(this).addClass('active-acc-2');
    }
  })
});

$(document).ready(function() {
  $('.btn-accordion-3').on('click', function() {
    if($(this).hasClass('active-acc-3')) {
      $(this).removeClass('active-acc-3');
      $('.btn-accordion-3 > i').removeClass('material-icons-remove_circle').addClass('material-icons-add_circle');
    } else {
      $('.btn-accordion-3 > i').removeClass('material-icons-remove_circle').addClass('material-icons-add_circle');
      $(this).find('i').removeClass('material-icons-add_circle').addClass('material-icons-remove_circle');
      $('.btn-accordion-3').removeClass('active-acc-3');
      $(this).addClass('active-acc-3');
    }
  })
});

// MAP

function initMap() {
  var myLatLng = {lat: 40.68922945, lng: -73.90755306};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12,
    scrollwheel: false
  });

  var image = '../img/icons/marker.png';
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image
  });

  var styledMapType=new google.maps.StyledMapType(
		[
			{
				"elementType":"geometry",
				"stylers":[
					{
						"color":"#333333"
					}
				]
			},
			{
				"elementType":"labels.icon",
				"stylers":[
					{
						"visibility":"off"
					}
				]
			},
			{
				"elementType":"labels.text.fill",
				"stylers":[
					{
						"color":"#575757"
					}
				]
			},
			{
				"elementType":"labels.text.stroke",
				"stylers":[
					{
						"color":"#494949"
					}
				]
			},
			{
				"featureType":"administrative.land_parcel",
				"elementType":"labels.text.fill",
				"stylers":[
					{
						"color":"#333333"
					}
				]
			},
			{
				"featureType":"poi",
				"elementType":"geometry",
				"stylers":[
					{
						"color":"#333333"
					}
				]
			},
			{
				"featureType":"poi",
				"elementType":"labels.text.fill",
				"stylers":[
					{
						"color":"#333333"
					}
				]
			},
			{
				"featureType":"poi.park",
				"elementType":"geometry",
				"stylers":[
					{
						"color":"#333333"
					}
				]
			},
			{
				"featureType":"poi.park",
				"elementType":"labels.text.fill",
				"stylers":[
					{
						"color":"#333333"
					}
				]
			},
			{
				"featureType":"road",
				"elementType":"geometry",
				"stylers":[
					{
						"color":"#2d2d2d"
					}
				]
			},
			{
				"featureType":"road.arterial",
				"elementType":"labels.text.fill",
				"stylers":[
					{
						"color":"#757575"
					}
				]
			},
			{
				"featureType":"road.highway",
				"elementType":"geometry",
				"stylers":[
					{
						"color":"#343434"
					}
				]
			},
			{
				"featureType":"road.highway",
				"elementType":"labels.text.fill",
				"stylers":[
					{
						"color":"#616161"
					}
				]
			},
			{
				"featureType":"road.local",
				"elementType":"labels.text.fill",
				"stylers":[
					{
						"color":"#2b2b2b"
					}
				]
			},
			{
				"featureType":"transit.line",
				"elementType":"geometry",
				"stylers":[
					{
						"color":"#2b2b2b"
					}
				]
			},
			{
				"featureType":"transit.station",
				"elementType":"geometry",
				"stylers":[
					{
						"color":"#353535"
					}
				]
			},
			{
				"featureType":"water",
				"elementType":"geometry",
				"stylers":[
					{
						"color":"#2b2b2b"
					}
				]
			},
			{
				"featureType":"water",
				"elementType":"labels.text.fill",
				"stylers":[
					{
						"color":"#2b2b2b"
					}
				]
			}
		],
		{name:'Styled Map'}
	);
	map.mapTypes.set('styled_map',styledMapType);
	map.setMapTypeId('styled_map');
}