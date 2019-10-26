$(function () {

	$('.input').each(function () {
		$(this).on('blur', function () {
			if ($(this).val().trim() != "") {
				$(this).addClass('has-val');
			}
			else {
				$(this).removeClass('has-val');
			}
		})
	})

});

$(function() {
	$('a[href*="#"]').bind('click', function(e) {
		e.preventDefault();

		let target = $(this).attr("href");

		$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
			location.hash = target;
		});

	return false;

	});
});

let map = L.map('myMap').setView([49.839719, 24.023338], 17);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
let marker = L.marker([49.839719, 24.023338]).addTo(map);
