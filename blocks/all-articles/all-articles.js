export default async function decorate(block) {
  const container = block.children[0].children[0];
  const articleRoot = container.textContent;
  container.textContent = '';
  const ol = document.createElement('ol');
  container.append(ol);
  const startsWithPattern = new RegExp(`^${articleRoot}/[0-9a-zA-Z]+`);
  const resp = await fetch('/query-index.json');
  if (resp.status === 200) {
    const json = await resp.json();
    if (json) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < json.data.length; i++) {
        const pJson = json.data[i];
        if (startsWithPattern.test(pJson.path)) {
          const li = document.createElement('li');
          const cPath = pJson.path.replace(`${articleRoot}/`, '');
          const link = `${document.location}${cPath}`;
          const a = document.createElement('a');
          a.setAttribute('href', link);
          a.textContent = link;
          li.append(a);
          ol.append(li);
        }
      }
    }
  }
}
