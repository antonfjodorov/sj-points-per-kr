# SJ points-per-kr (Chrome ext)

## Context: sj.se

Built for the site <https://www.sj.se/> when choosing a ticket, for example [Stockholm to Karlstad](https://www.sj.se/kop-resa/valj-resa/Stockholm%20Central/Karlstad%20C/2023-11-24) on 24 nov 2023.

### Issue: SJ points worth varies

The ticket prices can be shown in kr (SEK) and in SJ points. The SJ points are not 1:1, but rather on a sliding scale roughly between 8 and 20 points per kr. This extension helps to compare.

## How to use

### Setup extension

1. Install extension in Chrome browser
2. Open DevTools (press F12, or right-click -> Inspect)

### Goto a ticket page

1. Choose cities A & B, and date of travel. You will now see a list of prices.
2. Scroll the page so that all prices are loaded, or the ones you are interested in.
3. Click the extension icon. This will save the SEK prices. You will see a partial output in the Console.
4. Switch to points (top of page)
5. Scroll the page so that all prices are loaded, or the ones you are interested in
6. Click the extension icon again. You will now see an index value in the Console.

### Clear cache if needed

The data is saved in `localStorage`. You can clear it by right-clicking the extension icon -> "Clear cache".

## Dev

Chrome extension docs: [developer.chrome.com/docs/extensions/mv3](https://developer.chrome.com/docs/extensions/mv3/)
