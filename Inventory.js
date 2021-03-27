let inventory = {
  weapon : "spear",
  item : 1
};
alert (inventory.weapon);
inventory.weapon1 = prompt("");
alert (inventory.weapon1);

let list = [2,4,5,7];
alert(list[1]);
list[list.lenght] = parseInt(prompt(""), 10);
//parseInt devait convertir le prompt
//mais ca marche pas
alert(list[list.lenght-1]);
