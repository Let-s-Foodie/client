import axios from 'axios';

class Yelp {
    constructor(lat, lng) {
        this.yelp = axios.create({
            baseURL: "http://localhost:8000/yelp",
        })
        this.lat = lat;
        this.lng = lng;
    }

    async getAll() {
        const response = await this.yelp.post('/dishes', {
            lat: this.lat,
            lng: this.lng
        })
        return response.data;
    }

    async searchLocation() {
        const response = await this.yelp.post('/local', {
            lat: this.lat,
            lng: this.lng
        })

        return response.data
    }

}

export default Yelp;