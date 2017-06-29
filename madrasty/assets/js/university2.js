
$(".custom-search-form").on("keyup", function() {
    var g = $(this).children("input").val().toLowerCase();
    $(".category-caption h4").each(function() {
        var s = $(this).text().toLowerCase();
        $(this).closest('.uni_box')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
});
