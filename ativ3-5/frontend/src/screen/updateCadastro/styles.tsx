import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: '#243c57',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    width:52,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
    width: '100%',
    height: 300, // Ajuste para o tamanho desejado
    marginTop: 20,
  },
  enderecoText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    marginBottom: 10,
  },
  
});
