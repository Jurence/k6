import { browser } from 'k6/experimental/browser';

export const options = {
    scenarios: {
        ui: {
            executor: 'shared-iterations',
            vus: 5,
            iterations: 5,
            options: {
                browser: {
                    type: 'chromium',
                },
            },
        },
    },
};

export default async function () {
    const page = browser.newPage();

    try {
        await page.goto('https://test.k6.io/');
        page.screenshot({ path: 'screenshots/screenshot.png' });
    } finally {
        page.close();
    }
}
