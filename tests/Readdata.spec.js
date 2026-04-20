import {test,expect} from '@playwright/test';
import {parse} from 'csv-parse/sync';
import fs from 'fs';


 const csvdata = parse(fs.readFileSync("test-data/data.csv"),{
    columns:true,
    skip_empty_lines:true,
    skip_records_with_empty_values:true

 })

test('Read csv file', async ({ page }) => {
  console.log(csvdata[0]);   // This will now print the first row
});