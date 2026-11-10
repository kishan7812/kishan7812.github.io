const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function optimizeForSpeed() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const originalPath = path.resolve('public/og-image.jpg').replace(/\\/g, '/');
  
  await page.setContent('<html><body style="margin:0;padding:0;background:#fff;"><canvas id="cv" width="1200" height="630"></canvas></body></html>');
  
  await page.evaluate(async (imgSrc) => {
    const canvas = document.getElementById('cv');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imgSrc;
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
    });
    ctx.drawImage(img, 0, 0, 1200, 630);
  }, 'file:///' + originalPath);

  // JPEG 78% gives optimal sweet spot for WhatsApp/LinkedIn/Twitter crawler speed
  const jpgData = await page.evaluate(() => {
    const canvas = document.getElementById('cv');
    return canvas.toDataURL('image/jpeg', 0.78);
  });
  const jpgBuf = Buffer.from(jpgData.split(',')[1], 'base64');
  fs.writeFileSync('public/og-image.jpg', jpgBuf);
  console.log('Optimized og-image.jpg size:', (jpgBuf.length / 1024).toFixed(1), 'KB');

  await browser.close();
}

optimizeForSpeed().catch(console.error);
