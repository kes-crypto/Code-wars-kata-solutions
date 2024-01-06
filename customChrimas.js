function customChristmasTree(chars,n){
  var tree="";
  // leave part
  var leave="";
  var cc=0; //current chars
  for(var i=0;i<n;i++){
     leave+=" ".repeat(n-i-1)+chars[cc];
     cc=(cc+1)%chars.length;
     for(var j=0;j<i;j++){
       leave+=" "+chars[cc];
       cc=(cc+1)%chars.length;
     }
     leave+="\n"
  }
  tree+=leave;
  // trunk part
  var trunk=" ".repeat(n-1)+"|";
  if(n/3>1){
    tree+=(trunk+"\n").repeat(Math.floor(n/3)-1);
  }
  tree+=trunk;
  return tree;
}
