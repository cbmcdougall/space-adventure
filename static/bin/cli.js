const helpers = require('./helpers');
const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class UserInterface {
    run(){
        console.clear();
        this.startScreen();
    }

    startScreen(){
        helpers.renderStartScreen();
        setTimeout(() => { this.redirect(this.beginGame.bind(this)) }, 8000);
    }

    beginGame(){
        this.endGame()
    }

    redirect(target){
        ui.question(`\n> Press enter to continue\n`, () => target())
    }

    endGame(){
        ui.close();
    }
};

module.exports = { UserInterface }
