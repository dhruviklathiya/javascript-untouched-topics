// Intl.RelativeTimeFormat – Human-Readable Time Deltas

// This hidden gem of the Intl API helps you format time differences like “2 minutes ago” or “in 5 days” in any language or locale.

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

console.log(rtf.format(-1, 'day'));     // "yesterday"
console.log(rtf.format(5, 'minute'));   // "in 5 minutes"
console.log(rtf.format(-3, 'month'));   // "3 months ago"

// Supported units:
// 'second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'

// Why it’s uncommon but powerful:
// Saves you from writing brittle, custom logic for time diffs.

// Supports localization out of the box ('fr', 'hi-IN', 'ja', etc.)