import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // (Opcional pero recomendado) asegura root correcto si tu entorno "confunde" el root.
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: {
      next: {
        rootDir: ["."],
      },
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // Upgrade unblocker: allow legacy code while we migrate gradually
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "no-var": "warn",
      "prefer-const": "warn",
    },
  },
]);
