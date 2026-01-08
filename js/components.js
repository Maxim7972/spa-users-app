function createElement(tag, options = {}) {
    const el = document.createElement(tag);
    if (options.className) el.className = options.className;
    if (options.text) el.textContent = options.text;
    if (options.html) el.innerHTML = options.html;
    if (options.attrs) {
        for (let key in options.attrs) el.setAttribute(key, options.attrs[key]);
    }
    if (options.events) {
        for (let key in options.events) el.addEventListener(key, options.events[key]);
    }
    if (options.children) {
        options.children.forEach(child => el.appendChild(child));
    }
    return el;
}

function renderBreadcrumbs(parts) {
    const container = createElement('div', { className: 'breadcrumbs' });
    let path = '';
    parts.forEach((part, i) => {
        path += `#${part}`;
        const link = createElement('a', { text: part, attrs: { href: path } });
        container.appendChild(link);
        if (i < parts.length - 1) container.appendChild(createElement('span', { text: ' / ' }));
    });
    return container;
}
