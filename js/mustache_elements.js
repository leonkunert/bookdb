function topBar () {
    return '<div class="topBar">{{siteName}}</div>';
}

function divBooksStat ( element, method ) {
    getBooks( 'count', false, '', function() {
        $( element )[method]('<div class="left">In der DB befinden sich ' + this[0].value + ' Bücher</div>');
    });
}