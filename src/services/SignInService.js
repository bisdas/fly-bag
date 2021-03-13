const requestOTP = (phoneNumber) => {
    const otpPromise = new Promise((resolve, reject) => {
        if (phoneNumber) {
            // todo: logic to validate phone number
            setTimeout(() => {
                resolve('1234');
            }, 500);
        }
        else {
            reject('Invalid phone number');
        }
    })

    return otpPromise;
}


export {
    requestOTP
}