import { expect } from '@playwright/test';
import { test } from '@playwright/test';
import { GoogleHomePage } from './GoogleHomePage';


 export class ResultSearchPage {
 constructor(page)
 {
    //initialize the constructor
    this.page = page;

    this.playWrightingLink = page.locator('text = Playwriting Online Course - Courses For All Skill Levels');

 }

 
async clickplayWrightingLink()
{

await expect(this.playWrightingLink).toBeVisible();
await this.searchTextbox.click();

}
}