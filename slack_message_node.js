var rp = require('request-promise'); 
  const options = {
    method: 'POST',
    url: 'https://skyeng.slack.com/api/chat.postMessage?_x_id=noversion-1604302508.576&_x_csid=PUJCfQAJiB0&slack_route=T03A3SUFB&_x_version_ts=1604107175&_x_gantry=true',
    headers: {
        "accept": "*/*",
        "accept-language": "ru,en;q=0.9,ru-RU;q=0.8,en-US;q=0.7",
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7RAAO7wGurs4RhNs",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
    },
    body: `------WebKitFormBoundary7RAAO7wGurs4RhNs\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nG01BJ6LTSHG\r\n------WebKitFormBoundary7RAAO7wGurs4RhNs\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[\n\t{\n\t\t\"type\": \"rich_text\",\n\t\t\"elements\": [\n\t\t\t{\n\t\t\t\t\"type\": \"rich_text_section\",\n\t\t\t\t\"elements\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"user\",\n\t\t\t\t\t\t\"user_id\": \"UM31C4FT5\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"text\",\n\t\t\t\t\t\t\"text\": \" Нас атакуют!! \\n Рапределние на сотрудников: \\n 1. Сотрудник \\n 2. Сотрудник \\n 3. Сотрудник \\n 4. Сотрудник \\n 5. Сотрудник \\n 6. Сотрудник \\n 7. Сотрудник \\n\\n Чатов в нераспределенке: 10\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n]\r\n------WebKitFormBoundary7RAAO7wGurs4RhNs\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\....token...\r\n------WebKitFormBoundary7RAAO7wGurs4RhNs\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nsend_block_kit_to_slack\r\n------WebKitFormBoundary7RAAO7wGurs4RhNs\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundary7RAAO7wGurs4RhNs--\r\n`,    
    resolveWithFullResponse: true ,
    json: true
  }
  rp(options)
  .then(function (response) {
    console.log(response)
    console.log(response.statusCode) 
    
  })
  .catch(function (err) {
    console.log(err.statusCode)
  });
