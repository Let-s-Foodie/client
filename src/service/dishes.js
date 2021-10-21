import axios from 'axios';

class Dishes {
    constructor() {
        this.dishes = axios.create({
            baseURL:'http://localhost:8000/dishes'
        })
    }

    async getAll() {
        const response = await this.dishes.get()
        return response.data;
    }
}

export default Dishes;