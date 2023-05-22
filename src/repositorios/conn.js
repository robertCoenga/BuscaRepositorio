const mongoose = require("mongoose")

async function main() {
    try {
        await mongoose.connect("mongodb+srv://robert:9BsYUVGSUlI345I2@cluster0.ipddo6p.mongodb.net/?retryWrites=true&w=majority");
    } catch (error) {
        console.log(`Error: ${error}`);
       
    }

    
}

module.exports = main;