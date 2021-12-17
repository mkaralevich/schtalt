### schtalt

> Like styled, but schtalt.

---

`emotion`-based primitives with utilities in mind. DX experiment made for personal prototypes.

- ✓ Utilities
- ✓ Responsive
- ✓ CSS variables

```jsx
import { Flex, Text } from "../components/primitives";
import { motion } from "framer-motion";

const Item = ({ children }) => {
  return (
    <Flex
      // `as` prop works as expected
      as={motion.div}
      animate
      // All utilities are available both as props and inside `sc` object
      // Flexbox shortcut: direction<r|c>, justify<s|b|c|e>, align<s|c|e>
      flexes="rbc"
      w="100%"
      br={8}
      // Define CSS variable inside `tokens` file
      // Use CSS variables anywhere using `--` prefix
      bg="--c-white-900"
      // shortcut and theme-aware CSS
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
        // Use prefixed breakpoints defined in `tokens`
        // Prefix is configurable
        _md: {
          w: 440,
          py: 32,
          px: 24,
        },
      }}
    >
      {/* Use `t` variant defined in `tokens` */}
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

Setup with `yarn && yarn dev`.

---

### Known issues

- CSS variables aren't picked up from the middle of the string, e.g. `1px solid --c-black-300`
- Parts like `mappings` and `tokens` aren't properly separated from the components
- `emotion` doesn't generate component names inside `className` since there's only one `css` definition on `Box`. To fix, user has to add empty `css={{}}` on a `Box`-based component
- This is an experiment, therefore no proper testing was done

---

### Inspiration

- [@exah/forest](https://github.com/exah/forest)
- [theme-ui](https://github.com/system-ui/theme-ui)

---

### If you like idea

I have recently discovered [https://github.com/modulz/stitches](`stitches`) that covers utilities, variants, theming, CSS variables, and more. It's a production-ready library focused on DX experience.
