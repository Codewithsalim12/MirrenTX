import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Suppress the parser serialization warning
      "@next/next/no-img-element": "off",
    },
    settings: {
      // Fix for ESLint parser serialization issue
      "import/parsers": {},
    },
  },
];

export default eslintConfig;
