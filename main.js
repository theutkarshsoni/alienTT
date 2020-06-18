var giphyButton = document.querySelector('#giphy-button');
giphyButton.addEventListener('click', function() {
    console.log('Success');
});

var quill = new Quill('#quill-editor', {
    modules: {
        toolbar: '#toolbar'
    },
    placeholder: 'Type or add whatever you want...',
    theme: 'snow'
});