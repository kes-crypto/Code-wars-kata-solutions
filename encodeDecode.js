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
