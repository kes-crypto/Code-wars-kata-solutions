const
    codeFunctionForMapping = replacementMapping => (
      inputString => inputString.replace(/./g, c => replacementMapping[c] || c)
    ),
    encode = codeFunctionForMapping({a:1, e:2, i:3, o:4, u:5}),
    decode = codeFunctionForMapping({1:'a', 2:'e', 3:'i', 4:'o', 5:'u'})
    
  console.log(encode( 'hello'))
console.log(encode('This is an encoding test.'))
encode('How are you today?')
encode('This is an encoding test.')

const vowels = ['a', 'e' ,'i', 'o', 'u'];
const v4w2ls = ['1', '2', '3', '4', '5']; 

const encode = str => [...str].map(e => vowels.includes(e) ? e = vowels.indexOf(e) + 1 : e).join('');
const decode = str => [...str].map(e => v4w2ls.includes(e) ? e = vowels[v4w2ls.indexOf(e)] : e).join('');
