const coinID = () => Date.now().toString(32) + Math.random().toString(32).substring(32);

export{
    coinID
}