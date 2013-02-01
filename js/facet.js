(function($){
    var Facet = function(elem, options){
        var element = $(elem);
        var obj = this;
        var settings = $.extend({
                class: 'facet_default',
                roundedCorners: true
        }, options || {});

        element.addClass(settings.class);
        settings.roundedCorners ? element.addClass('roundedCorners') : element.addClass();
        typeof settings.header != 'undefined'  ?
            element.prepend('<label>' + settings.header + '</label><br />') :
            element.prepend(''); // do nothing for now
        element.find('label:nth-child(1)').css('font-weight','bold');

        /*this.publicMethod = function(){
        };*/
    };

    $.fn.facet = function(options){
        return this.each(function(){
            var element = $(this); // changed from var element = $(this);
            if (element.data('facet')) return; // Return early if this element already has a plugin instance
            var facet = new Facet(this, options);
            element.data('facet', facet);
        });
    };
})(jQuery);