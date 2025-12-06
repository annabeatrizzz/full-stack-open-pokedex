const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
     await page.goto('http://localhost:8080/pokemon/ivysaur')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})

describe('Pokedex', () => {
  test('front page can be opened part 2', async ({ page }) => {
     await page.goto('http://localhost:8080/pokemon/charmander')
    await expect(page.getByText('charmander')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})

describe('Pokedex', () => {
  test('front page can be opened part 2', async ({ page }) => {
    await page.goto('http://localhost:8080/')

    await page.getByRole('link', { name: 'pikachu' }).click();
    await expect(page).toHaveURL('http://localhost:8080/pokemon/pikachu');
    await expect(page.getByText('pikachu')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})