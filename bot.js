let chrome = {};
let options = {};
let puppeteer = null;

const getBrowserInstance = async () => {
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
        chrome = require("chrome-aws-lambda");
        puppeteer = require("puppeteer-core");
        options = {
            headless: true,
            ignoreHTTPSErrors: true,
            defaultViewport: chrome.defaultViewport,
            executablePath: await chrome.executablePath,
            args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
        };
    } else {
        puppeteer = require("puppeteer");
        options = {
            headless: true,
            ignoreHTTPSErrors: true,
        }
    }

    return puppeteer.launch(options);
}

module.exports = getBrowserInstance;