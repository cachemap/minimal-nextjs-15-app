export async function getJoke() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return fetch("https://v2.jokeapi.dev/joke/Any", {
    cache: 'force-cache',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.type === "single") {
        console.log(`Joke: ${data.joke}`);
        return data.joke;
      } else {
        console.log(`Setup: ${data.setup}`);
        console.log(`Delivery: ${data.delivery}`);
      }
      return data.setup + " " + data.delivery;
    })
    .catch((error) => console.error("Error fetching joke:", error));
}
