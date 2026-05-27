export async function fetchData() {
    try {
        const response = await fetch("https://openlibrary.org/search.json?q=${javascript}");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}