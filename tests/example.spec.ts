import { test, expect } from '@playwright/test';

const storeUrl = 'https://www.saucedemo.com';

// Each test starts from a fresh browser context, so its login state is isolated.
test.describe('SauceDemo UI автомат тест', () => {
  test('TC01 - Амжилттай нэвтрэх', async ({ page }) => {
    await page.goto(storeUrl);
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    // Check both the destination and a visible page heading after login.
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();

    // Finish the successful login flow with logout.
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('button', { name: 'Logout' }).click();
    await expect(page).toHaveURL(storeUrl + '/');
  });

  test('TC02 - Буруу нууц үгээр нэвтрэх', async ({ page }) => {
    await page.goto(storeUrl);
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify that invalid credentials show an accessible error message.
    const errorMessage = page.getByTestId('error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username and password do not match');
  });

  test('TC03 - Бүтээгдэхүүнийг сагсанд нэмэх', async ({ page }) => {
    await page.goto(storeUrl);
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    // Confirm the cart badge updates after adding the first product.
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Log out to leave the browser at the same clean state as other tests.
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('button', { name: 'Logout' }).click();
    await expect(page).toHaveURL(storeUrl + '/');
  });
});
