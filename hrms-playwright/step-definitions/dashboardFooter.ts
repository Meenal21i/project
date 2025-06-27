import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FooterPage } from '../pages/FooterPage';
import { ExpectedSocialLinks } from '../constants/socialLinks';

let footerPage: FooterPage;
let actualHref: string;

When('I get the href for the {string} icon in the footer', async function (platform: string) {
  footerPage = new FooterPage(this.page);
  actualHref = await footerPage.getFooterLinkHref(platform);
});

Then('it should match the expected URL for {string}', async function (platform: string) {
  const expected = ExpectedSocialLinks[platform.toUpperCase()];
  expect(actualHref).toBe(expected);
});
