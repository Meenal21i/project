import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FooterPage } from '../pages/FooterPage';
import { ExpectedSocialLinks } from '../constants/socialLinks';

let footerPage: FooterPage;
let actualHref: string;

When('User hovers on the {string} icon in the footer to get the href', async function (platform: string) {
  footerPage = new FooterPage(this.page);
  await footerPage.hoverOnFooterIcon(platform);
  actualHref = await footerPage.getFooterLinkHref(platform);
});

Then('It should match the expected URL for {string}', async function (platform: string) {
  const expected = ExpectedSocialLinks[platform.toUpperCase()];
  expect(actualHref).toBe(expected);
});