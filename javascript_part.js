/* // Insert this code just after the widget map (body_part.html) inside <script></script> HTML Tag // */

/* Map Settings */

		var mymap = L.map('my_osm_widget_map', { /* use the same name as your <div id=""> */
    			center: [XXX-LATITUDE-CENTER-XXX, XXX-LONGITUDE-CENTER-XXX], /* set the center of the displayed map as GPS Coordinates : [LAT,LON] */
    			zoom: 17, /* define the zoom level */
    			zoomControl: false, /* false = no zoom control buttons displayed */
			scrollWheelZoom: false /* false = scrolling zoom on the map is locked */
		});

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=XXX-YOUR-MAPBOX-ACCESS-TOKEN-XXX', { /* set your personal MapBox Access Token */
			maxZoom: 20, /* zoom limit of the map */
			attribution: 'Données &copy; Contributeurs <a href="http://openstreetmap.org">OpenStreetMap</a> + ' +
				'<a href="http://mapbox.com">Mapbox</a> | ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> ' +
				'Guillaume Rouan 2016', /* set the map's caption */
			id: 'mapbox.streets' /* set MapBox's map background : mapbox.light / dark / streets / outdoors / satellite */
		}).addTo(mymap);

		L.marker([XXX-LATITUDE-XXX, XXX-LONGITUDE-XXX]).addTo(mymap); /* set your location's GPS Coordinates : [LAT,LON] */
