$(document).ready(function(){

    var sourceSquare = $('#square-template').html();
    var templateSquare = Handlebars.compile(sourceSquare);

    $('#grid').on('click', '.square', function(){
        var that = $(this);
        if ((that.hasClass('yellow')) || (that.hasClass('green'))) {
            alert('hai già cliccato questo quadratino');
        } else {
            $.ajax({
                url: 'https://flynn.boolean.careers/exercises/api/random/int',
                method: 'GET',
                success: function(data){
                    var random = data.response;
                    colorSquare(random, that);
                    numeroCentrato(random, that);
                },
                error: function(){
                    alert('Qualcosa è andato storto!!!!!!');
                }
            });
        };
    });
    for (var i = 0; i < 36; i++) {
        $('#grid').append(templateSquare);
    };

    function colorSquare(value, elementoCliccato) {
        if (value > 5) {
            elementoCliccato.addClass('green').removeClass('yellow');
        } else {
            elementoCliccato.addClass('yellow').removeClass('green');
        };
    };

    function numeroCentrato(value, elementoCliccato) {
        elementoCliccato.text(value);
    }

});
