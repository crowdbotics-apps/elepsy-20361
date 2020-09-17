import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView102896Reducer from '../features/CalendarView102896/redux/reducers';
import EmailAuth102895Reducer from '../features/EmailAuth102895/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView102896: CalendarView102896Reducer,
EmailAuth102895: EmailAuth102895Reducer,

});