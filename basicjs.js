setTimeout(() => {
    console.log('Inside the set time out!')
    callingCallback(callbackfunc)
}, 2000);

const callbackfunc = () => { 
    console.log('Inside the callback function');
};

const callingCallback = cb => {
    console.log('Inside the calling callback function');
    setTimeout(cb, 5000);
};
