exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'e2e/*.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3001/',
  //baseUrl: 'http://google.com/',

  framework: 'jasmine',
    directConnect: true,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};