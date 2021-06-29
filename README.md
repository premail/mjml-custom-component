Compiling an [MJML](https://github.com/mjmlio/mjml) custom component.

# Stage 1: Compile the custom component

1. In a separate folder, clone https://github.com/mjmlio/mjml-component-boilerplate
2. Run `npm install` in that folder.
3. Create a new component, or use the existing examples.
4. Run `npm run build`.
5. Copy the component file exported to `./lib`.

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

5. Edit `./src/index.mjml` to include the custom component.
6. Run `gulp` to create the compiled HTML in `./dist`.

# Notes

The boilerplate repo uses a specific workflow with Babel, and older versions of MJML, but your own build's workflow doesn't need to match.

To that end: The example in this repo (Stage 2) uses the modern `pipeline()` version of Gulp workflows (unlike the boilerplate example), but does not use Babel.
