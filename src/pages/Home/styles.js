import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  calculator: {
    alignItems: 'center',
  },
  line: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    borderColor: '#111',
    margin: 1,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3c9ff',
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#444'
  },
  openMenu: {
    backgroundColor: '#541fdb',
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 30,
    marginHorizontal: 45,
  },
  openMenuText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    fontSize: 21,
    marginBottom: 5,
    paddingLeft: 5,
  }
});
