var divIds = ["",".homeText",".chapterText", ".brothersText", ".alumniText", ".recruitmentText", ".contactText"];
var pageIds = ["", ".chapterBox", ".brothersBox", ".alumniBox", ".recruitmentBox", ".contactBox"];
var pageValue = { "chapter": 1, "brothers": 2, "alumni": 3, "recruitment": 4, "contact": 5 }
var currentNav = 1;
var lastNav;
var currentPage;
var newPage;

$(document).ready(function() {
	currentPage = pageValue[location.href.split('/').pop()];
	if (document.cookie == "1") 
		{
			$(pageIds[currentPage]).css("position", "relative");
			$(pageIds[currentPage]).css("overflow", "hidden");
			$(pageIds[currentPage]).css("left", "5000px");
			$(pageIds[currentPage]).animate({ left: "-=5000px"}, 500 );
		}
	else if (document.cookie == "2")
		{
			$(pageIds[currentPage]).css("position", "relative");
			$(pageIds[currentPage]).css("overflow", "hidden");
			$(pageIds[currentPage]).css("right", "5000px");
			$(pageIds[currentPage]).animate({ right: "-=5000px"}, 500 );
		}

	$('.navigation').mouseover(function() {
		document.cookie = 0;
		lastNav = currentNav;
		currentNav = $(this).attr('id');
		if (lastNav != currentNav) {
			$(divIds[lastNav]).fadeOut(200, function() { 
				$(divIds[currentNav]).fadeIn(200)
			});
		}
		
	});
	$('.pageSlide').mouseover(function () {
		currentPage = pageValue[location.href.split('/').pop()];
		newPage = $(this).attr('id');
		if (currentPage < newPage)
		{
			document.cookie = 1;
		}
		else
		{
			document.cookie = 2;
		}
	})
	$('.pageSlide').click(function (event) {
		event.preventDefault();
		newLink = event.target.href;
		newPage = $(this).attr('id');
		if (newLink != undefined)
		{
			if (newPage != currentPage) 
			{
				if (currentPage < newPage) 
				{
					$(pageIds[currentPage]).css("position", "relative");
					$(pageIds[currentPage]).css("overflow", "hidden");
					$(pageIds[currentPage]).animate({
						left: "-=5000px"}, 500, redirectPage );
				}
				else
				{
					$(pageIds[currentPage]).css("position", "relative");
					$(pageIds[currentPage]).css("overflow", "hidden");
					$(pageIds[currentPage]).animate({
						left: "+=5000px"}, 500, redirectPage );
				}
			}
		}
	});

	function redirectPage() {
		window.location = newLink;
	}

});

