import { Button } from "../src";

const App = () => {
  return (
    <div>
      <h1>Example Page</h1>
      <Button
        text={"Button"}
        onClick={() => {
          console.log("Button clicked");
        }}
      />
    </div>
  );
};

export default App;
