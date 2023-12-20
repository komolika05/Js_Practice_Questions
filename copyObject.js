// Objective is to make a COPY of the object

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: () => {
      console.log("Hi");
    },
  },
};

function deepCopy(o) {
  const newObj = {};
  for (const [key, value] of Object.entries(o)) {
    if (typeof value === "object") {
      newObj[key] = deepCopy(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

const obj2 = deepCopy(obj);

console.log(obj2);

// Shallow Copy vs Deep Copy?
/*
    RAM => Random Access Memory
    Physical Memory is the storage. Hardisk. SSD. 
    Any Program access Memory (RAM)
    Memory has addresses
    Each variable when defined, is allocated some memory.
    For eg. obj => 0000 (address of obj)
    number takes up 8 bytes
    Each byte has 8 bits. 
    number takes up how many bits? 8 * 8 = 64 bits. 
*/
