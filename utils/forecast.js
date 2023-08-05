import request from "postman-request";

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d4c255d4b1b6221d374b8169bf0ea68f&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log("Unable to Connect to Weather service!", undefined);
        } else if (body.error) {
            console.log("Please specify a valid Location", undefined);
        } else {
            console.log(body);
            callback(undefined, {
                temp: body.current.temperature,
                atemp: body.current.feelslike,
                weather_desc: body.current.weather_descriptions[0],
                name: body.location.name,
                country: body.location.country,
                region: body.location.region,
                tz: body.location.timezone_id,
            })
        }
    })
}

export default forecast;