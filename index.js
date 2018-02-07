const app = "I don't do much."
kittens = [];

function destructivelyAppendKitten(name) {
    kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}