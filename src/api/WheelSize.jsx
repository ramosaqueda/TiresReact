import axios from 'axios'
export class WheelSize {

    static async fetchMakes() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SITE_API_URL}makes/?ordering=slug&lang=es&region=ladm&user_key=${import.meta.env.VITE_SITE_API_KEY}`);            
        return response.data.data;

      } catch (e) {
        console.log(e);
      }
    }


    static async fetchModels(slug) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SITE_API_URL}models/?make=${slug}&region=ladm&user_key=${import.meta.env.VITE_SITE_API_KEY}`);            
           
            return response.data.data;            
        }
        catch(e) {
            console.log(e);
        }
    }

    static async fetchYear(make,model) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SITE_API_URL}years/?make=${make}&model=${model}&region=ladm&user_key=${import.meta.env.VITE_SITE_API_KEY}`);            
            return response.data.data;            
        }
        catch(e) 
        {
            console.log(e)

        }
    }

    static async fetchGeneration(make,model,year) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SITE_API_URL}generations/?make=${make}&model=${model}&year=${year}&region=ladm&user_key=${import.meta.env.VITE_SITE_API_KEY}`);            
            return response.data.data; 
 
        }
        catch(e) 
        {
            console.log(e)

        }
    }

    static async fetchModification(make,model,year) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SITE_API_URL}modifications/?make=${make}&model=${model}&year=${year}&user_key=${import.meta.env.VITE_SITE_API_KEY}`);            
            return response.data.data;   
            
 
        }
        catch(e) 
        {
            console.log(e)

        }
    }
    

    static async fetchByModel(make,model,year,modification) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SITE_API_URL}search/by_model/?make=${make}&model=${model}&year=${year}&modification=${modification}&user_key=${import.meta.env.VITE_SITE_API_KEY}`);            
          //  console.log(response.data.data);
            return response.data.data;   
            //           https://api.wheel-size.com/v2/by_model/?make=citroen&model=aircross&year=2021&modification=b668e6c0f1&user_key=2c180af0515421533b547f36959ce175
 
        }
        catch(e) 
        {
            console.log(e)

        }
    }
}