# Getting Started

`BFUI` is dedicated to providing a good development experience for programmers. 

## 1. Install

### Using packaging manager

We recommend using the package manager for development, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

Choose a package manager you like:

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add @barry-flynn/bfui
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install @barry-flynn/bfui
```

  </CodeGroupItem>
</CodeGroup>

### Import in Browser

Import BFUI through browser HTML tags directly, and use global variable `BFUI`.

According to different CDN providers, there are different introduction methods. Here we use [unpkg](https://unpkg.com/) and [jsDelivr](https://jsdelivr.com/) as example. You can also use other CDN providers.

Obtained through [unpkg.com/@barry-flynn/bfui](https://unpkg.com/browse/@barry-flynn/bfui@1.0.0/):

```html:no-line-numbers
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/@barry-flynn/bfui@1.0.0/BFUI.min.css" />

<!-- import JavaScript -->
<script src="https://unpkg.com/vue@2.7.14/dist/vue.js"></script>
<script src="https://unpkg.com/@barry-flynn/bfui@1.0.0/BFUI.min.js"></script>

...

<script>
  Vue.use(BFUI);
</script>
```

Obtained through [jsdelivr.com/@barry-flynn/bfui](https://cdn.jsdelivr.net/npm/@barry-flynn/bfui/):

```html:no-line-numbers
<!-- import CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@barry-flynn/bfui@1.0.0/BFUI.min.css" />

<!-- import JavaScript -->
<script src="https://unpkg.com/vue@2.7.14/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@barry-flynn/bfui@1.0.0/BFUI.min.js"></script>

...

<script>
  Vue.use(BFUI);
</script>
```


---

## 2. Use tool functions

Blablabla...

---

## 3. Using functional components

Blablabla...
