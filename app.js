import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

const address = process.argv[2];

if (!address) {
    console.log("Please provide address!");
} else {
    geocode(address, (error, { latitude, longitude } = {}) => {
        if (error) {
            return console.log(error);
        }

        forecast(latitude, longitude, (error, { temp, atemp } = {}) => {
            if (error) {
                return console.log(error);
            }

            console.log("It is currently " + temp + " degrees out. It feels like " + atemp + " degrees out.");
        });
    });
}