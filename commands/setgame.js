exports.execute = (client, message, args) => {
    if(message.author.id != client.config.OWNER_ID){
        message.channel.send("Only " + message.guild.members.get(client.config.OWNER_ID).toString()
                                    + " can use this command");
        return;
    }
    if(args.length < 2){
        message.channel.send("no game specified");
        return;
    }

    var gameName = "";
    for(var i = 1; i < args.length; i++){
        gameName += args[i] + " ";
    }
    client.user.setGame(gameName)
        .then(user => console.log("Game set: " + gameName))
        .catch(console.error);
};

exports.info = {
    name: "setgame",
    alias: ["setbotgame"],
    permission: "default"
};