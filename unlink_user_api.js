// вытаскиваем токен из cookie
var matches = document.cookie.match(new RegExp(
  "(?:^|; )" + ('token_global').replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
));
var token_glob=( matches ? decodeURIComponent(matches[1]) : undefined)
console.log(token_glob)

// получем ID нашего П *решил иначе
fetch("https://notify.vimbox.skyeng.ru/api/v1/chat/config", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "ru,en;q=0.9,ru-RU;q=0.8,en-US;q=0.7",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://teacher.skyeng.ru/teacherCabinet",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"native\":false,\"browser\":{\"name\":\"Chrome\",\"version\":\"84.0.4147.105\"},\"device\":{\"vendor\":null,\"model\":null,\"type\":null},\"os\":{\"name\":\"Windows\",\"version\":\"10\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(response => { if (response.ok === true) { return response.json(); } else { return null; } })
.then(json => { 
                   
                  teacher_id = (json.user.id)
                  console.log(teacher_id)
    // получем список ID учеников в шоукейсе 
    a = fetch("https://rooms.vimbox.skyeng.ru/users/api/v1/teachers/"+teacher_id+"/students", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en",
    "authorization": "Bearer "+ token_glob +"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://vimbox.skyeng.ru/start",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(response => { if (response.ok === true) { return response.json(); } else { return null; } })

                
.then(json => {for (let i = 0; i < 60; i++) { 
                   
                 userid = ((json)[i].id)
                 console.log(userid)
// запрос на удаление ученика
fetch("https://rooms.vimbox.skyeng.ru/users/api/v1/teachers/unlink-student/"+ userid +"", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru,en;q=0.9,ru-RU;q=0.8,en-US;q=0.7",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://vimbox.skyeng.ru/start?_ga=2.116159567.835778445.1594917051-1855943817.1594917051",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "OPTIONS",
  "mode": "cors",
  "credentials": "include"
});

fetch("https://rooms.vimbox.skyeng.ru/users/api/v1/teachers/unlink-student/"+ userid +"", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en",
    "authorization": "Bearer "+ token_glob +"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://vimbox.skyeng.ru/start?_ga=2.116159567.835778445.1594917051-1855943817.1594917051",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
}})
})

