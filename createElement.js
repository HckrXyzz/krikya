// ===== Dynamic Elements with Drag-and-Drop =====
const dynamicElements = document.getElementById('dynamicElements');
let elementCount = 0;
let draggedItem = null;

document.getElementById('addElementBtn').addEventListener('click', addNewElement);
document.getElementById('clearAllBtn').addEventListener('click', () => {
    dynamicElements.innerHTML = '';
    elementCount = 0;
});

function addNewElement() {
    elementCount++;
    const newElement = document.createElement('div');
    newElement.className = 'dynamic-element';
    newElement.draggable = true;
    newElement.innerHTML = `<table>
    <thead><tr>
                    <th><h3>Element #${elementCount}</h3>
                    <p>Created at ${new Date().toLocaleTimeString()}</p>
                    <p>ID: ${_.uniqueId('element_')}</p>
                    <button class="remove-btn">Delete</button></th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead><tbody>
                <tr>
                    <td>
                        <form>
                            <input autocomplete="off" placeholder="Membercode" type="text">
                            <input autocomplete="off" placeholder="Mobile" type="number">
                            <input placeholder="NewPassword" type="password">
                        </form>
                    </td>
                    <td>
                        <div class="response-container">
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-success" onclick="updateFgtPsw()"><span class="start">RESET START</span></button>
                        <button type="button" class="btn btn-danger" onclick="stopFunction()" disabled><span class="stop">STOP</span></button>
                    </td>
                </tr>
            </tbody>
                `;

    setupDragEvents(newElement);
    dynamicElements.appendChild(newElement);
}

function setupDragEvents(element) {
    element.addEventListener('dragstart', () => {
        draggedItem = element;
        setTimeout(() => element.classList.add('dragging'), 0);
    });

    element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
    });

    element.querySelector('.remove-btn').addEventListener('click', () => {
        element.remove();
    });
}

dynamicElements.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(dynamicElements, e.clientY);
    if (afterElement == null) {
        dynamicElements.appendChild(draggedItem);
    } else {
        dynamicElements.insertBefore(draggedItem, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.dynamic-element:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Add 3 sample elements on load
for (let i = 0; i < 1; i++) addNewElement();
