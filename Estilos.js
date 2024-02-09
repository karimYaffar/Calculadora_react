// Estilos.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultadoContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resultadoTexto: {
    fontSize: 40,
    color: 'white',
  },
  botonesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  boton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    margin: 5,
    borderRadius: 10,
  },
  botonOperador: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc107',
    margin: 5,
    borderRadius: 10,
  },
  botonTexto: {
    fontSize: 24,
    color: 'white',
  },
});
