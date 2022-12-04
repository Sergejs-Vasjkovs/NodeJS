document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id
        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }

    // if (event.target.dataset.type === 'edit') {
    //     const id = event.target.dataset.id
    //     const newNote = prompt("Введите новое задание");
    //     if (newNote === "") {
    //         prompt("Задание не может быть пустым");
    //     } else if (newNote === null) {

    //     } else {
    //         const note = {
    //             title: newNote,
    //             id
    //         }
    //         update(JSON.stringify(note)).then(() => {
    //             event.target.closest('li').firstElementChild.innerHTML = newNote;
    //         })
    //     }
    // }

    if (event.target.dataset.type === 'edit') {
        const id = event.target.dataset.id
        const title = event.target.dataset.title
        const newTitle = prompt('Введите новое название', title)
        if (newTitle !== null) {
            update({ id, title: newTitle }).then(() => {
                event.target.closest('li').querySelector('span').innerText = newTitle
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