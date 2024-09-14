async function getJson(path = '', params = {}) {
    const queryString = Object.keys(params)
        .map(key => 
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join('&');

    const url = queryString ? `${path}?${queryString}` : path;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        
        const res = await response.json();

        if (res.error) {
            throw new Error(res.error);
        }
        
        return res.data;
    } catch (error) {
        throw error;
    }
}
