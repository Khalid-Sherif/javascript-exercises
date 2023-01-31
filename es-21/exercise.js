const password = 'Hi';

if (password.length >= 4 && password.length <= 6) {
    console.log(`Password length is correct ${password.length}`);
} else {
    console.log(`Password not valid ${password.length}`);
}
