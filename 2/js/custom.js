jQuery(document).ready(function() {

    jQuery('.menu-toggle').toggle(

        function() {
            jQuery('#site-navigation ul').css({
                'display':'block'
            });
        },

        function() {
            jQuery('#site-navigation ul').css({
                'display':'none'
            });
        }

    );

});