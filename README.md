# template--vue-ts

模版仓库，技术栈：Vue 全家桶、TypeScript。

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Template Setup

### Vue([vuejs](https://github.com/vuejs)/**[create-vue](https://github.com/vuejs/create-vue)**)

```sh
pnpm create vue@3
```

### [antfu](https://github.com/antfu)(**[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)**,**[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)**)

```sh
pnpm add -D unplugin-auto-import unplugin-vue-components
```

【问题】ESLint error of `no-undef`(`'module' is not defined`)

【解决】`.eslintrc.cjs`:

```javascript
module.exports = {
  env: {
    node: true,
  },
};
```

【问题】ESLint error of `no-undef`(`'ref' is not defined`)

【解决】`.eslintrc.cjs`:

```javascript
module.exports = {
  extends: [
    ".eslintrc-auto-import.json"
  ],
};
```

【问题】`Unknown html tag HelloWorld`、`TS2304: Cannot find name 'ref'.`

【解决】`tsconfig.app.json`:

```json
{
  "include": [
    "auto-imports.d.ts",
    "components.d.ts"
  ]
}
```

### [antfu](https://github.com/antfu)([unocss](https://github.com/unocss)/**[unocss](https://github.com/unocss/unocss)**)

```sh
pnpm add -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons @iconify-json/fluent-emoji-flat @iconify-json/ion @iconify-json/logos
```

`main.ts`:

```typescript
import "uno.css";
```

### [antfu](https://github.com/antfu)([vueuse](https://github.com/vueuse)/**[vueuse](https://github.com/vueuse/vueuse)**)

```sh
pnpm add @vueuse/core @vueuse/integrations
pnpm add axios date-fns fuse.js
```

## Git Setup

### [leoforfree](https://github.com/leoforfree)/**[cz-customizable](https://github.com/leoforfree/cz-customizable)**

```sh
pnpm add -D cz-customizable
```

`package.json`:

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
  }
}
```

`.cz-config.js`

### [commitizen](https://github.com/commitizen)/**[cz-cli](https://github.com/commitizen/cz-cli)**

```sh
pnpm add -D commitizen
npm pkg set scripts.commit="cz"
```

### [conventional-changelog](https://github.com/conventional-changelog)/**[commitlint](https://github.com/conventional-changelog/commitlint)**

```sh
pnpm add -D @commitlint/config-conventional @commitlint/cli
```

`.commitlintrc.js`

### [typicode](https://github.com/typicode)/**[husky](https://github.com/typicode/husky)**

```sh
pnpm add -D husky
npm pkg set scripts.prepare="husky install"
git init
pnpm prepare
npx husky add .husky/commit-msg  "pnpm exec commitlint --edit"
npx husky add .husky/pre-commit  "pnpm lint && pnpm type-check"
```
