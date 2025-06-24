module.exports = {
  default: {
    require: [
      'step-definitions/*.ts',
      'support/hooks.ts'
    ],
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    publishQuiet: true,
    parallel: 1,
    timeout: 60000
  }
};
