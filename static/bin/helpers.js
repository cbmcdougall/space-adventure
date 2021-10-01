function renderStartScreen(){
    // ASCII art start screen
    // const line1 = `              _                              _        \n             | |                            | |       \n__      _____| | ___ ___  _ __ ___   ___    | |_ ___  \n\\ \\ /\\ / / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\   | __/ _ \\ \n \\ V  V /  __/ | (_| (_) | | | | | |  __/   | || (_) |\n  \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___|    \\__\\___/ \n`
    // const line2 = `                                          _                 _                   \n                                         | |               | |                  \n ___ _ __   __ _  ___ ___        __ _  __| |_   _____ _ __ | |_ _   _ _ __ ___  \n/ __| '_ \\ / _\` |/ __/ _ \\______/ _\` |/ _\` \\ \\ / / _ \\ '_ \\| __| | | | '__/ _ \\ \n\\__ \\ |_) | (_| | (_|  __/_____| (_| | (_| |\\ V /  __/ | | | |_| |_| | | |  __/ \n|___/ .__/ \\__,_|\\___\\___|      \\__,_|\\__,_| \\_/ \\___|_| |_|\\__|\\__,_|_|  \\___| \n    | |                                                                         \n    |_|                                                                         \n`
    // console.log(line1);
    // console.log(line2);
    
    // Regular text
    console.log(`\n⌑ ✧ ⌑ ⌑ ✦ ⌑ ✧ ✦ ✧ ⌑ ⌑ ✧\n⌑ ✧ ✦  Welcome to  ✦ ✧ ⌑\n✧ ⌑ space-adventure! ⌑ ✧\n⌑ ✧ ✦ ✧ ⌑ ⌑ ✦ ⌑ ✧ ⌑ ⌑ ✦`);
    let pause = 1;
    console.log(`\n\nCaptain's log. Star date 3412.`);
    console.log(`> I'm getting way too old for this adventuring business.\n> In my old age my knees have become weak, my arms heavy.\n> I'm beginning to hear voices in my head rapping about mom's spaghetti.`);
    setTimeout(() => {
        console.log(`\n> Throughout my travels I have seen beautiful nebulae, slingshotted past black holes, and come face-to-face with the meanest space-pirates in the cosmos.`);
    }, 1500*pause++);
    setTimeout(() => {
        console.log(`\n> If only I could solve that mystery which has eluded me for all these years.\n> I was so close, the long-lost secret of Xuthron was within my grasp!\n> Gah! If it weren't for that blasted traitor I would have had it!`);
    }, 1500*pause++);
    setTimeout(() => {
        console.log(`\n> It's getting too much, I need to retire...`);
    }, 1500*pause++);
    setTimeout(() => {
        console.log(`\n> ...but who shall take my place?`);
    }, 1500*pause++);
}



module.exports = { renderStartScreen }





                                                           

