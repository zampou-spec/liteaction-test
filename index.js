const app = require("express")();
const getBrowserInstance = require('./bot');

app.get("/api", async (req, res) => {
  try {
    let browser = getBrowserInstance();

    let page = await browser.newPage();
    await page.goto("https://www.google.com");
    res.send(await page.title());
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
    return null;
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
