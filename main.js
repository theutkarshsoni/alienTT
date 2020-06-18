$('#giphy-button').click(function() {
    $("#giphyModal").modal("toggle");
});

$('#submit-button').click(function() {
    console.log($('#search').val());
});

var quill = new Quill('#quill-editor', {
    modules: {
        toolbar: '#toolbar'
    },
    placeholder: 'Type or add whatever you want...',
    theme: 'snow'
});