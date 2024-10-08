const config = require('config');
const { get, set } = require('lodash');

const setSecret = (secretPath, configPath) => {
    // Only overwrite the value if the secretPath is defined
    if (config.has(secretPath)) {
        set(config, configPath, get(config, secretPath));
    }
};


const setup = () => {
    if (config.has('secrets.cftptl-intsvc')) {
        setSecret('secrets.cftptl-intsvc.jira-username', 'jira.username');
        setSecret('secrets.cftptl-intsvc.jira-api-token', 'jira.api_token');
        setSecret('secrets.cftptl-intsvc.cot-slack-bot-token', 'slack.bot_token');
        setSecret('secrets.cftptl-intsvc.cot-slack-app-token', 'slack.app_token');
    }
};

module.exports = { setup };
