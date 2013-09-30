var Globals = {
    siteName : 'Bücherverwaltung'
}
var template = topBar()+'<div id="page"></div>';
divBooksStat( '#page', 'append' );
var html = Mustache.to_html(template, Globals);