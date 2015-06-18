Package.describe({
  name: 'tinque:ng-material-floating-button',
  version: '0.6.1',
  summary: 'This is the Meteor package for ng-material-floating-button',
  git:'https://github.com/tinque/meteor-ng-material-floating-button',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('urigo:angular@0.8.10');
  api.imply('urigo:angular@0.8.10');
  api.addFiles('mfb-directive.js','client');
  api.addFiles('mfb.min.css','client');
});
