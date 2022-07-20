function namify(users) {
  let namesarr = new Array();
  users.forEach(element => {
    namesarr.push(element.name);
  });
  return namesarr;
}
