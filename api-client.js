const API_KEY = "4738e27d0a155e2df56e6c7e9c7e314d";

async function getData() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

// getData()
// getData().then(movies => {
//   movies
// })

// examples:
// async function doWork() {
//     try {
//         const response = await makeRequest("Facebook")
//         console.log("Response Recieved")
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse)
//     } catch (err) {
//         console.log(err)
//     }
// }

// doWork()

// async function fetchMovies() {
//   const response = await fetch('/movies');
//   // waits until the request completes...
//   console.log(response);
// }
