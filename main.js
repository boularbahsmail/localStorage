const one = document.getElementById('one');
const two = document.getElementById('two');
const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.onclick = function() {
    const key = one.value;
    const value = two.value;
    // check : if key & value are empty or not
    if(key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
};

for(let i=0;i < localStorage.length;i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    // show the item
    result.innerHTML += `${key}: ${value}<br />`;
}