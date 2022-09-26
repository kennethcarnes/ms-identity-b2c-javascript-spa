/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_susi",
        forgotpassword: "B2C_1_reset_password", 
        editProfile: "B2C_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://b2capp1prodwestus001.b2clogin.com/b2capp1prodwestus001.onmicrosoft.com/B2C_1_susi",
        },
        forgotpassword: {
            authority: "https://b2capp1prodwestus001.b2clogin.com/b2capp1prodwestus001.onmicrosoft.com/B2C_1_reset_password",
        },
        editProfile: {
            authority: "https://b2capp1prodwestus001.b2clogin.com/b2capp1prodwestus001.onmicrosoft.com/B2C_1_edit_profile"
        }
    },
    authorityDomain: "b2capp1prodwestus001.b2clogin.com"
}