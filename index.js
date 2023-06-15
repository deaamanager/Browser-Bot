const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "your DATA FOLDER PATH NAME LIKE ./tmp"
  });
  const page = await browser.newPage();

  await page.goto(' let your Link There like https://frontend-react-brown.vercel.app/home ',{timeout:3000000});

  const handels = await page.$$('write Html Classes here like the Big-div ++ in this case change please classes Notworking  just example ++  ( .s-search-results .sg-row)');
  for(const handel of handels){
    const singleweet = await page.evaluate(el.querySelector(" write querySelector for Html Elemant // children // ++ in this case change please classes Notworking  just example ++ Like  h2 > a > span").textContent, handel)
    console.log(singleweet)
  }
  // Some testing and export pdf file and screenshot //
  // just try and enjoy //
  
  await page.pdf({path: "deaa.pdf"});


  
  // Type into search box
  {/*
  await page.setViewport({width: 1080, height: 1024});
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);
 

  */}
  await page.screenshot({ path: "deaa6.png"})
  //await browser.close();
})();
