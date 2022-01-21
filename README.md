Compiling an [MJML](https://github.com/mjmlio/mjml) custom component. This repo builds on [MJML's custom component boilerplate](https://github.com/mjmlio/mjml-component-boilerplate) by demonstrating how to *use* the component once you've compiled it.

---

<a href="https://github.com/premail"><img src="https://raw.githubusercontent.com/premail/mjml-bullet-list/main/docs/images/icon.svg" alt="Premail" width="50" height="50" align="left" /></a><strong>Brought to you by
<a href="https://github.com/premail">Premail</a>.</strong>

---

# Requirements

* [Node](https://nodejs.org/en/download/) 12.x+, NPM 6.14.12+
* [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) 4.0.2+
* Tested with [MJML](https://github.com/mjmlio/mjml/releases) 4.10.1

The boilerplate repo uses a specific workflow with Babel, and older versions of MJML, but your own build's workflow doesn't need to match.

To that end: The example in this repo (Stage 2) uses the [modern `pipeline()` version](https://github.com/gulpjs/gulp/discussions/2586) of Gulp workflows (unlike the boilerplate example), but does not use Babel.

# Stage 1: Compile the custom component

1. In a separate folder, clone https://github.com/mjmlio/mjml-component-boilerplate
2. Run `npm install` in that folder.
3. Create a new component, or use the existing examples.
4. Run `gulp build`.
5. Note the compiled component file in `./lib`.

# Stage 2: Use the compiled component

1. Clone this repo.
2. Run `npm install` in this folder.
3. Copy the compiled component from Stage 1 into `./components`.
4. Require and register the component in the gulp file:

```js
// Register custom MJML components
const { registerComponent } = require('mjml-core')
const MjBasicComponent = require('./components/MjBasicComponent.js').default
registerComponent(MjBasicComponent)
```

5. Require and register the validation (this seems to be necessary in addition
to defining it in the component file itself):

```js
const { registerDependencies } = require('mjml-validator')
registerDependencies({
  // Tell the validator which tags are allowed as our component's parent
  'mj-hero': ['mj-basic-component'],
  'mj-column': ['mj-basic-component'],
  // Tell the validator which tags are allowed as our component's children
  'mj-basic-component': []
})
```

6. Edit `./src/index.mjml` to include the custom component.
7. Run `gulp` to create the compiled HTML in `./dist`.
8. Using this as an example, create and use your own custom MJML components!

# License

GNU Affero General Public License v3.0 or later. For the legal details of the
AGPL, see the complete
[LICENSE](https://github.com/premail/mjml-custom-component/blob/main/LICENSE).
