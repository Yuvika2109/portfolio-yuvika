import { extendTheme, ThemeConfig } from "@chakra-ui/react";
const config: ThemeConfig = { initialColorMode: "dark", useSystemColorMode: false };
const theme = extendTheme({
  config,
  fonts: { mono: "'Fira Code', 'Cascadia Code', 'Consolas', monospace" },
  styles: { global: { body: { bg: "#1E1E1E", color: "#cccccc" } } },
});
export default theme;
