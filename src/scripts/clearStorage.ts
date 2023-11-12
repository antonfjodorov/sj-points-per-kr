const clearStorage = () => {
  const storageKey = 'sj';
  localStorage.setItem(storageKey, '');
  const cache = localStorage.getItem(storageKey);
  console.log('Cache cleared', cache);
}

clearStorage();
