/**
 *  Creare uno slider di immagini
 *  Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
 *  Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
 */


 $(document).ready(function() {

    var imgFirst = $('.first');
    var imgLast = $('.last');
    var arrowRight = $('.arrow-right');
    var arrowLeft = $('.arrow-left');
    var counterFirst = $('.first-counter');
    var counterLast = $('.last-counter');


    // cambio immagine a click su freccia avanti
    arrowRight.click(function() {

        var activeImage = $('.active');
        var activeCounter = $('.active-counter')

        // scorrimento immagini
        activeImage.toggleClass('active');
        activeImage.next('img').toggleClass('active');

        if (activeImage.hasClass('last')) {
            imgFirst.toggleClass('active');
        }

        // scorrimento contatore
        activeCounter.toggleClass('active-counter');
        activeCounter.next('li').toggleClass('active-counter');

        if (activeCounter.hasClass('last-counter')) {
            counterFirst.toggleClass('active-counter');
        }
    });

    // cambio immagine a click su freccia indietro
    arrowLeft.click(function() {
        
        var activeImage = $('.active');
        var activeCounter = $('.active-counter')

        // scorrimento immagini
        activeImage.toggleClass('active');
        activeImage.prev('img').toggleClass('active');

        if (activeImage.hasClass('first')) {
            imgLast.toggleClass('active');
        }

        // scorrimento contatore
        activeCounter.toggleClass('active-counter');
        activeCounter.prev('li').toggleClass('active-counter');

        if (activeCounter.hasClass('first-counter')) {
            counterLast.toggleClass('active-counter');
        }
        
    });


 // end document ready   
 });