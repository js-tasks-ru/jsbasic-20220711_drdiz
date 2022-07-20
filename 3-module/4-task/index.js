function showSalary(users, age) {
  let str = new String;
  users.forEach(element => {
    (element.age <= age) ? str += `${element.name}, ${element.balance}` + '\n': 0       
  });
  
  console.log(str.substr(0, parseInt(str.length)-1));
  return (str.substr(0, parseInt(str.length)-1));
}
