export const form = {
  type: 'default',
  components: [
    {
      type: 'button',
      label: 'Look up customer',
      action: 'signal',
      signal: {
        name: 'lookupCustomer',
        validate: true,
      },
    },
    {
      type: 'button',
      label: 'Notify',
      action: 'signal',
      signal: {
        name: 'notify',
      },
    },
    {
      type: 'button',
      label: 'Unnamed',
      action: 'signal',
    },
  ],
};

export const errors = null;
