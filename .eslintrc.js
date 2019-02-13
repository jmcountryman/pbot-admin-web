module.exports = {
    extends: 'airbnb',
    env: {
        'browser': true,
    },
    rules: {
        'brace-style':          ['error', 'allman'],
        'implicit-arrow-linebreak': 'off',
        'import/no-named-as-default': 'off',
        'indent':               ['error', 2, {'SwitchCase': 1}],
        'no-console':           'off',
        'object-curly-newline': ['error', {
            'ObjectPattern': {'multiline': true},
        }],
        'react/jsx-filename-extension': 'off',
    },
};
