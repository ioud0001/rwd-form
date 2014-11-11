
document.addEventListener("DOMContentLoaded", init);

function init(){
	//startup script
	var adults;
	$("#num_adults").click(function(){
		adults = 180 * $("#num_adults").val();
		//alert($("#num_adults").val());
		$("#price").val(adults);
		$(".ui-slider-handle .ui-btn .ui-shadow").val(adults);
	});
	
	
}