import { renderHook, act } from '@testing-library/react-hooks';
import useTest from '../index';

const setUp = (defaultValue?: any) => renderHook(() => useTest(defaultValue));

describe('useTest', () => {
  it('should be defined', () => {
    expect(useTest).toBeDefined();
  });

  it('test on methods', async () => {
    const { result } = setUp(false);
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1](true);
    });
    expect(result.current[0]).toBeTruthy();
  });
});
