import { combineReducers } from 'redux';
import session from './session_reducer';
import notes from './note_reducer';


// { session: {...}}...want to grab session so we'll combine it as session: sessionReducer
export default combineReducers( { session, notes } );
