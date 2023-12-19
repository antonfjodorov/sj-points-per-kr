type TravelOption = {
  [id: string]: {
    /** Ticket price in kr (SEK) */
    price?: number
    /** Ticket price in SJ points */
    points?: number
    /** Points per kr */
    index?: number
  }
}

const round = (v: number, decimals: number) =>
  Math.round((v + Number.EPSILON) * (10**decimals)) / (10**decimals)

const storageKey = 'sj';

const save = (data: TravelOption): void =>
  localStorage.setItem(storageKey, JSON.stringify(data))

const read = (): TravelOption =>
  JSON.parse(localStorage.getItem(storageKey) || '{}')

const calcIndex = (data: TravelOption): TravelOption => {
  for (const [k, v] of Object.entries(data)) {
    if (!v.price || !v.points) continue;
    data[k].index = round(v.points / v.price, 2);
  }
  return data;
}
  
const parseTravelOptions = (): TravelOption => {
  const dataOnPage: TravelOption = {};

  document.querySelectorAll('div[data-testid=departure][role=listitem]').forEach(node => {
    const id = node.querySelector('h2')?.textContent;
    if (!id) return;
    let price = node.querySelector('p + p')?.textContent;
    if (!price) return;

    let category: 'price' | 'points' = 'price';

    price = price.replace(/\s*/g,'')
    if (price.includes('&nbsp;') || price.includes('p')) {
      category = 'points'
      price = price.replace(/(\&nbsp;|p)/g, '');
    }

    dataOnPage[id] = {
      [category]: parseInt(price)
    }
  })

  return dataOnPage;
}

const main = () => {
  const prevData = read();
  const dataOnPage = parseTravelOptions()
  let mergedData = { ...prevData };
  Object.entries(dataOnPage).forEach(d => {
    const [k, v] = d
    mergedData[k] = { ...mergedData[k], ...v }
  })
  mergedData = calcIndex(mergedData)
  save(mergedData);
  console.log(mergedData)
}

main();
