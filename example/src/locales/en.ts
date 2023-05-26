// TODO: i18n
export default {
  components: {
    UInput: {
      slots: {
        prepend: {
          description: 'custom some icon or text before input',
        },
        append: {
          description: 'custom some icon or text after input',
        },
      },
    },
    UModal: {
      slots: {
        header: {
          description: 'custom header',
        },
        footer: {
          description: 'custom footer',
        },
      },
    },
    USelect: {
      slots: {
        option: {
          description: 'custom option',
        },
      },
    },
    UTable: {
      slots: {
        headers: {
          description: 'custom headers',
        },
        loading: {
          description: 'custom loading',
        },
        empty: {
          description: 'custom empty',
        },
        rows: {
          description: 'row data',
        },
      },
    },
    UDynamicTags: {
      slots: {
        trigger: {
          description: 'custom trigger',
        },
        input: {
          description: 'custom input',
        },
      },
    },
    ULoading: {
      slots: {
        icon: {
          description: 'custom icon',
        },
      },
    },
    UTree: {
      slots: {
        option: {
          description: 'custom option',
        },
      },
    },
  },
} as any
