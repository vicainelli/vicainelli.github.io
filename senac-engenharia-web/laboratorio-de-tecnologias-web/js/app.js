$(document).ready(function() {

	// var url = 'http://vicainelli.github.io/senac-engenharia-web/laboratorio-de-tecnologias-web/js/html-tutorials.json';
	// 	$.getJSON(url, function(data) {

	// 		var items = [];
	// 		$.each( data.data, function( key, val ) {
	// 			items.push( "<li><a target='_blank' href='" + val.uri + "'>" + val.title + "</a></li>" );
	// 		});

	// 		$( "<ul/>", {
	// 			html: items.join( "" )
	// 		}).appendTo('#load_html');
	// });


	function loadTutorials(url, idLoad) {

		$.getJSON(url, function(data) {
			
			var items = [];
			
			$.each( data.data, function( key, val ) {
				items.push( "<li><a target='_blank' href='" + val.uri + "'>" + val.title + "</a></li>" );
			});

			$( "<ul/>", { html: items.join( "" ) }).appendTo(idLoad);
		});

	};

	loadTutorials('http://vicainelli.github.io/senac-engenharia-web/laboratorio-de-tecnologias-web/js/html-tutorials.json', '#load_html');
	loadTutorials('http://vicainelli.github.io/senac-engenharia-web/laboratorio-de-tecnologias-web/js/css-tutorials.json', '#load_css');
	loadTutorials('http://vicainelli.github.io/senac-engenharia-web/laboratorio-de-tecnologias-web/js/js-tutorials.json', '#load_js');

});