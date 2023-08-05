import request from "postman-request";


const geocode = (city, callback) => {
    const url = `https://geocode.maps.co/search?q=${city}+India`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to services!", undefined);
        } else if (!body) {
            callback("Please provide a valid Location.", undefined);
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
            })
        }
    })
}

export default geocode;