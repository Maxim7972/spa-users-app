function router() {
    const hash = window.location.hash.slice(1);
    const parts = hash.split('#');

    if (parts[0] === 'users') {
        if (parts[1] === 'todos') renderTodos();
        else if (parts[1] === 'posts') {
            if (parts[2] === 'comments') renderComments();
            else renderPosts();
        } else renderUsers();
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
