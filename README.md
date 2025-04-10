# gs-components

A reusable component library for Vue 3, built with TypeScript. Designed to provide a consistent UI/UX for Greenspark
projects.

## Installation

```sh
npm install @getgreenspark/gs-components
```

or using yarn:

```sh
yarn add @getgreenspark/gs-components
```

## Usage

### Global Registration

You can register all components globally in your Vue app:

```ts
import { createApp } from 'vue'
import App from './App.vue'

import gsComponents from '@getgreenspark/gs-components'
import '@getgreenspark/gs-components/gs-components.css'

const app = createApp(App)
app.use(gsComponents)
app.mount('#app')
```

### Importing Individual Components

To reduce bundle size, import only the components you need:

```vue
<script lang="ts">
import { GsButton } from '@getgreenspark/gs-components'
</script>

<template>
  <GsButton>Click Me</GsButton>
</template>
```

## Components

| Component  | Description                     |
|------------|---------------------------------|
| `GsButton` | A customizable button component |

More components and documentation coming soon.

## Development

```sh
git clone https://github.com/getgreenspark/gs-components.git
cd gs-components
npm install
npm run dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
