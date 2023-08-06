import { useCallback, useEffect } from "react";

const useDebouncedDispatch = (dispatch, delay) => {
  const debouncedDispatch = useCallback(
    (action) => {
      clearTimeout(debouncedDispatch.timeoutId);
      debouncedDispatch.timeoutId = setTimeout(() => {
        dispatch(action);
      }, delay);
    },
    [dispatch, delay]
  );

  useEffect(() => {
    return () => {
      clearTimeout(debouncedDispatch.timeoutId);
    };
  }, [debouncedDispatch]);

  return debouncedDispatch;
};

export default useDebouncedDispatch;