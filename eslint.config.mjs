import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends([
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ]),
  {
    ignores: ["node_modules", "dist", "public", ".next"],
    plugins: ["unused-imports", "unused-vars"],
    rules: {
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "warn",
      "unused-vars": "warn",
      "react/jsx-key": "error",
      "import/no-unresolved": "error",
      "import/ignore": [".coffee$", ".(scss|less|css)$"],
      "import/no-anonymous-default-export": [
        "error",
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: false,
          allowNew: false,
          allowLiteral: false,
          allowObject: true,
        },
      ],
    },
  },
];
