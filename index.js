function updateMap() {
    console.log("updating map with real time dataiI")
     fetch("/data.json")
         .then(response => response.json())
         .then(rsp=> {
               console.log(rsp.data)
               rsp.data.forEach(element => {
                        latitude = element.latitude;
                        longitude = element.longitude;

                        cases = element.infected;
                        if (cases>255){
                           color = "rgb(255 0 0)"
                        }
                        else {
                            color = `($(cases),0,0)`;
                        }

                        new mapboxgl.Marker({
                            draggable: false,
                            color: color
              })
                        .setLngLat([longitude, latitude])
                        .addTo(map);
        
        });
     })
}

let interval=2000;
setInterval(updateMap,interval);