/*
	Active by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/


jQuery(function($){

'use strict';


    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */
	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(350).fadeOut('slow');
	    });
	}());
    /* ---------------------------------------------- /*
     * Full Screen
    /* ---------------------------------------------- */
    (function () {
        $(".st-fullHeight").height($(window).height());

        $(window).resize(function(){
            $(".st-fullHeight").height($(window).height());
        });

    }());

});