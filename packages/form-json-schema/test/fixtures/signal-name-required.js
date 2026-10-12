export const form = {
  type: 'default',
  components: [
    {
      type: 'button',
      label: 'No name',
      action: 'signal',
      signal: {
        validate: true,
      },
    },
    {
      type: 'button',
      label: 'Empty name',
      action: 'signal',
      signal: {
        name: '',
      },
    },
  ],
};

export const errors = [
  {
    instancePath: '/components/0/signal',
    schemaPath: '#/properties/components/items/properties/signal/required',
    keyword: 'required',
    params: { missingProperty: 'name' },
    message: "must have required property 'name'",
  },
  {
    instancePath: '/components/1/signal/name',
    schemaPath: '#/properties/components/items/properties/signal/properties/name/minLength',
    keyword: 'minLength',
    params: { limit: 1 },
    message: 'must NOT have fewer than 1 characters',
  },
];
