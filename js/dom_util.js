export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';


const nameInput = document.getElementById("tittle_input");
const roomInput = document.getElementById("room_input");
const visitInput=document.getElementById("visitors_input")

const itemsContainer = document.getElementById("items_container");

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id,  name,  room, visitors }) => `
<li id="${getItemId(id)}" class="item-card">
    <img 
        src="https://crmtools.com.ua/wp-content/uploads/2019/05/main_banner.jpg"
        class="item-container__image" alt="card">
    <div>
        <h5>${name}</h5>
        <p> Number of room - ${room} </p>
        <p>Number of visitors - ${visitors} </p>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">Edit</button>
        <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="default_button">Delete</button>
    </div>
</li>`;

export const addItemToPage = ({id,  name, room,visitors}, onEditItem, onDeleteItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, name,room,visitors})
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

    editButton.addEventListener("click", onEditItem);
    deleteButton.addEventListener("click", onDeleteItem);
};

export const renderItemsList = (items, onEditItem, onDeleteItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onDeleteItem);
    }
};

export const clearInputs = () => {
    nameInput.value = "";
    roomInput.value = "";
    visitInput.value = "";
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        room: roomInput.value,
        visitors: visitInput.value,
    };
};