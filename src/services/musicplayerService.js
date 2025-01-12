import axios from "axios";
const API_BASE_URL = "https://api.example.com";
export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get('${API_BASE_URL}/${endpoint}');
        return response.data;
    } catch ( error ) { 
        console.error("Error fetching data:", error);
        throw error;
        const API_URL = process.env.REACT_APP_API_URL;

 


    }
}