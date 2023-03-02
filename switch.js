let env
switch (process.env.NODE_ENV) {
    case 'qa':
        env = 'qa';
        console.log('running in the QA ENV');
        break;
    case 'dev':
        env = 'dev';
        console.log('running in the dev ENV');
        break;
    case 'release':
        env = 'release';
        console.log('running in the release ENV');
        break;
    default:
        env = 'prod';
        console.log('running in the main branch');
        break;
}