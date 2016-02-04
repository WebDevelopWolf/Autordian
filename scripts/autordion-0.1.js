
function autordionInitialise(accordion) {
	var accordionextra = accordion + " .panel-heading img";

	$(accordionextra).hide();

	
	$(accordion).find('.panel-collapse').each(function() {
		$(this).find('input').blur(function() {
		var elementCount = 0;
		var elementValueCount = 0;
		$(this).parent().parent().parent().find('input').each(function() {
			if ($(this).is(':radio')) {
				if ($(this).is(':first-child')){
					elementCount++;
				}
			}
			else {
				elementCount++;
			}
			if ($(this).is(':radio')) {
				if ($(this).is(':checked')) {
					//Do Validation
					elementValueCount++;
				}				
				} else {
				if ($(this).val().length > 0) {
					//Do Validation
					elementValueCount++;
				}
			}
			
		})
		if (elementCount === elementValueCount) {
			$(this).closest('.panel-collapse').collapse('hide');
			$(this).closest('.panel-collapse').parent().next().find('.panel-collapse').collapse('show');
			$(this).closest('.panel-collapse').parent().find('.panel-heading img').show();
		}
		else
		{
			$(this).closest('.panel-collapse').parent().find('.panel-heading img').hide();
		}
		});
	})
}


