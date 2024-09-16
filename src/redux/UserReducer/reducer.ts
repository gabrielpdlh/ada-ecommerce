interface User {
  name: string,
  email: string,
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null
}

interface UserAction{
  type:string,
  payload?: User,
}

// Reducer: Guarda o estado que desejamos compartilhar na aplicacao
//          manipula/altera o estado 

export function userReducer(state = initialState, action: UserAction): UserState {
  return state
}