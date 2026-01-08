const app = document.getElementById('app');

// --- USERS ---
async function renderUsers() {
    const users = [...await fetchData('users'), ...getUsers()];
    app.innerHTML = '';
    app.appendChild(renderBreadcrumbs(['users']));

    const searchInput = createElement('input', { className: 'search-input', attrs: { placeholder: 'Поиск пользователей...' }});
    app.appendChild(searchInput);

    const container = createElement('div');
    app.appendChild(container);

    function renderList(list) {
        container.innerHTML = '';
        list.forEach(user => {
            const card = createElement('div', {
                className: 'user-card',
                children: [
                    createElement('h3', { text: user.name }),
                    createElement('p', { text: user.email }),
                    createElement('button', {
                        text: 'Удалить',
                        events: { click: () => { deleteUser(user.id); renderUsers(); } }
                    })
                ]
            });
            container.appendChild(card);
        });
    }

    renderList(users);

    searchInput.addEventListener('input', debounce(e => {
        const val = e.target.value.toLowerCase();
        const filtered = users.filter(u => u.name.toLowerCase().includes(val) || u.email.toLowerCase().includes(val));
        renderList(filtered);
    }, 300));
}

// --- TODOS ---
async function renderTodos() {
    const todos = await fetchData('todos');
    app.innerHTML = '';
    app.appendChild(renderBreadcrumbs(['users', 'todos']));

    todos.slice(0, 20).forEach(todo => {
        const card = createElement('div', {
            className: 'todo-card',
            children: [
                createElement('h4', { text: todo.title }),
                createElement('p', { text: Completed: ${todo.completed} })
            ]
        });
        app.appendChild(card);
    });
}

// --- POSTS ---
async function renderPosts() {
    const posts = await fetchData('posts');
    app.innerHTML = '';
    app.appendChild(renderBreadcrumbs(['users', 'posts']));

    posts.slice(0, 20).forEach(post => {
        const card = createElement('div', {
            className: 'post-card',
            children: [
                createElement('h4', { text: post.title }),
                createElement('p', { text: post.body })
            ]
        });
        app.appendChild(card);
    });
}

// --- COMMENTS ---
async function renderComments() {
    const comments = await fetchData('comments');
    app.innerHTML = '';
    app.appendChild(renderBreadcrumbs(['users', 'posts', 'comments']));

    comments.slice(0, 20).forEach(comment => {
        const card = createElement('div', {
            className: 'comment-card',
            children: [
                createElement('h4', { text: comment.name }),
                createElement('p', { text: comment.body })
            ]
        });
        app.appendChild(card);
    });
}
