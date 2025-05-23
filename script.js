function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    const draggedId = ev.dataTransfer.getData("text"); // e.g., "Apple"
    const draggedElement = document.getElementById(draggedId);

    const dropTarget = ev.target.closest('.dropbox'); // Makes sure we get the dropbox even if we drop on the edge
    const acceptedId = dropTarget.getAttribute('data-accept'); // e.g., "Apple"

    if (draggedId === acceptedId) {
        dropTarget.appendChild(draggedElement);
    } else {
        alert("Wrong match! Try again.");
    }
}
