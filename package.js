Package.describe({
  name: 'dovrosenberg:astronomy-displayformat',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Display formatting module for jagi:meteor-astronomy',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dovrosenberg/meteor-astronomy-displayFormat',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jagi:astronomy@0.10.5');
  api.use('underscore');
  api.addFiles('lib/displayFormat.js');
  api.addFiles('lib/global.js');
  api.addFiles('lib/init_module.js');
  api.addFiles('lib/module.js');
  api.addFiles('lib/utils.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jagi:astronomy@0.10.5');
  api.use('underscore');
  api.addFiles('lib/displayFormat.js');
  api.addFiles('lib/global.js');
  api.addFiles('lib/init_module.js');
  api.addFiles('lib/module.js');
  api.addFiles('lib/utils.js');
  api.addFiles('tests/temp-tests.js');
});
