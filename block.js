const sha256 = require("crypto-js/sha256")
class Block{
    constructor(timestamp,data, previoushash = ""){
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
        this.chain = [this.generateGenesisBlocl()];

}
generateGenesisBlocl(){
    return new Block("2022-12-05", "GENESIS", "0000 ");
}
    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }
    addBlock(newBlock){
        newBlock.previoushash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    
}
    isBlockchainValid(){
        for (let i=1; i<this.chain.length; i++)
        {
            const  CurrantBlock = this.chain[i];
            const previoushBlock = this.chain[i-1];
            if ( CurrantBlock.hash !== CurrantBlock.calculateHash())
            {
                return false;
            }
            if (CurrantBlock.previoushash !== previoushBlock.hash)
            {
                return false;
            }
        }
        return true;
    }
    }

const josscoin = new Blockchain();
const block =new Block("2022-12-04", { amount: 5 }, "ABCD");
josscoin.addBlock(block);
console.log(josscoin.isBlockchainValid());
 josscoin.chain[1].data = "Haked";
 console.log(josscoin.isBlockchainValid());
 

 