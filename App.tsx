import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './style'
import { Ball } from './components/Ball';
import { useEffect, useState } from 'react';

let timer: NodeJS.Timeout;

export default function App() {
  const [posY, setPosY] = useState<number>(0);
  const [gravity, setGravity] = useState<number>(0.98);
  const [upForce, setUpForce] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);


  useEffect(() => {
    const applyGravity = () => {
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      let newSpeed = speed + (gravity - (newUpForce / 2));
      setSpeed(newSpeed);

      let newPosY = posY - newSpeed;

      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(-newSpeed * 0.7); 
      }

      setPosY(newPosY)
    
    }
 
  
    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY])

  const handleForceButton = () => {
    setUpForce(7);
  }

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>Força: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Velocidade: {speed.toFixed(2)} </Text>
          <Text style={styles.controlText}>Posição Y: {posY.toFixed(2)} </Text>
        </View>
        <TouchableOpacity style={styles.controlButton} onPress={handleForceButton}>
          <Text>Pular</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


