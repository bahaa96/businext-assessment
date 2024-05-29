import { useEffect, useReducer } from "react";
import { Short } from "./domain-models";
import { requestFetchAllShorts } from "./network";

interface State {
  isLoading: boolean;
  data: Short[];
  error: unknown;
  pageSize: number;
  currentPage: number;
  totalCount: number;
}

type Action =
  | {
      type: "FETCH_ALL_START";
    }
  | {
      type: "FETCH_ALL_SUCCESS";
      data: Short[];
    }
  | {
      type: "FETCH_ALL_ERROR";
      error: unknown;
    };

type ActionHandlers = {
  [key in Action["type"]]: (
    state: State,
    action: Extract<Action, { type: key }>
  ) => State;
};

const initialState: State = {
  isLoading: false,
  data: [],
  error: null,
  pageSize: 20,
  currentPage: 0,
  totalCount: 0,
};

const actionHandlers: ActionHandlers = {
  FETCH_ALL_START: (state, _action) => ({
    ...state,
    isLoading: true,
    error: null,
    totalCount: 0,
  }),
  FETCH_ALL_SUCCESS: (state, { data }) => ({
    ...state,
    isLoading: false,
    data,
    totalCount: data.length,
  }),
  FETCH_ALL_ERROR: (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }),
};

function reducer(state: State = initialState, action: Action): State {
  return actionHandlers[action.type]?.(state, action as any) || state;
}

const useAllShorts = () => {
  const [{ data, isLoading, error, currentPage, pageSize }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    dispatch({ type: "FETCH_ALL_START" });

    requestFetchAllShorts({
      rpi: currentPage,
      rps: pageSize,
      options: {
        signal: controller.signal,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "FETCH_ALL_SUCCESS",
          data,
        });
      })
      .catch((error) => {
        if (controller.signal.aborted) {
          return false;
        }
        dispatch({ type: "FETCH_ALL_ERROR", error });
      });
    return () => {
      controller.abort();
    };
  }, []);

  return {
    isLoading,
    data,
    error,
  };
};

export { useAllShorts };
