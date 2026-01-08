function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function deleteUser(id) {
    let users = getUsers();
    users = users.filter(u => u.id !== id);
    localStorage.setItem('users', JSON.stringify(users));
}
