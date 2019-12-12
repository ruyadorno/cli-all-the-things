require('offensive-words-filter')(process.argv.slice(2)[0])
    ? console.log('[blocked]')
    : console.log(process.argv.slice(2)[0])
