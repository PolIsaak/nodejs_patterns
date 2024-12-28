/**
 * Module using substack pattern to export a function
 * @param {string} message 
 */
module.exports = (message) => {
	console.log(`info: ${message}`)
}

module.exports.warning = (message) => {
	console.log(`warning: ${message}`)
}

module.exports.error = (message) => {
  console.log(`error: ${message}`)
}