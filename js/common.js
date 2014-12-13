$(document).ready(function(){
	// on search change, load the search results page
	$("#sortBy").change(function(){
		location.href = encodeURI("places.html?s="+$("#sortBy").val());
	});
	// look for a search variable, if found, process it
	var searchParam = getUrlParameter("s");
	if (searchParam !== false){
		searchParam = decodeURI(searchParam);
		$("#sortByTarget").html(searchParam);
		$("#sortBy").val(searchParam);
	}
});
function getUrlParameter(sParam){
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++){
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam){
			return sParameterName[1];
		}
	}
	return false;
}


// Carousel

$(".owl-carousel").owlCarousel();
$(document).ready(function() {