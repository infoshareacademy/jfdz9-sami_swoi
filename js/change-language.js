(function()  {
    let switchButton = $('a.nav-menu__item--btnlang');

    let $elementsToTranslate = $('[data-lang]');
    let $inputButtonToTranslate = $('form.premiere input[type=submit]');
    let previousLang;
    let previousInput;

    function switchLanguage() {
        $elementsToTranslate.each(function () {
            previousLang = $(this).html();
            $(this).html($(this).attr('data-lang'));
            $(this).attr('data-lang', previousLang);
        });
        previousInput = $inputButtonToTranslate.val();
        $inputButtonToTranslate.val($inputButtonToTranslate.attr('data-lang--val'));
        $inputButtonToTranslate.attr('data-lang--val', previousInput);
    }

    switchButton.click(switchLanguage);
}) ();