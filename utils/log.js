const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Emilia-tan ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Emilia-tan ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ Emilia-tan ] » `) + data);
			break;
	}
}