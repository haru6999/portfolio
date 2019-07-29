jQuery(window).on('load', function() {
    $(function() {
        $(".menu-trigger").click(function() {
            $(this).toggleClass("active");
            $(".yellow").toggleClass("active");
            $(".purple").toggleClass("active");
            $("header li").toggleClass("active");
            if($('.li').hasClass('active')){
                setTimeout(function(){
                    $('.li').css('opacity','1');
                },400);
            }else{
                $('.li').css('opacity','0');
            }
        });
        
    });
});