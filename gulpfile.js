'use strict'

const { src, dest } = require('gulp')
const { pipeline } = require('stream')
const mjml = require('gulp-mjml')
const mjmlEngine = require('mjml')

// Register custom MJML components
const { registerComponent } = require('mjml-core')
const MjBasicComponent = require('./components/MjBasicComponent.js').default
registerComponent(MjBasicComponent)
const { registerDependencies } = require('mjml-validator')
registerDependencies({
  // Tell the validator which tags are allowed as our component's parent
  'mj-hero': ['mj-basic-component'],
  'mj-column': ['mj-basic-component'],
  // Tell the validator which tags are allowed as our component's children
  'mj-basic-component': []
})

// Gulp task
function build (cb) {

  return pipeline(
    src('./src/index.mjml'),

    // Compile MJML into HTML
    mjml(mjmlEngine),

    // Write HTML version
    dest('./dist'),

    // Error handling
    err => {
      if (err) {
        console.error('Error!', err.message)
        process.exitCode = 1
      } else {
        console.log('Success!')
      }
    }
  )
}

exports.default = build
