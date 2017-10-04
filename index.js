{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "no-extra-semi": [2],
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed",  { "requireForBlockBody": false }],
    "no-confusing-arrow": [0],
    "no-void": [0],
    "no-param-reassign": [2, { "props": true }],
    "no-iterator": [0],
    "no-plusplus": [0],
    "no-trailing-spaces": [2,
      {
        "skipBlankLines": true
      }
    ],
    "dot-notation": [1],
    "one-var": [0],
    "no-underscore-dangle": [0],
    "max-len": [2,
      {
        "code": 80,
        "tabWidth": 2,
        "ignoreComments": true
      }
    ],
    "strict": [0],
    "func-names": [0],
    "curly": [2, "multi-or-nest", "consistent"],
    "no-continue": [0],
    "global-require": [2],
    "no-use-before-define": [1],
    "no-else-return": [0],
    "no-shadow": [0],
    "no-mixed-operators": [0],
    "no-bitwise": [0],
    "no-unused-expressions": [2],
    "class-methods-use-this": [0],
    "spaced-comment": [2, "always",
      {
        "line": {
          "markers": ["noinspection"]
        }
      }
    ],
    "no-unsafe-finally": [0],

    "react/display-name": [2],
    "react/forbid-component-props": [2],
    "react/forbid-prop-types": [0],
    "react/no-array-index-key": [1],
    "react/no-children-prop": [2],
    "react/no-danger": [2],
    "react/no-danger-with-children": [2],
    "react/no-deprecated": [2],
    "react/no-did-mount-set-state": [1],
    "react/no-did-update-set-state": [1],
    "react/no-direct-mutation-state": [2],
    "react/no-find-dom-node": [2],
    "react/no-is-mounted": [2],
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/no-render-return-value": [2],
    "react/no-set-state": [0],
    "react/no-string-refs": [2],
    "react/no-unescaped-entities": [2],
    "react/no-unknown-property": [2],
    "react/no-unused-prop-types": [2],
    "react/prefer-es6-class": [2],
    "react/prefer-stateless-function": [2],
    "react/prop-types": [2,
      {
        "ignore": ["children"]
      }
    ],
    "react/react-in-jsx-scope": [2],
    "react/require-default-props": [2],
    "react/require-optimization": [0],
    "react/require-render-return": [2],
    "react/self-closing-comp": [2],
    "react/sort-comp": [2],
    "react/sort-prop-types": [0],
    "react/style-prop-object": [2],

    "react/jsx-boolean-value": [2],
    "react/jsx-closing-bracket-location": [2],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2],
    "react/jsx-filename-extension": [2, { "extensions": [".js"] }],
    "react/jsx-first-prop-new-line": [2],
    "react/jsx-handler-names": [2,
      {
        "eventHandlerPrefix" : "_handle"
      }
    ],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": [2],
    "react/jsx-max-props-per-line": [0],
    "react/jsx-no-bind": [1],
    "react/jsx-no-comment-textnodes": [1],
    "react/jsx-no-duplicate-props": [2],
    "react/jsx-no-literals": [0],
    "react/jsx-no-target-blank": [1],
    "react/jsx-no-undef": [2],
    "react/jsx-pascal-case": [2],
    "react/jsx-sort-props": [0],
    "react/jsx-tag-spacing": [2,
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never"
      }
    ],
    "react/jsx-uses-react": [2],
    "react/jsx-uses-vars": [2],
    "react/jsx-wrap-multilines": [2],

    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/label-has-for": [0],

    "import/no-extraneous-dependencies": [0],
    "import/prefer-default-export": [0],
    "import/no-dynamic-require": [2],

    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore",
    }]
  }
}
