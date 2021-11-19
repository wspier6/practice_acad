const randomMessage = () => {
    let messages = ['Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night'];
    randIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randIndex]);
}

randomMessage();