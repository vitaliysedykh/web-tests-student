import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  // Открываем главную страницу Testboard
  await page.goto('/');

  // Открываем форму входа
  await page.locator('[data-marker="login-button-desktop"]').click();

  // Отправляем форму с пустыми email и паролем
  await page.locator('[data-marker="login-submit-button"]').click();

  // Проверяем сообщения об ошибках под полями
  await expect(page.locator('[data-marker="email-error"]')).toHaveText('Email обязателен');
  await expect(page.locator('[data-marker="password-error"]')).toHaveText('Пароль обязателен');
});
