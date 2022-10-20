const app = require("express")();
const getBrowserInstance = require('./bot');

app.get("/api", async (req, res) => {
  let browser = null;
  try {
    browser = await getBrowserInstance();
    let page = await browser.newPage();
    await page.goto("https://www.google.com");
    res.send(await page.title());
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
    return null;
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started", 'http://localhost:3000');
});

module.exports = app;
