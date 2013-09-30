function getBooks( view, group, key, callback ) {
    group = typeof group !== 'undefined' ? group : false;
    key = typeof key !== 'undefined' ? key : '';
    
    $.ajax({
        type: "GET",
        url: "https://leon.leo.uberspace.de/couchdb/books/_design/books/_view/" + view + "?group=" + group + "&key=\"" + key +"\"",
        contentType: "application/json",
        dataType: "json",
        complete: function( req ){
            if( req.status == 200 ){
                callback.call(req.responseJSON.rows);
            } else {
                console.log( req );
            }
        }
    });
}