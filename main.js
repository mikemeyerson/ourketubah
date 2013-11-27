jQuery(document).ready(function () {

	jQuery(".title").click(function() {
		//Hide all
		jQuery("#gallery").attr("class", "well hide");
		jQuery("#texts").attr("class", "well hide");
		jQuery("#pricing").attr("class", "well hide");
		jQuery("#about").attr("class", "well hide");
		jQuery("#contact").attr("class", "well hide");
	});

	jQuery("#h_gal").click(function() {

		//Hide all others
		jQuery("#texts").attr("class", "well hide");
		jQuery("#pricing").attr("class", "well hide");
		jQuery("#about").attr("class", "well hide");
		jQuery("#contact").attr("class", "well hide");

		//Show
		jQuery("#gallery").attr("class", "well");
	});

	jQuery("#h_texts").click(function() {

		//Hide all others
		jQuery("#gallery").attr("class", "well hide");
		jQuery("#pricing").attr("class", "well hide");
		jQuery("#about").attr("class", "well hide");
		jQuery("#contact").attr("class", "well hide");

		//Show
		jQuery("#texts").attr("class", "well");
	});

	jQuery("#h_price").click(function() {

		//Hide all others
		jQuery("#texts").attr("class", "well hide");
		jQuery("#gallery").attr("class", "well hide");
		jQuery("#about").attr("class", "well hide");
		jQuery("#contact").attr("class", "well hide");

		//Show
		jQuery("#pricing").attr("class", "well");
	});

	jQuery("#h_about").click(function() {

		//Hide all others
		jQuery("#texts").attr("class", "well hide");
		jQuery("#pricing").attr("class", "well hide");
		jQuery("#gallery").attr("class", "well hide");
		jQuery("#contact").attr("class", "well hide");

		//Show
		jQuery("#about").attr("class", "well");
	});

	jQuery("#h_contact").click(function() {

		//Hide all others
		jQuery("#texts").attr("class", "well hide");
		jQuery("#pricing").attr("class", "well hide");
		jQuery("#about").attr("class", "well hide");
		jQuery("#gallery").attr("class", "well hide");

		//Show
		jQuery("#contact").attr("class", "well");
	});





});

