import axios from "axios";


const searchImages = async (term: string) => {
    const url = 'https://api.unsplash.com/search/photos';
    const response = await axios.get(
        url,
        {
            headers: {
                Authorization: 'Client-ID iA_jfuObNSkSrR6KV8iF6TAdZuPuI-WDWYidKRqniGU'
            },
            params: {
                query: term
            }
        }
    )

    return response.data.results;
};

export default searchImages