import { useCallback, useReducer } from "react";

function stateReducer(state, action) {
    switch(action.type) {
        case 'LOADING':
            return {   
                isLoading: true,
                error: null
            };
        case 'SUCCESS':
            return {
                isLoading: false,
                error: null
            };
        case 'ERROR':
            return {
                isLoading: false,
                error: action.error
            };
        default : 
            return {
                isLoading: false,
                error: false
            };
    }

}

function useHttp () {
  const [state, dispatchState] = useReducer(stateReducer, {
    isLoading: false,
    data: null,
    error: false
  })

  const sendRequest = useCallback(async (taskText, callbackFn) => {
    dispatchState({type:'LOADING'})

    try {
        let options = (taskText)
          ? {
              method: "POST",
              body: JSON.stringify({ text: taskText }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          : null;
  
        let response = await fetch(
          "https://react-http-42cd7-default-rtdb.firebaseio.com/tasks.json",
          options
        );
  
        if (!response.ok) {
          throw new Error("Request failed!");
        }
  
        const data =  await response.json();
        
        dispatchState({type:'SUCCESS'})
        callbackFn(data)
      } catch (err) {
        dispatchState({type:'ERROR', error: err.message || "Something went wrong!"})
      }
  }, [])

  return [state, sendRequest]
}

export default useHttp
