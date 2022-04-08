const { inspect } = require("util");

exports.run = (client, message, args) => {
	let owners = ["453522683745927178", "738208268840599623"];
    if (!owners.includes(message.author.id)) {
      message.channel.send(" :x: only bot owners can use this ");
    } else {
      let evaled;
      try {
        evaled = eval(args.join(" "));
        message.channel.send(inspect(evaled));
        console.log(inspect(evaled));
      } catch (error) {
        console.error(error);
        message.channel.send("there was an error during evaluation");
      }
	}
}

exports.name = "eval"
