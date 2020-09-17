$(function() {
	$(window).scroll(function() {
		var topp = $(document).scrollTop();
		if (topp > 800) {
			$(".header").addClass("head_b");
			$(".navbar-default .navbar-nav>li>a").addClass("head_b");
		} else {
			$(".header").removeClass("head_b");
			$(".navbar-default .navbar-nav>li>a").removeClass("head_b");
		}
	})
})
