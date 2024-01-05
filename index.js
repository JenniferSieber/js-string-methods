// JavaScript String Methods
const string = 'JavaScript String Methods'
console.log('String using:', string)

// charAt(index)
console.log('charAt(index): returns the character at the specific index')
console.log('character at index 20', string.charAt(20))

// charCodeAt(index)
console.log('charCodeAt(index): Returns the UNICODE of the character at specific index')
console.log('character unicode at index 20', string.charCodeAt(20))

// concat(string1, string2, ...)
console.log('concat(string1, string2, ...) two strings -returns a new string an can define the space required')
const concatString = 'are very useful and simplifies your code base.'
const concatResult = string.concat(' ', concatString)
console.log('concat two strings:', concatResult)

// indexOf(substring, start)
console.log('indexOf(substring, start): Returns the index of the first occurrence of a specified substring or -1 if NOT FOUND')
console.log('Find the Me in the String', string.indexOf('Me'))

// lastIndexOf(substring, start)
console.log('lastIndexOf(substring, start): Returns index of the last occurence of a specified substring or -1 if NOT found')
console.log('find last index of letter a', string.lastIndexOf('a'))

// .slice(start,end)
console.log('.slice(start,end): Extracts a portion of the string and returns a new String')
const sliceString = string.slice(18, 20)
const sliceMethods = string.slice(18)
console.log('slicing Me from the string: string.slice(18, 20)', sliceString, 'slice Methods: string.slice(18)', sliceMethods)

// .substring(start, end)
console.log(`substring(start, end): similar to slice, extracts a portion of a string and returns a new string`)
const substringString1 = string.substring(18, -1)
const substringString2 = string.substring(18, 25)
console.log(substringString1, substringString2)

// .substr(start, length) ----DEPRECATED
console.log('.substr(start, length): Extracts a specified number of characters from a string starting at a specified Index and returns a new string')
const substrString1 = string.substr(18,2)
const substrString2 = string.substr(18,6)
console.log(substrString1, substrString2)

// replace(searchValue, replaceValue)
console.log('replace(searchValue, replaceValue): searches a string for a specific value or regular expression and replaces it with a specified value')
const replaceString1 = string.replace(/[s]/gi, 'Z')
const replaceString2 = string.replace('s', 'Z')
console.log(`find case insensitive letter s and replace with Z with regex: string.replace(/[s]/gi, 'Z')`, replaceString1, `find s and replace with Z: string.replace('s', 'Z')`,replaceString2)

// .trim()
console.log('.trim(): removes white spaces from both ends of string')
const trimThisString = '                     trim   trim                 '
const trimmedString = trimThisString.trim()
console.log(trimThisString)
console.log('trimmed string: ', trimmedString)

// .split(separator, limit)
console.log('.split(separator, limit): creates array from string based on separator--the separator is not passed into the new array')
const splitArray1 = string.split(' ')
const splitArray2 = string.split('S')
console.log('separator: a space', splitArray1, 'separator: S', splitArray2)

// .startsWith(searchString, position)
console.log(`.startsWith(searchString, position): Checks if a string starts with a specified substring and returns a boolean`)
console.log(string.startsWith('Java'))
console.log(string.startsWith('JavaScriptZ'))

// .endsWith(searchString, position)
console.log(`.endsWith(searchString, position): Checks if a string ends with a specified substring and returns a boolean`)
console.log(string.endsWith('Me'))
console.log(string.endsWith('Methods'))
console.log(string.endsWith('s'))
console.log(string.endsWith('MethodsZ'))

// .includes(searchString, position)
console.log('.includes(searchString, position): checks if a string contains a specified substring')
console.log(string.includes('X'))
console.log(string.includes('S'))
console.log(string.includes('Me'))

// .match(regexp)
console.log('match(regex): Search a string for match against a regex and returns an array of matches')
const sMatches = string.match(/s/gi)
const JavaMatches = string.match(/Java/gi)
console.log(sMatches)
console.log(JavaMatches)

// .search(regex)
console.log('.search(regex): Searches string for specified value or regex and returns index of FIRST match')
console.log(string.search(/s/gi))
console.log(string.search('Me'))

// .toLowerCase() .toUpperCase()
console.log('.toLowerCase() .toUpperCase(): converts entire string to specified option')
console.log(string, string.toLowerCase())
console.log(string, string.toUpperCase())

// .repeat(count)
console.log('.repeat(): creates new string that repeats specified count')
console.log(string.repeat(3))