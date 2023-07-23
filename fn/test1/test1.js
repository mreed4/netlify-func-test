const handler = async (event) => {
  const { s: searchTerm } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&type=movie`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { Search } = data;
      // console.log(Search);
      return {
        statusCode: 200,
        body: JSON.stringify({ Search }),
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        statusCode: 500,
        body: JSON.stringify({ err }),
      };
    });
};

module.exports = { handler };
