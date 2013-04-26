function hasParameter(name) {
    return (window.location.search.indexOf(name) > 0);
}

function closeActivePopup() {
    var activePopup = $('.activePopup');

    if (activePopup) {
        activePopup.fadeOut().removeClass('activePopup');
    }
}

$(document).ready(function () {
    $('a.popUpParent').click(function (e) {
        closeActivePopup();

        var popUpId = $(this).data('popup');
        var popUp = $(popUpId);

        try {
            if (popUp) {
                var offset = $(this).offset();
                var height = $(this).height();
                var width = $(this).width();

                if ((offset.left + popUp.width()) > $('body').width()) {
                    popUp.css('left', offset.left + width - popUp.width() + 18);
                }
                else {
                    popUp.css('left', offset.left);
                }

                popUp.css('top', offset.top + height);
                popUp.addClass('activePopup').fadeIn();
                e.stopPropagation();
            }
        }
        catch (e) {
            alert(e.message);
        }
    });

    $(document).click(function () {
        closeActivePopup();
    });

    $('a.visibilityToggle').click(function (e) {
        var element = $($(this).data('element'));

        if (element.css('display') == 'none') {
            element.fadeIn();
        }
        else {
            element.fadeOut();
        }
    });

    $('a.sectionCloser').click(function (e) {
        var sectionParent = $(this).parents('section');

        if (sectionParent) {
            sectionParent.fadeOut();
        }
    });
});
