// your code here!
counter = function () {
    var value = $('#user-text').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        return;
    }
    var spaces = /\s+/gi;
    var wordCount = value.trim().replace(spaces, ' ').split(' ').length;

    $('#wordCount').html(wordCount);
};

$(document).ready(function () {
    $('#count').click(counter);
});
