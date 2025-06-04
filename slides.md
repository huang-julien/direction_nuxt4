---
# You can also start simply with 'default'
theme: ./gold-navy
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# 🚗 Direction Nuxt 4

---
transition: fade-out
---

# Hello 👋

## Je suis Julien

<div class="mt-20" />

- Débuté mon voyage dans le monde du dev en 2020
- Référent frontend chez Leetchi
- Nuxt Core Team
- <logos-github-icon /> @huang-julien
- <logos-twitter /> JulienHuang_dev
- <logos-bluesky /> julienhuang-dev.bsky.social
- <logos-linkedin-icon /> julien-huang

<img v-drag="[653,44,133,134]"   class="rounded-full" src="/assets/profile_picture.jpg" />

<img v-drag="[634,312,174,40]"  class="text-pinky" src="/assets/leetchi.svg" />

<img v-drag="[634,375,168,42]" src="/assets/nuxt.png" />

---
layout: intro
---

# Qui a déjà utilisé Nuxt ?

<QrCodes />

---

# Nuxt <logos-nuxt-icon /> C'est quoi ?

- Meta-framework autour de VueJS et de NitroJS
- Permet d'effectuer du rendu serveur d'application VueJS
- Permet de générer une application VueJS en statique
- Prise en main ultra facile si vous connaissez déjà VueJS

<NuxtTimeline v-click class="my-10 mx-auto" />

<v-click>

<img v-drag="[627,349,187,184]" src="/assets/finally.jpg" />

</v-click>

---
layout: intro
---

# Nuxt 2 à 3

### Une migration... explosive

<img src="/assets/nuxt_code_frequency.png" class="mx-auto w-1/2 mt-2" />

---

| Breaking changes | Nuxt Team                                    | Users                             |
|------------------|----------------------------------------------|-----------------------------------|
| Vue 2 à Vue 3    | API interne                                  | Migration vers la composition API |
| ViteJS           | Nuxt bundler agnostic                        | --                                |
| Edge functions   | Extraction de Nitro + quasi-platform agnotic | --                                |

---

<Suspense>
  <Nuxters />
</Suspense>

---
layout: intro
---

# Nuxt 4

## Une migration en douceur

---

# La même codebase

<img src="/assets/nuxt_code_frequency.png" class="mx-auto w-1/2 mt-2" />

---
layout: intro
---

# Les changements les plus impactants

---

# Nouvelle convention de dossier

::window{filename="nuxt.config.ts"}

````md magic-move

```
|- assets
|- components
|- composables
|- layouts
|- pages
|- public
|- modules
|- middleware
|- utils
|- server
  |- plugins
  |- middleware
  |- api
    |- hello-world.ts
  |- utils
|- app.vue
|- error.vue
|- nuxt.config.ts

```

```

|- app
  |- assets
  |- components
  |- composables
  |- layouts
  |- pages
  |- utils
  |- app.vue
  |- error.vue
|- modules
|- public
|- server
  |- plugins
  |- api
    |- hello-world.ts
  |- utils
|- nuxt.config.ts

```

````

::

---

# BEAUCOUP de changements pour `useAsyncData` et `useFetch`

::window{filename="app.vue"}

```vue
<template>
  <div>
    <!---->
  </div>
</template>

<script setup lang="ts">
const key = ref('user-data-id')

const { data, execute } = await useAsyncData(key, () => {}, { immediate: false })

const { data: data2, execute: execute2 } = await useFetch(key, () => {}, { immediate: false })
</script>
```

::

---

# BEAUCOUP de changements pour `useAsyncData` et `useFetch`

### Correction de comportement

- Unicité des instances `asyncData`
- `data` et `error` sont désormais `undefined` par défaut au lieu de `null`
- `dedupe` est désormais `'cancel' | 'defer'` au lieu de `boolean`. `true` était l'équivalent de `'cancel'`

### Performances

- Data partagées entre les `asyncData` durant la phase de pre-render

---

# Auto-injection des noms de composants

::window

```bash
|- app
  |- components
    |- Mon
      |- Super
        |- Composant.vue
    |- Un
      |- AutreComposant.vue
|- nuxt.config.ts
```

::

<Spacer />

::window{filename="MonSuperComposant.test.ts"}

````md magic-move

```ts
describe('UI', () => {
  it('blabla', async () => {
    const wrapper = await mountSuspended(MonSuperComposant, {
      shallow: true
    })

    expect(wrapper.find({ name: 'Composant' }).exists()).toBeTruthy()
  })
})
```

```ts
describe('UI', () => {
  it('blabla', async () => {
    const wrapper = await mountSuspended(MonSuperComposant, {
      shallow: true
    })

    expect(wrapper.find({ name: 'UnAutreComposant' }).exists()).toBeTruthy()
  })
})
```

````

::

---

# Preview de Nuxt 4

::window{filename="nuxt.config.ts"}

````md magic-move

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxthub/core',
    "@nuxt/content",
  ]
})
```

```ts
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxthub/core',
    "@nuxt/content",
  ],
})
```

````

::

---

# Roadmap

- Nuxt 4 "Alpha"  
  2 juin 2025
- Nuxt 4 stable  
  Fin juin 2025
- Nuxt 3  
  Support jusqu'à fin 2025

---
layout: intro
---

# Nuxt 5 ?

<img v-drag="[56,187,260,194]" src="/assets/scared.jpg" />

en attente de nitro V3

---

# Merci !