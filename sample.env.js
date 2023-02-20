const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
    Meta_WA_accessToken: 'EAAwGamXRvCcBAO1gUsARs1GuJ4ELMtE6RZCKwqCjRNJGG1l7MmdVyGmVRn2nYUUcNZBOODpnJqWqZBEiqy82AZCvs4QUfMEp4cBt6xSZA46EHfZAdvokrql7I2rqXinmnoEoDlpd9FzYBwZCaT8U5y5KLEMPrAzNGY4QDjf9EhSPWfEtCcZC41WPupVOqkeUIevTljSw1El52wZDZD',
    Meta_WA_SenderPhoneNumberId: '100694566237841',
    Meta_WA_wabaId: '104372602530052',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '8000',
    Meta_WA_VerifyToken: '1234',
    Meta_WA_accessToken: 'EAAwGamXRvCcBAO1gUsARs1GuJ4ELMtE6RZCKwqCjRNJGG1l7MmdVyGmVRn2nYUUcNZBOODpnJqWqZBEiqy82AZCvs4QUfMEp4cBt6xSZA46EHfZAdvokrql7I2rqXinmnoEoDlpd9FzYBwZCaT8U5y5KLEMPrAzNGY4QDjf9EhSPWfEtCcZC41WPupVOqkeUIevTljSw1El52wZDZD',
    Meta_WA_SenderPhoneNumberId: '100694566237841',
    Meta_WA_wabaId: '104372602530052',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};
