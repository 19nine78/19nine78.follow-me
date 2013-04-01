(function ($) {
    $.fn.followMe = function (options) {

        var settings = $.extend({ 'follower': $('.subContainer') }, options);

        this.each(function () {

            $(this).on('mouseover', function () {
                var element = settings.follower.detach();
                var target = $(this);
                target.append(element);
            });

        });

    };
})(jQuery);