// thumbnails.carousel.js jQuery plugin
;(function(window, $, undefined) {

	var conf = {
		center: true,
		backgroundControl: false
	};

	var cache = {
		$carouselContainer: $('#illus-work .thumbnails-carousel').parent(),
		$thumbnailsLi: $('#illus-work .thumbnails-carousel li'),
		$controls: $('#illus-work .thumbnails-carousel').parent().find('#illus-work .carousel-control')
	};

	function init() {
		cache.$carouselContainer.find('#illus-work ol.carousel-indicators').addClass('indicators-fix');
		cache.$thumbnailsLi.first().addClass('active-thumbnail');

		if(!conf.backgroundControl) {
			cache.$carouselContainer.find('#illus-work .carousel-control').addClass('controls-background-reset');
		}
		else {
			cache.$controls.height(cache.$carouselContainer.find('#illus-work .carousel-inner').height());
		}

		if(conf.center) {
			cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
		}
	}

	function refreshOpacities(domEl) {
		cache.$thumbnailsLi.removeClass('active-thumbnail');
		cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
	}	

	function bindUiActions() {
		cache.$carouselContainer.on('slide.bs.carousel', function(e) {
  			refreshOpacities(e.relatedTarget);
		});

		cache.$thumbnailsLi.click(function(){
			cache.$carouselContainer.carousel($(this).index());
		});
	}

	$.fn.thumbnailsCarousel = function(options) {
		conf = $.extend(conf, options);

		init();
		bindUiActions();

		return this;
	}

})(window, jQuery);

$('#water-work .thumbnails-carousel').thumbnailsCarousel();

// for watercolor paintings
;(function(window, $, undefined) {

	var conf = {
		center: true,
		backgroundControl: false
	};

	var cache = {
		$carouselContainer: $('#water-work .thumbnails-carousel').parent(),
		$thumbnailsLi: $('#water-work .thumbnails-carousel li'),
		$controls: $('#water-work .thumbnails-carousel').parent().find('#water-work .carousel-control')
	};

	function init() {
		cache.$carouselContainer.find('#water-work ol.carousel-indicators').addClass('indicators-fix');
		cache.$thumbnailsLi.first().addClass('active-thumbnail');

		if(!conf.backgroundControl) {
			cache.$carouselContainer.find('#water-work .carousel-control').addClass('controls-background-reset');
		}
		else {
			cache.$controls.height(cache.$carouselContainer.find('#water-work .carousel-inner').height());
		}

		if(conf.center) {
			cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
		}
	}

	function refreshOpacities(domEl) {
		cache.$thumbnailsLi.removeClass('active-thumbnail');
		cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
	}	

	function bindUiActions() {
		cache.$carouselContainer.on('slide.bs.carousel', function(e) {
  			refreshOpacities(e.relatedTarget);
		});

		cache.$thumbnailsLi.click(function(){
			cache.$carouselContainer.carousel($(this).index());
		});
	}

	$.fn.thumbnailsCarousel = function(options) {
		conf = $.extend(conf, options);

		init();
		bindUiActions();

		return this;
	}

})(window, jQuery);

$('#water-work .thumbnails-carousel').thumbnailsCarousel();

// for photos
;(function(window, $, undefined) {

	var conf = {
		center: true,
		backgroundControl: false
	};

	var cache = {
		$carouselContainer: $('#photo-work .thumbnails-carousel').parent(),
		$thumbnailsLi: $('#photo-work .thumbnails-carousel li'),
		$controls: $('#photo-work .thumbnails-carousel').parent().find('#photo-work .carousel-control')
	};

	function init() {
		cache.$carouselContainer.find('#photo-work ol.carousel-indicators').addClass('indicators-fix');
		cache.$thumbnailsLi.first().addClass('active-thumbnail');

		if(!conf.backgroundControl) {
			cache.$carouselContainer.find('#photo-work .carousel-control').addClass('controls-background-reset');
		}
		else {
			cache.$controls.height(cache.$carouselContainer.find('#photo-work .carousel-inner').height());
		}

		if(conf.center) {
			cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
		}
	}

	function refreshOpacities(domEl) {
		cache.$thumbnailsLi.removeClass('active-thumbnail');
		cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
	}	

	function bindUiActions() {
		cache.$carouselContainer.on('slide.bs.carousel', function(e) {
  			refreshOpacities(e.relatedTarget);
		});

		cache.$thumbnailsLi.click(function(){
			cache.$carouselContainer.carousel($(this).index());
		});
	}

	$.fn.thumbnailsCarousel = function(options) {
		conf = $.extend(conf, options);

		init();
		bindUiActions();

		return this;
	}

})(window, jQuery);

$('#photo-work .thumbnails-carousel').thumbnailsCarousel();

// for handcraft
;(function(window, $, undefined) {

	var conf = {
		center: true,
		backgroundControl: false
	};

	var cache = {
		$carouselContainer: $('#handcraft-work .thumbnails-carousel').parent(),
		$thumbnailsLi: $('#handcraft-work .thumbnails-carousel li'),
		$controls: $('#handcraft-work .thumbnails-carousel').parent().find('#handcraft-work .carousel-control')
	};

	function init() {
		cache.$carouselContainer.find('#handcraft-work ol.carousel-indicators').addClass('indicators-fix');
		cache.$thumbnailsLi.first().addClass('active-thumbnail');

		if(!conf.backgroundControl) {
			cache.$carouselContainer.find('#handcraft-work .carousel-control').addClass('controls-background-reset');
		}
		else {
			cache.$controls.height(cache.$carouselContainer.find('#handcraft-work .carousel-inner').height());
		}

		if(conf.center) {
			cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
		}
	}

	function refreshOpacities(domEl) {
		cache.$thumbnailsLi.removeClass('active-thumbnail');
		cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
	}	

	function bindUiActions() {
		cache.$carouselContainer.on('slide.bs.carousel', function(e) {
  			refreshOpacities(e.relatedTarget);
		});

		cache.$thumbnailsLi.click(function(){
			cache.$carouselContainer.carousel($(this).index());
		});
	}

	$.fn.thumbnailsCarousel = function(options) {
		conf = $.extend(conf, options);

		init();
		bindUiActions();

		return this;
	}

})(window, jQuery);

$('#handcraft-work .thumbnails-carousel').thumbnailsCarousel();