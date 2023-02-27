// элементы 

const button = document.getElementById('butGo');
const windowContent = document.getElementById('windowContent');



const onChangePeople = () => {
    let change = document.getElementById('inp').value;
    if (change.length < 1) {
        return
    } else {
        let div = document.createElement('div');
        let __divContent = document.createElement('div');
        div.className = ' window__div right';
        __divContent.className = 'window__div__item borderRight';
        __divContent.innerHTML = change;
        div.append(__divContent);
        windowContent.append(div);
        document.getElementById('inp').value = '';
    }
}

const proverka = (e) => {
    if (e.code == 'Enter') {
        onChangePeople();
    } else return
}

button.addEventListener('click' , onChangePeople);
document.addEventListener('keydown' , proverka);


const chatbot = () => {
        let div = document.createElement('div');
        let __divContent = document.createElement('div');
        div.className = ' window__div left';
        __divContent.className= 'window__div__item borderLeft';
        __divContent.innerHTML = 'Привет';
        div.append(__divContent);
        windowContent.append(div);
}

// setInterval(chatbot, 10000);