//Рабочая версия 
// Получаем Id П 
fetch("https://rooms.vimbox.skyeng.ru/users/api/v1/auth/config", 
{"credentials":"include","method": "POST"})
.then(response => { if (response.ok === true) { return response.json(); } else { return null; } })
.then(json => {teacher_id=(json.user.id)
      //Получаем ID учеников
      fetch("https://rooms.vimbox.skyeng.ru/users/api/v1/teachers/"+teacher_id+"/students", {"credentials":"include", })
      .then(response => { if (response.ok === true) { return response.json(); } else { return null; } })
      .then(json => {a=(json.length) 
                        for (var i = 0; i < a; i++){
                          userid = ((json)[i].id)
                          console.log(userid)
                          //Запрос на удаление
                          fetch("https://rooms.vimbox.skyeng.ru/users/api/v1/teachers/unlink-student/"+ userid +"", {"credentials":"include", "method": "POST",});
                        }  
        })
})
