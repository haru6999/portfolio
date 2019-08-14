jQuery(window).on('load', function() {
    $(function() {
        // headerのmenubar
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
        
        // 画面スクロール
        var offsetY = -10;
        var time = 500;
        $('#profile').click(function() {
            console.log("yes");
            var target = $(this.hash);
            if (!target.length) return ;
            var targetY = target.offset().top+offsetY;
            $('html,body').animate({scrollTop: targetY}, time, 'swing');
            window.history.pushState(null, null, this.hash);
            return false;
        });
    }); 
});