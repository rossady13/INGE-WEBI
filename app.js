const form = document.getElementById('form');
const name = document.getElementById('name');
const price = document.getElementById('price');
const inventory = document.getElementById('inventory');

form.addEventListener('submit', e=>{
    e.preventDefault();
    validateInputs();
});
const setError = (element,message) =>{
    const inputControl = element.parentElement;
    const errorDispaly = inputControl.querySelector('.error');

    errorDispaly.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDispaly = inputControl.querySelector('.error');

    errorDispaly.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}
const validateInputs = () => {
    const name = name.value.trim();
    const price = price.value.trim();
    const inventory = inventory.value.trim();

    if(name.value ===''){
        setError(name, 'requerid name')
    } else{
        setSuccess(name);
    }

    if(price.value ===''){
        setError(price, 'requerid price')
    } else{
        setSuccess(price);
    }
    if(inventory.value ===''){
        setError(inventory, 'requerid inventory')
    } else{
        setSuccess(inventory);
    }
};
