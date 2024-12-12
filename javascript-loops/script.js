let thing = [19, 10.3];

for (let i = 0; i < thing.length; i++) {
    thing.splice(i, 1, thing[i] * 2);
}
alert(thing);
console.log(thing);
