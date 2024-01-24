
$(function(){

    let sideBarWidth = $(".sideBar-inner").innerWidth();
    $("#sidebar").css('left',-sideBarWidth)
    $("#sidebar i").click(function(){
        // $(".sideBar-inner").toggle(1000);
        if( $("#sidebar").css('left') == "0px"){
            $("#sidebar").animate({left: -sideBarWidth},1000);
        }else{
            $("#sidebar").animate({left:"0px"},1000);
        }
    
    })
    $(".Xmark").click(function(){
        $("#sidebar").animate({left: -sideBarWidth},1000);
    })

    $(".details #singer").click(function(){
        $(".caption1").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    })


$('textarea').keyup(function() {
       let maxLength = 100;
       let length = $(this).val().length;
       let totalLength = maxLength-length;
    if(totalLength<=0)
            {
                 $("#Num100").text("your available character finished");
                 $(".content #remain").css("display","none")
                
            }
        else{
        
        $("#Num100").text(totalLength);
        }
});

})





