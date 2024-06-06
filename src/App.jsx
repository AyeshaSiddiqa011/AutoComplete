import Autocomplete from "./components/Autocomplete";

function App() {
  // const staticData = [
  //   "apple",
  //   "banana",
  //   "watermelon",
  //   "orange",
  //   "peach",
  //   "grapes",
  //   "plum",
  //   "cheery",
  // ];

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("No network response");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
    <div>
      <h1>AutoComplete/ TypeAhead</h1>
      <Autocomplete
        placeholder={"Enter Recipe"}
        fetchSuggestions={fetchSuggestions}
        datakey={"name"}
        customLoading={<>Loading...</>}
        onSelect={(res) => {
          console.log(res);
        }}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </div>
  );
}

export default App;
