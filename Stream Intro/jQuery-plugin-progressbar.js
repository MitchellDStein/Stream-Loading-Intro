(function ($) {
	$.fn.loading = function () {
		var DEFAULTS = {
			backgroundColor: '#7b7b7b',
			progressColor: '#8b37da',
			percent: 100,
			duration: 120000

		};

		//for each object this is attached to
		$(this).each(function () {
			var $target = $(this);

			var options = {
				backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
				progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
				percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
				duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
			};

			// set correct colors for each found element
			$target.find('.background').css('background-color', options.backgroundColor);
			$target.find('.left').css('background-color', options.backgroundColor);
			$target.find('.rotate').css('background-color', options.progressColor);
			$target.find('.right').css('background-color', options.progressColor);

			//find location in HTML to add rotation animation to
			var $rotate = $target.find('.rotate');

			// set how fast the function updates the rotation position
			setTimeout(function () {
				$rotate.css({
					'transition': 'transform ' + options.duration + 'ms linear',
					'transform': 'rotate(' + options.percent * 3.6 + 'deg)'
				});
			}, 1);


			// stops the cube animation oonce the percent hits 50%
			if (options.percent > 50) {
				var animationRight = 'toggle ' + (options.duration / options.percent * 50) + 'ms step-end';
				var animationLeft = 'toggle ' + (options.duration / options.percent * 50) + 'ms step-start';
				$target.find('.right').css({
					animation: animationRight,
					opacity: 1
				});
				//left cube is not shown until 50% has been achieved
				$target.find('.left').css({
					animation: animationLeft,
					opacity: 0
				});
			}
		});
	}
})(jQuery);