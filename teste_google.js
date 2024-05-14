const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({ headless: true });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/'
        }
    });

    const page = await context.newPage();

    await page.goto('https://www.google.com');

    const searchBox = await page.$('[name="q"]');

    await searchBox.fill('');

    await searchBox.press('Enter');

    await page.waitForSelector('#tools_1');

    const ferramenta = await page.$('#tools_1');

    await ferramenta.click();

    await page.screenshot({ path: 'search_results.png' });

    await page.waitForTimeout(5000);

    console.log(await page.title());

    await browser.close();

})();
