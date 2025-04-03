const ReducerSayacFunct = (state,action) => {
    switch (action.type) {
        case "SAYAC_ARTIR":
          return { count: state.count + 1 };
        case "SAYAC_AZALT":
          return { count: state.count - 1 };
        case "SIFIRLA":
          return { count: 0 };
        default:
          throw new Error();
      }
}

const initialStateSayac = {
    count:0
}

export {ReducerSayacFunct,initialStateSayac}

 