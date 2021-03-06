////////////////////////////////////////
// File birdfield.js.
jQuery(function() {

	jQuery( window ).load(function() {

		// Header Slider
		jQuery( '.slider[data-interval]' ).birdtherapy_Slider();

		// set drawer navigation
		if ( window.matchMedia ) {
			// MediaQueryList
			var mq = window.matchMedia( '( max-width: 930px )' );
			var birdtherapyNavigation = function ( mq ) {
				if ( mq.matches ) {
					jQuery( ".menu" ).addClass( 'drawer-nav' );
					jQuery('.drawer').drawer({
						class: {
							nav: 'drawer-nav',
							toggle: 'drawer-toggle',
						},
						scroll: {
							mouseWheel: true,
							preventDefault: false
						},
						showOverlay: true
					});
				}
				else {
					// cancel drawer navigation
					if( jQuery( '.drawer-nav' ).length ) {
						jQuery('.drawer').drawer('destroy');
						jQuery( ".menu" ).removeClass( 'drawer-nav' );
					}
				}
			};

			mq.addListener( birdtherapyNavigation );
			birdtherapyNavigation( mq );
		}	
	});

	// Navigation for mobile
	jQuery("#small-menu").click(function () {
		jQuery("#menu-primary-items").slideToggle()
		jQuery("#menu-wrapper").toggleClass("open");
	});

		
	// Windows Scroll
	var totop = jQuery('#back-top');
	jQuery( window ).scroll(function () {
		// back to pagetop
		var scrollTop = parseInt( jQuery( this ).scrollTop() );

		// fixed header with scroll
		if ( scrollTop > 200 ) {
			jQuery('body').addClass('fixed-header');
		}
		else {
			jQuery('body').removeClass('fixed-header');
		}

		if ( scrollTop > 300 ) {
			jQuery('.fixed-header #header').addClass('show');
		}
		else{
			jQuery('.fixed-header #header').removeClass('show');
		}

	});

	// back to pagetop
	jQuery('#back-top').click( function () {
		console.log("back-top");
		jQuery( 'body, html' ).animate( { scrollTop: 0 }, 500 );
		return false;
	});
});

////////////////////////////////////////
// Header Slider
jQuery.fn.birdtherapy_Slider = function(){
	return this.each(function(i, elem) {
		// change slide
		var setos_interval = jQuery( '.slider' ).attr( 'data-interval' );
		setInterval( function(){

			index = jQuery( '.slideitem.active' ).index( '.slideitem' );
			index++;
			if( index >= jQuery( '.slideitem' ).length ){
				index = 0;
			}

			// fade in
			jQuery( '.slideitem:eq(' + index + ')' ).fadeIn( 1000, function (){
				// fade out
				jQuery( '.slideitem.active' ).fadeOut( 1000 );
				jQuery( '.slideitem.start').removeClass( 'start' );
				jQuery( '.slideitem.active').removeClass( 'active' );
				jQuery( '.slideitem:eq(' + index + ')').addClass( 'active' );
			} );
		}, setos_interval );
	});
};
