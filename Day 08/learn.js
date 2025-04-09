// Intl API (Internationalization)
// Formatting numbers, dates, and currencies.

console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(1234.56));