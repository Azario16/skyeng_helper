adr = document.location.href
adr1 = document.location.pathname
adr1 = adr1.split('/')
var room_hash = adr1[2];
//функция для join комнаты 
async function lesson_st(){
    return new Promise(resolve => {
        fetch("https://rooms.vimbox.skyeng.ru/rooms/api/v1/rooms/"+room_hash+"/join", {
            "method": "PATCH",
            "credentials": "include"
        }).then(response => { if (response.ok === true) { return response.json(); } else { return null; } })
        .then(json => { a =(json)
        resolve(a)                        
        })
    })
}
    var lesson = await lesson_st()
    //console.log(lesson)
    if(lesson.workbooks[0].workbookSteps.length !==0){

        let b = lesson.workbooks[0].workbookSteps.length
        //console.log(b)
        stepUUID_w = []
            //добавляем в массив stepUUID1 степы stepUUID которые заданые 
            for (let i = 0; i < b; i++) {
                if (lesson.workbooks[0].workbookSteps[i].homeworkAssigned == true){
                    stepUUID_w.push(''+lesson.workbooks[0].workbookSteps[i].stepUUID+'')
                }
            }
            //console.log(stepUUID_w)
            //теперь stepUUID из плана 
            stepUUID_l = []
            if(lesson.lessonPlan.Lesson !== undefined){
                let b = lesson.lessonPlan.Lesson.length
                //console.log(b)     
                for (let i = 0; i < b; i++) {
                    stepUUID_l.push(''+lesson.lessonPlan.Lesson[i].stepUUID+'')
                }
                //console.log(stepUUID_l)
            }
            if(lesson.lessonPlan.Homework !== undefined){
                let b = lesson.lessonPlan.Homework.length
                //console.log(b)     
                for (let i = 0; i < b; i++) {
                    stepUUID_l.push(''+lesson.lessonPlan.Homework[i].stepUUID+'')
                }
                //console.log(stepUUID_l)
            }
            if(lesson.lessonPlan.Preparation !== undefined){
                let b = lesson.lessonPlan.Preparation.length
                //console.log(b)     
                for (let i = 0; i < b; i++) {
                    stepUUID_l.push(''+lesson.lessonPlan.Preparation[i].stepUUID+'')
                }
                //console.log(stepUUID_l)
            }
            if(lesson.lessonPlan.Test !== undefined){
                let b = lesson.lessonPlan.Test.length
                //console.log(b)     
                for (let i = 0; i < b; i++) {
                    stepUUID_l.push(''+lesson.lessonPlan.Test[i].stepUUID+'')
                }
                //console.log(stepUUID_l)
            }
            //console.log(stepUUID_l)
            var result_t = [];
            stepUUID_w.forEach( function (element) {
                if ( !~stepUUID_l.indexOf(element) ) result_t.push(element)
            });
            console.log(result_t)
            b = result_t.length
            //console.log(b)   
            //вывод в консоль если есть степы, которые заданы но их нет в плане
            for (let e = 0; e < b; e++) {
                console.log(e) 
                result_t[e]
                
                var t = lesson.workbooks[0].workbookSteps.length
                for (let i = 0; i < t; i++) {
                    if(result_t[e] == lesson.workbooks[0].workbookSteps[i].stepUUID ){
                        let notif = ('совпало'+' '+ lesson.workbooks[0].workbookSteps[i].workbookId)
                        console.log(notif)
                        let worbook_step_id = lesson.workbooks[0].workbookSteps[i].workbookId
                        let worbook_stepUUID = lesson.workbooks[0].workbookSteps[i].stepUUID
                        console.log("https://vimbox.skyeng.ru/workbook/"+room_hash+"/1/materials")
                        var check = confirm("Удалить эти слайды?"+" "+b );
                        if (check===true){
                            fetch("https://rooms.vimbox.skyeng.ru/rooms/api/v1/homeworks/workbook/"+worbook_step_id+"/step/"+worbook_stepUUID+"", {
                                "body": null,
                                "method": "DELETE",
                                "credentials": "include"
                            });
                        }
                    }
                }
            }
    }
