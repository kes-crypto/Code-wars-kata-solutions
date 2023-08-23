function greet(name){
  return "Hello, <name> how are you doing today?".replace("<name>", name);
}

//sol2
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
