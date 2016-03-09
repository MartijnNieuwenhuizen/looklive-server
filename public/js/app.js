$(document).ready(function(){
    $('.product').first().addClass('product-active');
    $(".product-indicator[data-uuid='"+$('.product').first().data('uuid')+"']").addClass('product-indicator-active');

    $('.product-indicator').on('click', function(e){
        var id = $(e.currentTarget).data('uuid');
        $('.product-indicator-active').removeClass('product-indicator-active');
        $(e.currentTarget).addClass('product-indicator-active');
        $('.product.product-active').removeClass('product-active');
        $(".product[data-uuid='"+id+"']").addClass('product-active');
    });
});
