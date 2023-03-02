import * as dotenv from 'dotenv'
dotenv.config()
switch (process.env) {
    case process.env.QA:
        console.log('running in the QA ENV');
        break;
    case process.env.DEV:
        console.log('running in the dev ENV');
        break;
    case process.env.release:
        console.log('running in the release ENV');
        break;
    default:
        console.log('running in the main branch');
        break;
}