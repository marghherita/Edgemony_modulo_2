let animal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda ");

switch (animal) {
    case `1`:
        console.log(`Chose the Dog`);
        break;

    case `2`:
        console.log(`Chose the Cat`);
        break;

    case `3`:
        console.log(`Chose the Goldfish`);
        break;

    case `4`:
        console.log(`Chose the Monkey`);
        break;

    case `5`:
        console.log(`Chose the Panda`);
        break;

    default:
        console.log(`Animal Not Found`)
}