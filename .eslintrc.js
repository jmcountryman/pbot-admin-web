module.exports = {
    extends: 'airbnb',
    env: {
        'browser': true,
    },
    rules: {
        'brace-style':          ['error', 'allman'],
        'indent':               ['error', 2, {'SwitchCase': 1}],
        'no-console':           'off',
        'object-curly-spacing': ['error', 'never'],

        'react/jsx-filename-extension': 'off',
    },
};
