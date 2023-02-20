# template--vue-ts-vant

模版仓库，技术栈：Vue 全家桶、TypeScript、Vant4 UI。

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

### Vant4 UI

```sh
pnpm add vant
```

#### 引入函数组件

`main.ts`:

```typescript
import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";
```

#### 适配桌面端 `mouse` 事件([@vant/touch-emulator](https://github.com/vant-ui/vant/tree/main/packages/vant-touch-emulator))

```sh
pnpm add @vant/touch-emulator
```

`main.ts`:

```typescript
import "@vant/touch-emulator";
```

#### 适配 iPhone X 等机型的底部指示条

`index.html`:

```html
<!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
<meta
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
  name="viewport"
/>
```

`*.vue`:

```html
<!-- 开启顶部安全区适配 -->
<van-nav-bar safe-area-inset-top />
<!-- 开启底部安全区适配 -->
<van-number-keyboard safe-area-inset-bottom />
```

#### 组合式 API(@vant/use)

```sh
pnpm add @vant/use
```
