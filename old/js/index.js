document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundMusic');
    var button = document.getElementById('playPauseButton');
    var isPlaying = !audio.paused; // 初始化时检查音频是否在播放

    // 初始化按钮图标
    button.src = isPlaying ? './image/play-icon.png' : './image/pause-icon.png';

    button.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            button.src = './image/pause-icon.png'; // 暂停时显示暂停图标
        } else {
            audio.play();
            button.src = './image/play-icon.png'; // 播放时显示播放图标
        }
        isPlaying = !isPlaying;
    });

    // 监听音频播放状态变化
    audio.addEventListener('play', function () {
        button.src = './image/play-icon.png'; // 播放时显示播放图标
        isPlaying = true;
    });

    audio.addEventListener('pause', function () {
        button.src = './image/pause-icon.png'; // 暂停时显示暂停图标
        isPlaying = false;
    });

    // 监听页面可见性变化
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            // 页面不可见时停止音频
            audio.pause();
        } else {
            // 页面可见时恢复音频
            audio.play();
        }
    });
});

// 创建 pet 对象
const pet = {
    x: 500,   // 宠物初始位置的横坐标 （左下角开始）
    y: 500,
    vx: 1,   // 水平方向上宠物前进的速度
    vy: 0   // 垂直方向上宠物前进的速度
};

// 动作权重
const actions = {
    walkleft: 1,
    walkright: 1,
    fish: 1,
    sleep: 1,
    kiss: 1,
    stand: 1,
};

// 存储宠物行走动画帧的数组
const LeftwalkFrames = []; // 左走
const RightwalkFrames = []; // 右走
const DragFrames = [];  // 拖拽
const fishFrames = [];
const kissFrames = [];
const sleepFrames = [];
const standFrames = [];
const fallingFrames = [];

// 初始化 定时器
let ttt = null;
let dragTime = null;

let action = 'stand';

// 将对象中的动作按照权重转换为数组
const actionList = Object.keys(actions).map(key => ({
    name: key,
    weight: actions[key]
})).reduce((prev, curr) => prev.concat(curr), []);

// 根据权重随机选择动作
function randomAction() {
    const totalWeight = actionList.reduce((prev, curr) => prev + curr.weight, 0);
    let randomNum = Math.random() * totalWeight;

    for (let i = 0; i < actionList.length; i++) {
        if (randomNum <= actionList[i].weight) {
            return actionList[i].name;
        }
        randomNum -= actionList[i].weight;
    }
}

// 创建动画序列
for (let i = 1; i < 13; i++) {
    const img = new Image();
    img.src = `./max/walkright${i}.avif`;
    RightwalkFrames.push(img);

    const img2 = new Image();
    img2.src = `./max/walkleft${i}.avif`;
    LeftwalkFrames.push(img2);

    const img3 = new Image();
    img3.src = `./max/drag${i}.avif`;
    DragFrames.push(img3);

    const img4 = new Image();
    img4.src = `./max/fish${i}.avif`;
    fishFrames.push(img4);

    const img5 = new Image();
    img5.src = `./max/kiss${i}.avif`;
    kissFrames.push(img5);

    const img6 = new Image();
    img6.src = `./max/sleep${i}.avif`;
    sleepFrames.push(img6);

    const img7 = new Image();
    img7.src = `./max/stand${i}.avif`;
    standFrames.push(img7);
}

const img111 = new Image();
img111.src = `./max/falling1.avif`;
fallingFrames.push(img111);

// 绘制宠物
function drawPet(anyFrames = RightwalkFrames) {
    const frameIndex = Math.floor(Date.now() / 100) % anyFrames.length;
    const img = anyFrames[frameIndex];
    document.querySelector('.cywl img').src = img.src;
}

// 更新宠物位置
function updatePet() {
    pet.x += pet.vx;
    petDiv.style.left = pet.x + 'px';
    petDiv.style.bottom = pet.y + 'px';
}

// 定位
const petDiv = document.querySelector('#pet');
petDiv.style.left = pet.x + 'px';
petDiv.style.bottom = pet.y + 'px';

// 禁用图片点击
const petImg = document.querySelector('#pet-img');
petImg.style.pointerEvents = 'none';

let isDragging = false;
let diffX = 0;
let diffY = 0;

let animationId = null;

// 鼠标按下
petDiv.addEventListener('mousedown', function (event) {
    action = '';
    clearInterval(petTimer);

    if (event.target === petDiv) {
        isDragging = true;
        diffX = event.clientX - petDiv.offsetLeft;
        diffY = event.clientY - petDiv.offsetTop;

        dragTime = setInterval(function drag() {
            drawPet(DragFrames);
        }, 100);
    }
});

// 鼠标拖动
document.addEventListener('mousemove', function (event) {
    if (isDragging === true) {
        pet.x = event.clientX - diffX;
        pet.y = event.clientY - diffY;

        petDiv.style.left = pet.x + 'px';
        petDiv.style.top = pet.y + 'px';
    }
});

// 鼠标抬起
document.addEventListener('mouseup', function (event) {
    if (isDragging === true) {
        clearInterval(ttt);
        clearInterval(dragTime);

        isDragging = false;

        action = 'stand';

        ttt = setInterval(function name() {
            action = randomAction();
        }, 3000);

        if (pet.y < 0 || pet.y + petDiv.clientHeight > window.innerHeight || pet.x + petDiv.clientWidth > window.innerWidth || pet.x < 0) {
            pet.x = 500;
            pet.y = 500;
            petDiv.style.left = 500 + 'px';
            petDiv.style.top = 500 + 'px';
        }

        drawPet(fallingFrames);
    }
});

let petTimer = setInterval(function name() {
    action = randomAction();
}, 3000);

// 主循环
function loop() {
    switch (action) {
        case 'walkleft':
            pet.vx = -0.5;
            updatePet();
            drawPet(LeftwalkFrames);
            break;
        case 'walkright':
            pet.vx = 0.5;
            updatePet();
            drawPet(RightwalkFrames);
            break;
        case 'fish':
            drawPet(fishFrames);
            break;
        case 'kiss':
            drawPet(kissFrames);
            break;
        case 'sleep':
            drawPet(sleepFrames);
            break;
        case 'stand':
            drawPet(standFrames);
            break;
        default:
            drawPet(standFrames);
            break;
    }
    requestAnimationFrame(loop);
}

loop();

document.addEventListener('DOMContentLoaded', function () {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            // 关闭所有其他手风琴面板
            var activePanel = document.querySelector(".accordion.active");
            if (activePanel && activePanel !== this) {
                activePanel.classList.remove("active");
                var activePanelContent = activePanel.nextElementSibling;
                if (activePanelContent && activePanelContent.classList.contains('panel')) {
                    activePanelContent.style.maxHeight = null;
                }
            }

            // 切换当前手风琴面板
            var currentButton = this;
            var currentPanel = this.nextElementSibling;

            currentButton.classList.toggle("active");

            if (currentPanel && currentPanel.classList.contains('panel')) {
                if (currentPanel.style.maxHeight) {
                    currentPanel.style.maxHeight = null;
                } else {
                    currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
                }
            }
        });
    }
});