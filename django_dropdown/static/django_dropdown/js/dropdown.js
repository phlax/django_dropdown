/*jslint browser:true */
/*global jQuery */

"use strict";

(function ($) {
    $(document).ready(function () {
	$('.dropdown-link').click(function (evt) {
	    evt.preventDefault();
	    $($(this).data('target')).toggle()
	    $(this).toggleClass('open');
	});
    })

}(jQuery));
