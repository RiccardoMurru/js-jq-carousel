/**
 *  Creare uno slider di immagini
 *  Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
 *  Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
 */


 $(document).ready(function() {

    var img = $('img');
    var imgFirst = $('.first');
    var imgLast = $('.last');
    var arrowRight = $('.arrow-right');
    var arrowLeft = $('.arrow-left');


    // cambio immagine a click su freccia avanti
    arrowRight.click(function() {

        var activeImage = $('.active');
        activeImage.toggleClass('active');
        activeImage.next('img').toggleClass('active');

        if (activeImage.hasClass('last')) {
            imgFirst.toggleClass('active');
        }
    });

    // cambio immagine a click su freccia indietro
    arrowLeft.click(function() {
        
        var activeImage = $('.active');
        activeImage.toggleClass('active');
        activeImage.prev('img').toggleClass('active');

        if (activeImage.hasClass('first')) {
            imgLast.toggleClass('active');
        }
        
    });


 // end document ready   
 });