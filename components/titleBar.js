export function titleBar(containerId, src, alt, title, date) {
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.className = 'titleBar';
    div.innerHTML = `
        <img src="${src}" alt="${alt}" width="15" height="15">
        <span class="title">${title}</span>
        <span class="date">${date}</span>
    `;
    container.appendChild(div);
}
