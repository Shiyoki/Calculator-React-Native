import {useRef, useState} from 'react';

enum Operators {
  sum,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [Lastnumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setLastNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    // Don't accept double dots
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal dot
      if (textNumber === '.') {
        setNumber(number + textNumber);

        // Evaluate if it's another 0 and there is a dot
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        // Evaluate if it's different from 0 and there is no dot
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        // Avoid 000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substr(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberToLast = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDivide = () => {
    changeNumberToLast();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumberToLast();
    lastOperation.current = Operators.multiply;
  };

  const btnSubtract = () => {
    changeNumberToLast();
    lastOperation.current = Operators.subtract;
  };

  const btnSum = () => {
    changeNumberToLast();
    lastOperation.current = Operators.sum;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(Lastnumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setLastNumber('0');
  };

  return {
    number,
    Lastnumber,
    clean,
    buildNumber,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnSum,
    calculate,
  };
};
