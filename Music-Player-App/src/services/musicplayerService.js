import axios from "axios";
const API_BASE_URL = "https://via.placeholder.com/300";
export const fetchData = async (endpoint) => {
    try {
        const response = await fetch("/mock-playlist.json");
        return response.data;
    } catch ( error ) { 
        console.error("Error fetching data:", error);
        throw error;
        const API_URL = process.env.REACT_APP_API_URL;

 


    }
}