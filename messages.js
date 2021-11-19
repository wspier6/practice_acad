const randomMessage = () => {
    let messages = ['Howdy Fuckface', 'Surprise Motherfucker', 'Good Fuckin Morning'];
    randIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randIndex]);
}

randomMessage();