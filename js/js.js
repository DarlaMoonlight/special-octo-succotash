$(function () {

    $("#bl").blur(function () {
        $("#disp").css("display", "none");
        $("#displ").css("display", "none");
    });

    $("#bl").focus(function () {
        $("#disp").css("display", "block");
        $("#displ").css("display", "block");
    });

    // Удаление поста
    $('[title="Delete"]').click(function(){
        $(this).closest('li.list-group-item').detach()
    })
})

