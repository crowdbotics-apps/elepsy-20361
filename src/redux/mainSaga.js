import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView102896Saga from '../features/CalendarView102896/redux/sagas';
import EmailAuth102895Saga from '../features/EmailAuth102895/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView102896Saga,
EmailAuth102895Saga,
    
  ]);
}