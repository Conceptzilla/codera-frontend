import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "coverage/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Exact design assets rely on CSS-controlled sizing and layered native images.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
