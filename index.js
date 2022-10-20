const bot = require('./bot');
const app = require("express")();

app.get("/api", async (req, res) => {
  try {
    let chromium = bot.getBrowserInstance();

    let page = await browser.newPage();
    await page.goto("https://www.google.com");
    res.send(await page.title());
  } catch (err) {
    console.error(err);
    return null;
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
