import './style.css';

const p = document.createElement('span');
p.textContent = 'Cập nhật: ' + new Date(__BUILD_TIME__).toLocaleDateString('vi-VN');
document.querySelector('#foot').append(p);
