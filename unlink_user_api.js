window.onload = function pain() {
    console.log('1')

    var oldBtn = document.querySelector('div[skyuitooltip][skyuitooltipposition="below"]');
    var item = document.querySelector('vim-core-lesson-list-student-selector-item[title="New student"] > *');
    var newBtn = document.createElement('div');
    if (oldBtn) {
        newBtn.innerHTML = oldBtn.outerHTML;
        item.prepend(newBtn.firstElementChild);
        document.querySelector('div[skyuitooltip][skyuitooltipposition="below"]').onclick = () => {
            var check = confirm("Удалить всех учеников?");
            if (check === true) {
                //Рабочая версия
                // Получаем Id П
                fetch("https://rooms.vimbox.skyeng.ru/users/api/v2/auth/config",
                    { "credentials": "include", "method": "POST" })
                    .then(response => { if (response.ok === true) { return response.json(); } else { return null; } })
                    .then(json => {
                        teacher_id = (json.user.id)
                        //Получаем ID учеников
                        fetch("https://rooms.vimbox.skyeng.ru/users/api/v1/teachers/" + teacher_id + "/students", { "credentials": "include", })
                            .then(response => { if (response.ok === true) { return response.json(); } else { return null; } })
                            .then(json => {
                                a = (json.length)
                                var i = 0;
                                f = function () {
                                    userid = ((json)[i].id)
                                    console.log(userid)
                                    //Запрос на удаление

                                    fetch("https://rooms.vimbox.skyeng.ru/users/api/v1/teachers/unlink-student/" + userid + "", { "credentials": "include", "method": "POST", });
                                    i = i + 1; if (i < a) setTimeout(f, "450");
                                };
                                f();
                            });
                    });
            };
        };
    };

    console.log('2')
    setInterval(() => {
        if (adr1 = document.location.pathname === "/start") {
            console.log('Удаление')
            pain()
        } else {

            console.log('Не удаляем')
        }
    }, 2000);
};
