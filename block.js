const sha256 = require("crypto-js/sha256")
class Block{
    constructor(timestamp,data, previoushash){
        this.timestamp = timestamp;

        this.data = data;
        this.previoushash = previoushash;
        this.hash = this.calculateHash();
    }
    calculateHash(){
        return sha256( this.timestamp + JSON.stringify(this.data) + this
        .previoushash).toString();
    }
}

class Blockchain {
    constructor (){
        this.chain = [];
}
    addBlock(newBlock){
    this.chain.push(newBlock);
}

}
const josscoin = new Blockchain();
const block =new Block("2019-01-01", { amount: 5 }, "ABCD");
josscoin.addBlock(block);
console.log(josscoin); 
