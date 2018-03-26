export default function counter (state = 0, action) {
  console.log('action', action, 'state', state, 'type', action.type, 'payload', action.payload)
  switch (action.type) {
    // case 'INCREMENT':
    //   return state + 1
    // case 'DECREMENT':
    //   return state - 1
    case 'CLOSE_MODAL':
      return { showModal: false, metadata: action.payload }
    case 'OPEN_MODAL':
      return { showModal: true, metadata: action.payload }
    default:
      return { showModal: false, metadata: action.payload }
  }
}
