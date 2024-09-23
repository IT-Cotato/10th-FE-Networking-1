export function titleBar(containerId, src, alt, title) {
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.className = 'titleBar';

    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth()+1)).slice(-2);
    var day = ('0'+today.getDate()).slice(-2);
    var daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    var dayOfWeek = daysOfWeek[today.getDay()];
    var dateString = year +'. '+month+'. '+day+'. '+dayOfWeek;
    

    div.innerHTML = `
        <img src="${src}" alt="${alt}" width="15" height="15">
        <span class="title">${title}</span>
        <span class="date">${dateString}</span>
    `;
    container.appendChild(div);
}
