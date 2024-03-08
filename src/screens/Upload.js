import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

const FirebaseData = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database().ref('/').once('value');
        const dataFromFirebase = snapshot.val();
        const dataArray = Object.values(dataFromFirebase);

        // Sort fathers' names alphabetically
        dataArray.sort((a, b) => {
          const nameA = (a['Fathers Name'] || '').toUpperCase();
          const nameB = (b['Fathers Name'] || '').toUpperCase();
          return nameA.localeCompare(nameB);
        });
        

        setData(dataArray);
        setFilteredData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDetailsPress = (item) => {
    navigation.navigate('FamilyDetails', { familyDetails: item });
  };

  const handleSearch = (query) => {
    const filtered = data.filter((item) => {
      const values = Object.values(item);
      const found = values.some((value) =>
        value && value.toString().toLowerCase().includes(query.toLowerCase())
      );
      return found;
    });

    setFilteredData(filtered);
    setSearchQuery(query);
  };

  const renderListItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleDetailsPress(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item['Fathers Name']} and family</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../components/back-arrow-icon.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Family List</Text>
      </View>
      <View style={styles.searchContainer}>
        <Image source={require('../components/magnifying-glass-solid.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for our members"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default FirebaseData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#3D6DCC',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3D6DCC',
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  image: {
    height: 20,
    width: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
});
