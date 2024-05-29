document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    const addDataBtn = document.getElementById('addDataBtn');
    const updateBtn = document.getElementById('updateBtn');
    const dataTableBody = document.getElementById('dataTableBody');

    let selectedRow = null;

    // Function to add a new row to the table
    const addData = () => {
        if (!nameInput.value || !ageInput.value || !emailInput.value || !addressInput.value) {
            alert('Please fill all fields');
            return;
        }

        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${nameInput.value}</td>
            <td>${ageInput.value}</td>
            <td>${emailInput.value}</td>
            <td>${addressInput.value}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        dataTableBody.appendChild(newRow);
        clearInputs();
    };

    // Function to edit a row
    const editData = (button) => {
        selectedRow = button.parentElement.parentElement;
        nameInput.value = selectedRow.cells[0].innerText;
        ageInput.value = selectedRow.cells[1].innerText;
        emailInput.value = selectedRow.cells[2].innerText;
        addressInput.value = selectedRow.cells[3].innerText;
        updateBtn.disabled = false;
        addDataBtn.disabled = true;
    };

    // Function to update a row
    const updateData = () => {
        if (selectedRow) {
            selectedRow.cells[0].innerText = nameInput.value;
            selectedRow.cells[1].innerText = ageInput.value;
            selectedRow.cells[2].innerText = emailInput.value;
            selectedRow.cells[3].innerText = addressInput.value;
            clearInputs();
            updateBtn.disabled = true;
            addDataBtn.disabled = false;
            selectedRow = null;
        }
    };

    // Function to delete a row
    const deleteData = (button) => {
        button.parentElement.parentElement.remove();
    };

    // Function to clear input fields
    const clearInputs = () => {
        nameInput.value = '';
        ageInput.value = '';
        emailInput.value = '';
        addressInput.value = '';
    };

    addDataBtn.addEventListener('click', addData);
    updateBtn.addEventListener('click', updateData);
    dataTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            editData(e.target);
        }
        if (e.target.classList.contains('delete-btn')) {
            deleteData(e.target);
        }
    });
});
