document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id
        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }

    if (event.target.dataset.type === 'edit') {
        const id = event.target.dataset.id
        const newNote = prompt("Введите новое задание");
        if (newNote === "") {
            prompt("Задание не может быть пустым");
        } else if (newNote === null) {

        } else {
            const note = {
                title: newNote,
                id
            }
            update(JSON.stringify(note)).then(() => {
                event.target.closest('li').firstElementChild.innerHTML = newNote;
            })
        }
    }
})

async function remove(id) {
    await fetch(`/${id}`, { method: 'DELETE' })
}

async function update(note) {
    await fetch(`/${note}`, { method: 'PUT' })
}