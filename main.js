$(document).ready(function() {

    //function  manipulate iframe
    function updateOutput() {
        $('iframe').contents().find('html')
            .html("<html><head><style type='text/css'>" + $('#cssPanel').val() + "</style></head><body>" + $('#htmlPanel').val() + "</body></html>");
        document.getElementById('outputPanel').contentWindow.eval($('#javascriptPanel').val());
    }

    // change color on hover 
    $('.toggleButton').hover(function() {
        $(this).addClass('highlightButton');
    }, function() {
        $(this).removeClass('highlightButton');
    });

    //active class
    $('.toggleButton').click(function() {
        $(this).toggleClass('active');
        $(this).removeClass('highlightButton');
        //toggle button click 
        var panelId = $(this).attr('id') + 'Panel';
        $('#' + panelId).toggleClass('hidden');

        var numberofActivePanels = 4 - $('.hidden').length;

        $('.panel').width(($(window).width() / numberofActivePanels) - 10);
    });

    //resizable area
    $('.panel').height($(window).height() - $('#header').height() - 15);

    //change tha panel
    $('.panel').width(($(window).width() / 2) - 10);

    updateOutput();

    //event textarea, put the current class click
    $('textarea').on('change keyup paste', function() {
        updateOutput();
    });
});