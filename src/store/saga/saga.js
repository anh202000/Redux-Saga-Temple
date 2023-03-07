import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as types from '../redux/actionTypes'
import { getRecipe } from '../service'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser({param}) {
  try {
    console.log(param, '123')
    const response = yield call(getRecipe, param )
    yield put({ type: types.FETCH_RECIPE_SUCCESS, payload: response?.data?.array })
  } catch (e) {
    yield put({ type: types.FETCH_RECIPE_FAIL, message: e.message })
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* onLoadRecipe() {
  yield takeLatest(types.FETCH_RECIPE_START, fetchUser)
}

const recipeSaga = [fork(onLoadRecipe)]

export default function* rootSaga() {
    yield all([...recipeSaga])
}
