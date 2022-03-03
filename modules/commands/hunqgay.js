module.exports.config = {
	name: "hunqgay",
	version: "1.0..0",
	hasPermssion: 0,
	credits: "HieuHapHoi",
	description: "Đưa ra ảnh vê hunq",
	commandCategory: "fun",
	usages: "[tag] [text]",
	cooldowns: 3,
  dependencies: {
    "fs-extra":""
  }
};

module.exports.run = function({ api, args, event}) {
	const fs = require("fs-extra");
  
  if(args.length == 0) {
    return api.sendMessage("Danh sách hình ảnh về hunq \n👉Hưng ngầu (hunqngau) \n👉Hưng học bài (hunghocbai) \n👉Hưng nghiện (hunqnghien) \n👉Hưng học bài (hunqhocbai) \n👉Hưng see tình (hunqseetinh) \n👉Hưng ắc wỷ (hunqacwy)\n \nĐể sử dụng lệnh nhấn /hunqgay + tên ở trên", event.threadID, event.messageID);
  }

  if(args[0] == "hunqngau") {
    let msg = ({
      body: "Ảnh về Hưng lạnh lùng boii",
      attachment:[
        fs.createReadStream(__dirname + '/cache/picture/hunqngau1.png')
      ]
    });

    return api.sendMessage(msg, event.threadID, event.messageID);
  }

  if(args[0] == "hunqsad") {
    let msg = ({
      body: "Ảnh về Hưng see tình",
      attachment:[
        fs.createReadStream(__dirname + '/cache/picture/hunqsad.png')
      ]
    });

    return api.sendMessage(msg, event.threadID, event.messageID);
  }

  if(args[0] == "hunqgaidit") {
    let msg = ({
      body: "Ảnh về Hưng gãi đít",
      attachment:[
        fs.createReadStream(__dirname + '/cache/picture/hunqgaidit.png')
      ]
    });

    return api.sendMessage(msg, event.threadID, event.messageID);
  }

  if(args[0] == "hunqăcy") {
    let msg = ({
      body: "Ảnh về Hưng ắc wỷ",
      attachment:[
        fs.createReadStream(__dirname + '/cache/picture/hunqacwy.png')
      ]
    });

    return api.sendMessage(msg, event.threadID, event.messageID);
  }

  if(args[0] == "hunqnghien") {
    let msg = ({
      body: "Ảnh về Hưng nghiện",
      attachment:[
        fs.createReadStream(__dirname + '/cache/picture/hunqnghien.png')
      ]
    });

    return api.sendMessage(msg, event.threadID, event.messageID);
  }

  if(args[0] == "hunqhocbai") {
    let msg = ({
      body: "Ảnh về Hưng học bài",
      attachment:[
        fs.createReadStream(__dirname + '/cache/picture/hunqhb1.png'),
        fs.createReadStream(__dirname + '/cache/picture/hunqhb2.png')
      ]
    });

    return api.sendMessage(msg, event.threadID, event.messageID);
  }






}