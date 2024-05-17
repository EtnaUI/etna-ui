import { Button } from "../src";
import { Text } from "../src/components/Text/Text";

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
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
      <h1>Text</h1>
      <Text variant="h1">The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="h2">The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="h3">The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="headline">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="subheadline">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body-large">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body">The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="caption">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  );
};

export default App;
