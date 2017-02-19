// every 1 second, move the cursor to the next group tick
$('.group-tick').each(function(el) {
    el.addClass('current');
    setTimeout(1000);
});
