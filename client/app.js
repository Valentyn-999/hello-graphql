const GRAPHQL_URL = "http://localhost:4000/"

async function fetchGreatings() {
    const res = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `
        })
    })
    const { data } = await res.json()
    return data.greeting
}

fetchGreatings().then((greeting) => {
    const title = document.querySelector("h1");
    title.textContent = greeting
});