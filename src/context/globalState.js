// In this file you will have an initial store when initializing your application and the actions that can modify your store
// Remember that only the actions can change the value of the store, 
// It is the analogous to the "setter" function of the useState.

export const globalState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        }
      ]
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, 'green');
      },

      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        console.log(demo)
        setStore({ demo: demo });
      },
    },

  }
}