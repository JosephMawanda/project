export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'PROPERTIES & TENANTS',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Properties & Units',
      url: '/Theme/AddProperty',
      icon: 'icon-drop',
    },

    {
      name: 'Tenants',
      url: '/Theme/AddTenant',
      icon: 'icon-pencil',
    },
    {
      name: 'Purchase Tenants',
      url: '/Theme/AddProperty',
      icon: 'icon-pencil',
    },

    {
      title: true,
      name: 'PAYMENTS & EXPENSES',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Payments',
      url: '/Theme/AddPayment',
      icon: 'icon-drop',
    },

    {
      name: 'Expenses',
      url: '/Theme/AddExpense',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'REPORTING',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Rent Due ',
      url: '/Theme/AddPayment',
      icon: 'icon-drop',
    },

    {
      name: 'Income Statement',
      url: '/Theme/AddExpense',
      icon: 'icon-pencil',
    },
    {
      name: 'URA Returns',
      url: '/Theme/AddExpense',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'OTHERS',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Contractors & Suppliers',
      url: '/Theme/AddPayment',
      icon: 'icon-drop',
    },

    {
      name: 'Admin Staff',
      url: '/Theme/AddExpense',
      icon: 'icon-pencil',
    },
    {
      name: 'Service Requests',
      url: '/Theme/AddExpense',
      icon: 'icon-pencil',
    },





    
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
