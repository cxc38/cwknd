export default function decorate(block) {
  const container = document.createElement('ul');
  container.classList.add('social-container');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < block.children.length; i++) {
    const socialName = block.children[i].children[0].textContent;
    const socialLink = block.children[i].children[1].textContent;
    block.children[i].children[0].textContent = '';
    block.children[i].children[1].textContent = '';
    const li = document.createElement('li');
    li.classList.add('social-link');
    li.innerHTML = `<a href="${socialLink}" class="fa fa-${socialName}"></a>`;
    container.append(li);
  }
  block.append(container);
}
