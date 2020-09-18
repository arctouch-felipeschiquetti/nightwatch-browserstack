const elements = {
    email: `[data-test-id='email']`,
    password: `[data-test-id='password']`,
    btnLogin: `[data-test-id='loginButton']`
};

const commands = [{

    goToPracticeLoginPage() {
        this.api.url(`https://${this.api.globals.env}.evisit.com/r/${this.api.globals.handle}/auth/LoginPage`)
            .pause(3000)
        return this
    },

    patientLogin() {
        console.log("Starting Patient Login")
        this
            //check and set email
            .waitForElementVisible('@email')
            .verify.elementPresent('@email')
            .setValue('@email', this.api.globals.email)
            //check and set password
            .waitForElementVisible('@password')
            .setValue('@password', this.api.globals.password)
            //expect and click login button
            .waitForElementVisible('@password')
            .click('@btnLogin')

        return this
    }

}];

module.exports = {
    elements: elements,
    commands: commands
}