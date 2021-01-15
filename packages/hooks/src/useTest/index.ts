import { useState } from 'react';

function useTest<S extends Record<string, unknown>>(initialState: S): any {
  const [test, setTest] = useState(initialState);

  return [test, setTest];
}

export default useTest;
