import { renderHook } from '@testing-library/react-hooks';
import { useFetchData } from '../hooks/useFetchData';

const failPath = 'http://localhost:8080/exercice';
const correctPath = 'http://localhost:8080/exercices';

// Failed test
test('Error property should not be empty and status should be a 404 on wrong path', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchData(failPath));
  await waitForNextUpdate({ timeout: 3000 });
  expect(result.current.error).toBeDefined();
  expect(result.current.error.response.status).toBe(404);
});

test('Should get a loading set to false', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchData(failPath));
  await waitForNextUpdate({ timeout: 3000 });
  expect(result.current.loading).toBe(false);
});

// Passing test
test('Should get a data array', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchData(correctPath));
  await waitForNextUpdate({ timeout: 3000 });
  expect(Array.isArray(result.current.data)).toBeTruthy();
});

test('Should get correct property', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchData(correctPath));
  await waitForNextUpdate({ timeout: 3000 });
  const exercice = result.current.data[0];
  expect(exercice).toHaveProperty('name');
  expect(exercice).toHaveProperty('baseCode');
  expect(exercice).toHaveProperty('description');
  expect(exercice).toHaveProperty('solution');
  expect(exercice).toHaveProperty('tests');
  expect(Array.isArray(exercice.tests)).toBeTruthy();
  expect();
});
