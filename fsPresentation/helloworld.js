const fs = require('fs')

console.log('Hello World!!! (1)')

fs.writeFile('hello.txt', 'Hey Guys!!!!!', (err) => {
	if (err) throw err

	console.log('We Got It! (2)')
})

const notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'))

console.log(notes.message + '(3)')



