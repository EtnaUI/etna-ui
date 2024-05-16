import { Button } from "../src";

const App = () => {
  return (
    <div>
      <h1>Example Page</h1>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary" size="small">
        Primary Small
      </Button>
      <Button variant="secondary" size="small">
        Secondary Small
      </Button>
      <Button variant="primary" size="large">
        Primary Large
      </Button>
      <Button variant="secondary" size="large">
        Secondary Large
      </Button>
      <Button size="small">Small</Button>
      <Button size="medium">Small</Button>
      <Button size="large">Large</Button>
    </div>
  );
};

export default App;
