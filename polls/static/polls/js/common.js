$( document ).ready(function() {

	var countAll = Number($('.vote__count .value').text());
	var maxCount = 0;

	$(".choice__count").each(function() {
		var curCount = Number($(this).text());
		if (curCount > maxCount) {
			maxCount = curCount;
		}
	});

	$(".choice").each(function() {
		var curCount = Number($(this).find(".choice__count").text());
    $(this).find(".choice__persents .value").text((curCount*100/countAll).toFixed(1));
    $(this).find(".choice__chart-part").css("width", (curCount*100/maxCount).toFixed(2) + "%");
	});

});
