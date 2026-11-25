# Lab 01 Playwright UI тест

Оюутан - Д. Дэлгэрмаа (B232270035)

Энэ төсөл SauceDemo дэлгүүрийн хэрэглэгчийн интерфэйсийг Playwright болон TypeScript-ээр шалгана. Тест бүр тусдаа browser context ашигладаг тул хоорондоо нэвтрэлтийн төлөв хуваалцахгүй. Амжилттай нэвтрэх, буруу нууц үгээр нэвтрэх, бүтээгдэхүүнийг сагсанд нэмэх гэсэн гурван урсгалыг шалгана. Амжилттай нэвтэрсэн тестүүд ажлаа дуусгаад logout хийдэг.

## Ажиллуулах

Node.js 18 ба түүнээс дээш хувилбар шаардлагатай.

```bash
npm ci
npx playwright install
npm test
npm run report
```

`npm test` нь Chromium, Firefox, WebKit дээр тестүүдийг ажиллуулж, HTML тайлан болон trace/video нотолгоо үүсгэнэ. Сүүлийн ажиллуулалтын тайланг `npm run report` нээнэ. Codegen-ийг туршихдаа `npx playwright codegen https://www.saucedemo.com` командыг ашиглана. Тестийн trace-ийг `npx playwright show-trace test-results/<test-folder>/trace.zip` командаар үзэж болно.

## Playwright ба Selenium-ийн талаарх ажиглалт

Энэ лабораторид Playwright ашиглахад `getByRole` болон `getByPlaceholder` зэрэг locator-оор хэрэглэгчийн хардаг элементүүдийг шууд сонгох боломжтой байлаа. Playwright үйлдлийн өмнө элемент бэлэн болохыг автоматаар хүлээдэг тул тусгай хүлээлтийг гараар нэмэх шаардлага бага байдаг. Playwright нь Chromium, Firefox, WebKit-ийн browser binary-г өөрийн командаар суулгадаг. Selenium олон хэл дэмждэг бөгөөд browser driver-тай холбогдож ажилладаг нь өөр орчин, хэл ашигладаг багт уян хатан. Playwright-ийн trace viewer нь алхам, DOM төлөв болон дэлгэцийн бичлэгийг нэг мөрөөр шинжлэхэд тусалдаг. Энэ ажиглалт нь Playwright лабораторийн туршлага болон Selenium-ийн өгөгдсөн зааврын харьцуулалт бөгөөд Selenium дээр тусдаа туршилт хийгээгүй.
