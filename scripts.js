$(document).ready(function() {
    $('#contact-btn').click(function() {
        $('#contactModal').modal('show');
    });

    $('.carousel-item img').hover(
        function() {
            $(this).attr('data-src', $(this).attr('src')).attr('src', 'relative/path/to/web-development-image.png');
        },
        function() {
            $(this).attr('src', $(this).attr('data-src'));
        }
    );

    $('.carousel-item img').click(function() {
        window.open('https://fylehq.com', '_blank');
    });

    // OUR PROJECT section image change on click
    $('.project-content').click(function() {
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
        $('.project-content').removeClass('active');
        $(this).addClass('active');
    });
});
