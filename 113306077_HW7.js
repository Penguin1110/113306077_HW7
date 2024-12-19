
document.addEventListener('DOMContentLoaded', function () {
    const musicForm = document.getElementById('music-form');
    musicForm.style.display = 'none'; // 確保初始隱藏
});


document.getElementById('add-music').addEventListener('click', function () {
    const musicForm = document.getElementById('music-form');
    musicForm.classList.remove('hidden'); // 顯示彈出式表單
    musicForm.style.display = 'flex';
});

document.getElementById('cancel-music').addEventListener('click', function () {
    const musicForm = document.getElementById('music-form');
    musicForm.classList.add('hidden'); // 隱藏表單
    musicForm.style.display = 'none';
});

document.getElementById('submit-music').addEventListener('click', function () {
    const url = document.getElementById('music-url').value;
    const name = document.getElementById('music-name').value;

    if (url && name) {
        const musicList = document.getElementById('music-list');
        const newMusic = document.createElement('div');
        newMusic.classList.add('music-item');
        newMusic.innerHTML = `
            <a href="${url}" target="_blank"><img src="youtube.png" alt="${name}"></a>
            <span>${name}</span>
        `;
        musicList.appendChild(newMusic);

        // 清空表單並隱藏
        document.getElementById('music-url').value = '';
        document.getElementById('music-name').value = '';
        const musicForm = document.getElementById('music-form');
        musicForm.classList.add('hidden');
        musicForm.style.display = 'none';
    } else {
        alert('請填寫完整資訊！');
    }
});

// ========== 名稱編輯功能 ==========

const editButton = document.getElementById('edit-name'); 
let nameDisplay = document.getElementById('name-display');


editButton.addEventListener('click', () => {
    if (editButton.textContent === 'edit') {
     
        const inputField = document.createElement('input'); 
        inputField.type = 'text'; 
        inputField.id = 'name-input'; 
        inputField.value = nameDisplay.textContent; 

        inputField.className = 'editable-input'; 
        nameDisplay.replaceWith(inputField);
        nameDisplay = inputField; 
        editButton.textContent = 'save'; 
    } else {
        // 保存模式
        const inputField = document.getElementById('name-input');
        const newName = inputField.value.trim();

        if (newName) {
            const newNameDisplay = document.createElement('h1'); 
            newNameDisplay.id = 'name-display';
            newNameDisplay.textContent = newName;
            newNameDisplay.className = 'editable-name'; 

            inputField.replaceWith(newNameDisplay);
            nameDisplay = newNameDisplay; 
            editButton.textContent = 'edit'; 
        } else {
            alert('名稱不能為空，請輸入名稱！'); 
        }
    }
});
