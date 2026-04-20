import { expect } from '@playwright/test';
import { test } from '@playwright/test';
import { GoogleHomePage } from './GoogleHomePage';
import { ResultSearchPage } from './ResultSearchPage';


export class UdemyPage{
    constructor(page) {
     this.page = page;

     this.searchInputComboBox = page.locator('u220-search-form-autocomplete--4');
}

async searchInputComboBoxInput()
{
    await expect (this.searchInputComboBox).toBeEnabled();
    await this.searchInputComboBox.click();
    await this.searchInputComboBox.fill('playwright');
    await this.searchInputComboBox.press('Enter');
}
}



  