const shopForm = document.querySelector('.shopping');
const shopList = document.querySelector('.list');
// we need an array that to hold our state
let items = [];
function handleSubmit(e) {
    e.preventDefault();
    console.log('Clicked');
    const name = e.currentTarget.item.value;
    if (!name) return;
    const item = {
        name: name,
        id: Date.now(),
        complete: false
    };
    // push the item into our state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    // clear form on submit 
    e.target.reset();
    // e.currentTarget.reset(); //same as above
    // fire off custom event that will tell anyone else who cares that the items have updated
    shopList.dispatchEvent(new CustomEvent('itemsUpdated'));
}
function displayItems() {
    const html = items.map((item)=>`<li class="shopping-item">
    <input value='${item.id}' type="checkbox" ${item.complete && 'checked'}/>
    <span class="itemName">${item.name}</span>
    <button value='${item.id}' aria-label='Remove ${item.name}'>&times;</button>   
    </li>`
    ).join('');
    shopList.innerHTML = html;
}
function mirrorToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
// console.info('Saving items to localStorage', localStorage);
}
function restoreFromLocalStorage() {
    console.log('restoring from LocalStorage');
    const listItems = JSON.parse(localStorage.getItem('items'));
    // console.log(listItems); 
    if (listItems.length) {
        // listItems.forEach(item => items.push(item));
        items.push(...listItems);
        shopList.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}
function deleteItem(id) {
    console.log('DELETE', id);
    items = items.filter((item)=>item.id !== id
    );
    shopList.dispatchEvent(new CustomEvent('itemsUpdated'));
}
function markComplete(id) {
    console.log('Complete: ', id);
    const itemRef = items.find((item)=>item.id === id
    );
    console.log(itemRef);
    itemRef.complete = !itemRef.complete;
    shopList.dispatchEvent(new CustomEvent('itemsUpdated'));
}
shopForm.addEventListener('submit', handleSubmit);
shopList.addEventListener('itemsUpdated', displayItems);
shopList.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: we listen on the click on the list <ul> but then delegate the click over to the button if that is what was click
// shopList.addEventListener('click', e => e.target.matches('button') ? deleteItem(parseInt(e.target.value)): null);
shopList.addEventListener('click', (e)=>{
    const id = parseInt(e.target.value);
    if (e.target.matches('button')) deleteItem(id);
    if (e.target.matches('input[type="checkbox"]')) markComplete(id);
});
restoreFromLocalStorage(); // shopList.addEventListener('itemsUpdated', e => console.log(e));

//# sourceMappingURL=index.37f339a2.js.map
