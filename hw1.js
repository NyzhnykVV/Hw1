const fs = require('fs')

const filePath = 'cocojambo.txt'
let totalWords = 0
let uniqueWords = new Set()

const readStream = fs.createReadStream(filePath, { encoding: 'utf8' })

readStream.on('data', (chunk) => {
    const lines = chunk.split('\n')
    
    lines.forEach((line) => {
        const words = line.trim().split(/\s+/)
        words.forEach(word => {
            totalWords++
            uniqueWords.add(word.toLowerCase())
        })
    })
})

readStream.on('end', () => {
    console.log(`Total words: ${totalWords}`)
    console.log(`Unique words: ${uniqueWords.size}`)
})

readStream.on('error', (err) => {
    console.error('Error reading file:', err)
})
