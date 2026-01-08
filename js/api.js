async function fetchData(endpoint) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
        if (!res.ok) throw new Error('Ошибка API');
        return await res.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}
