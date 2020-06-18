$('#giphy-button').click(function() {
    $("#giphyModal").modal("toggle");
});

var offsetVal = 0;

$('#submit-button').click(function() {
    offsetVal = 0;
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?api_key=bBIOwAwLL2Hx7XLoIbVbBe3VtHoqjHMz&q="+ $('#search').val() +"&limit=18&offset=" + offsetVal,
        cache: false,
        dataType: "json",
        type: "GET",
        success: function(result) {
            if(result.meta.status == 200 && result.meta.msg == "OK" && result.data.length !== 0){
                $('#giphy-content').html("<div class='col-4 mb-3'><img src="+ result.data[0].images.fixed_height_downsampled.url +" class='img-fluid giphy-image' /></div>");
                var i = 1;
                while(i<result.data.length){
                    $('#giphy-content').append("<div class='col-4 mb-3'><img src="+ result.data[i].images.fixed_height_downsampled.url +" class='img-fluid giphy-image' /></div>");
                    i++;
                }
                if(result.pagination.total_count > result.pagination.offset){
                    $('#more-button').css('display', 'block');    
                    offsetVal = result.pagination.offset + 18;
                }
                else{
                   $('#more-button').css('display', 'none');     
                }
            }
        }
    });
});

$('#more-button').click(function() {
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?api_key=bBIOwAwLL2Hx7XLoIbVbBe3VtHoqjHMz&q="+ $('#search').val() +"&limit=18&offset=" + offsetVal,
        cache: false,
        dataType: "json",
        type: "GET",
        success: function(result) {
            if(result.meta.status == 200 && result.meta.msg == "OK" && result.data.length !== 0){
                var i = 0;
                while(i<result.data.length){
                    $('#giphy-content').append("<div class='col-4 mb-3'><img src="+ result.data[i].images.fixed_height_downsampled.url +" class='img-fluid giphy-image' /></div>");
                    i++;
                }
                if(result.pagination.total_count > result.pagination.offset){
                    $('#more-button').css('display', 'block');    
                    offsetVal = result.pagination.offset + 18;
                }
                else{
                   $('#more-button').css('display', 'none');     
                }
            }
        }
    });
});

var quill = new Quill('#quill-editor', {
    modules: {
        toolbar: '#toolbar'
    },
    placeholder: 'Type or add whatever you want...',
    theme: 'snow'
});

var imgIndex = 0;

$('body').on('click', '.giphy-image', function() {
    quill.insertEmbed(imgIndex, 'image', $(this)[0].src);
    imgIndex++;
    $("#giphyModal").modal("toggle");
});