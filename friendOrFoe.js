function friend(friends){
  return friends.filter(el => el.length === 4);
}
//sol1
function friend(friends){
  //your code here
  var realFriends = [];
  for(i=0; i<friends.length; i++){
    if(friends[i].length == 4 && isNaN(friends[i])){
      realFriends.push(friends[i]);
    }
  }
  
  return realFriends
}
//sol2
friend = f => f.filter(e => e.length == 4);
//sol3
function friend(friends){
  let goodFriends = [];
  for(let i = 0; i < friends.length; i++){
    if (friends[i].length === 4){
      goodFriends.push(friends[i]);
    };
  };
  return goodFriends;
}
//sol4
function friend(friends){
    let outArr = [];

  friends.forEach((item) => {
    if (item.length == 4) {
      outArr.push(item);
    }
  });

  return outArr;
}
