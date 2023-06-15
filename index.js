const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
  });
  const page = await browser.newPage();

  await page.goto('https://www.amazon.com/s?k=amazonbasics&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18X3EL2VAGQSY&sprefix=amazonbasics%2Caps%2C220&ref=nb_sb_noss_2',{timeout:3000000});

  const handels = await page.$$('.s-main-slot .s-result-list .s-search-results .sg-row');
  for(const handel of handels){
    const singleweet = await page.evaluate(el.querySelector("h2 > a > span").textContent, handel)
    console.log(singleweet)
  }
  //await page.pdf({path: "deaa.pdf"});

  // Set screen size
  
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
  //await page.screenshot({ path: "deaa6.png"})
  //await browser.close();
})();