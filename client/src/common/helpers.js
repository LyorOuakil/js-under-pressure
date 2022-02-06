export const convertStringToFunc = (str) => {
  return eval(`(${str})`);
};

export const executeTest = (func, param) => {
  return func(param);
};

export const checkResult = (result, expectedResulted) => {
  if (result === expectedResulted) {
    console.log('success');
    return 'success';
  } else {
    console.log('Result : ', result);
    console.log('expected: ', expectedResulted);
  }
};
