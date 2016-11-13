function onPostDelete(){
    $(this).closest('li.list-group-item').detach()
}

$(function () {

    $("#bl").blur(function () {
        if($(this).val() != '') return;

        $("#disp").css("display", "none");
        $("#displ").css("display", "none");
    });

    $("#bl").focus(function () {
        $("#disp").css("display", "block");
        $("#displ").css("display", "block");
    });

    // Удаление поста
    $('[title="Delete"]').click(onPostDelete)

    // Добавление поста

    $('form').submit(function (e) {
        e.preventDefault()

        console.log('hi')
        var post_text = $('input#bl').val()

        $('ul.list-group').prepend(
            '<li class="list-group-item">\
                        <div class="row">\
                        <div class="col-xs-3 col-sm-2">\
                        <img src="https://placeholdit.imgix.net/~text?txtsize=9&amp;txt=50%C3%9750&amp;w=50&amp;h=50" alt="">\
                        </div>\
                        <div class="col-xs-8 col-sm-9">\
                        <p>Post</p>\
                    </div>\
                    <div class="col-xs-1 col-sm-1">\
                        <button title="Delete" class="btn btn-default tmp_for_delete"><i class="fa fa-times" aria-hidden="true"></i></button>\
                        </div>\
                        <div class="col-xs-12" style="padding-top: 30px;">\
                        <img src="https://placeholdit.imgix.net/~text?txtsize=56&txt='+post_text+'&w=600&h=600" class="img-responsive" alt="">\
            </div>\
            <div class="col-xs-12" style="padding-top: 20px;">\
            <!--  <div class="btn btn-default pull-right">+1</div> -->\
            <button class="btn btn-default pull-right"><span class="murrk">D</span> +1 murrk\
        </button>\
        </div>\
        </div>\
        </li>'
        )

        $('.tmp_for_delete').click(onPostDelete).removeClass('tmp_for_delete')

        $('input#bl').val('')
        $("#bl").blur()
    })
})

