/*
fter yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Task:

Finish method:
getCard()
A Bingo card contains 24 unique and random numbers according to this scheme:
5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75

The card must be returned as an array of Bingo style numbers:
{ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

*/

function getCard() {

    let out = [];

    function rand(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    for (let i = 0; i <= 24; i++) {

    }

    return out;
}

console.log(getCard());