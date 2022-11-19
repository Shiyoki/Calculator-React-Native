import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';
import styles from '../theme/appTheme';


export const CalculatorScreen = () => {

  const {
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
  } = useCalculator();

  return (
    <View style={styles.containerCalculator}>
      {
        ( Lastnumber !== '0') && (
          <Text style={styles.smallResult}>{Lastnumber}</Text>
        )
      }
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Row of bottons */}
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>

      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>

      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubtract} />
      </View>

      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnSum} />
      </View>

      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="0" action={buildNumber} width />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
