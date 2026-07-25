const { chromium } = require("playwright");
const path = require("path");

async function main() {
  const url = process.argv[2] || "http://localhost:3002/work/vision-detect";
  const outPath =
    process.argv[3] ||
    path.join(__dirname, "..", "exports", "vision-detect-case-study.pdf");

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle" });

  // Scroll through the whole page in steps so every whileInView / IntersectionObserver
  // reveal animation actually fires before we snapshot it to PDF.
  await page.evaluate(async () => {
    const step = 400;
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    let last = -1;
    while (true) {
      window.scrollBy(0, step);
      await delay(150);
      const current = window.scrollY;
      if (current === last) break;
      last = current;
    }
    window.scrollTo(0, 0);
    await delay(300);
  });

  // Let any in-flight opacity/transform transitions settle at their final state.
  await page.waitForTimeout(500);

  const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);

  await page.pdf({
    path: outPath,
    printBackground: true,
    width: "1280px",
    height: `${fullHeight}px`,
    preferCSSPageSize: false,
  });

  await browser.close();
  console.log("Saved:", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
