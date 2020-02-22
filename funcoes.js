async function enviarPeticion(url) {

	  return fetch(url)
      .then(function (response) {
          return response.json()
      })
      .then(function (data) {
          //console.log('Respuesta', data);
          return data;
      }).catch(function (error) {
          console.log('Error', error);
          alert("Error peticion");
          return null;
      });
}
function openDataBarcelonaToGeoJSON(respuestaGeonames){

   var geoJSON ={
       "type": "FeatureCollection",
       "features": []
   };

   for (var i =0; i < respuestaGeonames.length; i++){

       geoJSON.features.push(
           {
               "type": "Feature",
               "properties": {"ID_Estacao":respuestaGeonames[i].Station_id,
                               "Nome_Estacao":respuestaGeonames[i].Station_name },
               "geometry": {
                 "type": "Point",
                 "coordinates": [
                   respuestaGeonames[i].Station_lng,
                   respuestaGeonames[i].Station_lat
                 ]
               }
             }
       );

   } //fin loop
	
	   return geoJSON;
	
}
