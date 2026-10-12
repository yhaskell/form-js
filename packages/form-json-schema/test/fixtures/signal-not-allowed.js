export const form = {
  type: 'default',
  components: [
    {
      type: 'button',
      label: 'Submit',
      action: 'submit',
      signal: {
        name: 'lookupCustomer',
      },
    },
    {
      type: 'text',
      text: 'text',
      signal: {
        name: 'lookupCustomer',
      },
    },
  ],
};

export const errors = [
  {
    instancePath: '/components/0/signal',
    schemaPath: '#/properties/components/items/allOf/1/allOf/30/then/properties/signal/false schema',
    keyword: 'false schema',
    params: {},
    message: 'boolean schema is false',
  },
  {
    instancePath: '/components/0',
    schemaPath: '#/properties/components/items/allOf/1/allOf/30/if',
    keyword: 'if',
    params: { failingKeyword: 'then' },
    message: 'must match "then" schema',
  },
  {
    instancePath: '/components/1/signal',
    schemaPath: '#/properties/components/items/allOf/1/allOf/30/then/properties/signal/false schema',
    keyword: 'false schema',
    params: {},
    message: 'boolean schema is false',
  },
  {
    instancePath: '/components/1',
    schemaPath: '#/properties/components/items/allOf/1/allOf/30/if',
    keyword: 'if',
    params: { failingKeyword: 'then' },
    message: 'must match "then" schema',
  },
];
