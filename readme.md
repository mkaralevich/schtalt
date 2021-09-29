### schtalt

> Like styled, but schtalt.

---

`WIP` Test environment for prototyping interfaces.

- ✓ Responsive
- ✓ CSS variables
- ✓ Shortcuts

```jsx
import React from "react";
import { Flex, Text } from "../components/primitives";

const Item = ({ children }) => {
  return (
    <Flex
      // Flexbox shortcuts: direction<r|c>, justify<s|b|c|e>, align<s|c|e>
      flexes="rbc"
      w="100%"
      br={8}
      // CSS variables defined in `tokens`
      bg="--c-white-900"
      // shortcut and theme aware CSS
      sc={{
        py: 24,
        px: 16,
        transition: "all .2s ease",
        cursor: "pointer",
        ":hover": {
          fg: "--c-accent-800",
          transform: "scale(1.01)",
          boxShadow: "0 0 16px 8px rgba(0, 0, 0, .02)",
        },
        _md: {
          // Breakpoints defined in `tokens`
          w: 440,
          py: 32,
          px: 24,
        },
      }}
    >
      <Text t="200">{children}</Text>
      <Text t="250">•••</Text>
    </Flex>
  );
};

const fruits = ["Banana", "Pineapple", "Açaí", "Watermelon", "Fig"];

export default function App() {
  return (
    <Flex h="100vh" flexes="ccc" gap={2} p={16} bg="--c-black-100">
      {fruits.map((i) => (
        <Item key={i}>{i}</Item>
      ))}
    </Flex>
  );
}
```

Setup with `npm i && npm run dev`.

---

### Inspiration

- [@exah/forest](https://github.com/exah/forest)
- [theme-ui](https://github.com/system-ui/theme-ui)
