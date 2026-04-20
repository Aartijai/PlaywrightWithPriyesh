import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  //Workers = how many parallel copies of the test run-same test file three times in parallel, each in its own isolated worker process.
  workers: 1,
  fullyParallel: false,   // whether tests inside a file run together if true
  //test('A', ...)
//test('B', ...)
//test('C', ...)
//Playwright will run in fullyParallel: true but  if aslse it will run A,Then B  and Then C
//A
//B
//C
//at the same time, using available workers.
//Workers = parallel test runners
//Projects = browsers
//fullyParallel = parallel tests inside a file
  retries: 0,
  timeout: 30000,
  use: {
    
    trace:'on',
     browserName:'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
    slowMo : 2000
    },
    
  },
  reporter: [
    ['list'],
    ['allure-playwright'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ]

});

 
  