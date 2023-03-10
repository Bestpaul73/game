/* eslint-disable no-undef */
const templateLevelScreen = {
    tag: 'div',
    cls: ['center', 'level-screen'],
    content: {
        tag: 'form',
        cls: 'level-form',
        content: [
            {
                tag: 'div',
                cls: 'level-radio',
                content: [
                    {
                        tag: 'label',
                        cls: 'level-title',
                        content: 'Выбери сложность',
                    },
                    {
                        tag: 'div',
                        cls: 'level-buttons',
                        content: [
                            {
                                tag: 'label',
                                attrs: {
                                    for: 'level-basic',
                                },
                                content: [
                                    {
                                        tag: 'input',
                                        cls: 'level-buttons',
                                        attrs: {
                                            id: 'level-basic',
                                            name: 'group-level',
                                            type: 'radio',
                                            value: 'basic',
                                        },
                                    },
                                    {
                                        tag: 'img',
                                        attrs: {
                                            src: './img/1.png',
                                            alt: '1',
                                        },
                                    },
                                ],
                            },
                            {
                                tag: 'label',
                                attrs: {
                                    for: 'level-middle',
                                },
                                content: [
                                    {
                                        tag: 'input',
                                        cls: 'level-buttons',
                                        attrs: {
                                            id: 'level-middle',
                                            name: 'group-level',
                                            type: 'radio',
                                            value: 'middle',
                                        },
                                    },
                                    {
                                        tag: 'img',
                                        attrs: {
                                            src: './img/2.png',
                                            alt: '2',
                                        },
                                    },
                                ],
                            },
                            {
                                tag: 'label',
                                attrs: {
                                    for: 'level-advanced',
                                },
                                content: [
                                    {
                                        tag: 'input',
                                        cls: 'level-buttons',
                                        attrs: {
                                            id: 'level-advanced',
                                            name: 'group-level',
                                            type: 'radio',
                                            value: 'advanced',
                                        },
                                    },
                                    {
                                        tag: 'img',
                                        attrs: {
                                            src: './img/3.png',
                                            alt: '3',
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'button',
                cls: 'level-form-btn',
                content: 'Старт',
            },
        ],
    },
};

/* <div class="center level-screen">
        <form class="level-form">
            <div class="level-radio">
                <label class="level-title">Выбери сложность</label>
                <div class="level-buttons">
                    <label for="level-basic">
                        <input id="level-basic" name="group-level" class="level-buttons" type="radio" value="basic"> 
                        <img src="./img/1.png" alt="1">
                    </label>
                    <label for="level-middle">
                        <input id="level-middle" name="group-level" class="level-buttons" type="radio" value="middle"> 
                        <img src="./img/2.png" alt="2">
                    </label>
                    <label for="level-advanced">
                        <input id="level-advanced" name="group-level" class="level-buttons" type="radio" value="advanced"> <img src="./img/3.png" alt="3">
                    </label>
                </div>
            </div>
            <button class="level-form-btn">Старт</button>
        </form>
</div> */

APP.innerHTML = '';
APP.appendChild(templateEngine(templateLevelScreen));

const form = document.querySelector('.level-form');
const radioButtons = form.querySelectorAll('label');
const radioBtn = form.querySelector('.level-radio');

function handleRadioChange(e) {
    LEVEL = e.target.value;
    radioButtons.forEach((item) => {
        item.classList.remove('level-checked-button');
    });
    e.target.parentElement.classList.add('level-checked-button');
}

radioBtn.addEventListener('change', handleRadioChange);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (LEVEL) {
        console.log(LEVEL, 'переходим к игре');
        renderGameScreen();
    }
});
