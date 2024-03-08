import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FamilyDetails = ({ route }) => {
  const { familyDetails } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../components/back-arrow-icon.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Family Details</Text>
      </View>

      <View style={styles.detailsContainer}>
        {renderDetailRow('Father\'s Name', familyDetails['Fathers Name'])}
        {renderDetailRow('Father\'s Birthdate', familyDetails['Fathers BirthDate'])}
        {renderDetailRow('Father\'s Phone Number', familyDetails['Fathers PhoneNumber'])}
        {renderDetailRow('Father\'s Occupation', familyDetails['Fathers Occupation'])}
        {renderDetailRow('Wife\'s Name', familyDetails['Mothers Name'])}
        {renderDetailRow('Wife\'s Birthdate', familyDetails['Mothers BirthDate'])}
        {renderDetailRow('Wife\'s Phone Number', familyDetails['Mothers PhoneNumber'])}
        {renderDetailRow('Wife\'s Occupation', familyDetails['Mothers Occupation'])}
        {renderDetailRow('Son\'s Name', familyDetails['Son1 Name'])}
        {renderDetailRow('Son\'s Birthdate', familyDetails['Son1 BirthDate'])}
        {renderDetailRow('Son\'s Phone Number', familyDetails['Son1 PhoneNumber'])}
        {renderDetailRow('Son\'s Education', familyDetails['Son1 Education'])}
        {renderDetailRow('Son\'s Occupation', familyDetails['Son1 Occupation'])}
        {renderDetailRow('Daughter in law\'s Name', familyDetails['DIL1 Name'])}
        {renderDetailRow('Daughter in law\'s Birthdate', familyDetails['DIL1 BirthDate'])}
        {renderDetailRow('Daughter in law\'s Phone Number', familyDetails['DIL1 PhoneNumber'])}
        {renderDetailRow('Daughter in law\'s Occupation', familyDetails['DIL1 Occupation'])}
        {renderDetailRow('Grandson\'s Name', familyDetails['GS1 Name'])}
        {renderDetailRow('Grandson\'s Birthdate', familyDetails['GS1 BirthDate'])}
        {renderDetailRow('Grandson\'s Phone Number', familyDetails['GS1 PhoneNumber'])}
        {renderDetailRow('Grandson\'s Education', familyDetails['GS1 Education'])}
        {renderDetailRow('Grandson\'s Occupation', familyDetails['GS1 Occupation'])}
        {renderDetailRow('Son\'s Name', familyDetails['Son2 Name'])}
        {renderDetailRow('Son\'s Birthdate', familyDetails['Son2 BirthDate'])}
        {renderDetailRow('Son\'s Phone Number', familyDetails['Son2 PhoneNumber'])}
        {renderDetailRow('Son\'s Education', familyDetails['Son2 Education'])}
        {renderDetailRow('Son\'s Occupation', familyDetails['Son2 Occupation'])}
        {renderDetailRow('Daughter in law\'s Name', familyDetails['DIL2 Name'])}
        {renderDetailRow('Daughter in law\'s Birthdate', familyDetails['DIL2 BirthDate'])}
        {renderDetailRow('Daughter in law\'s Phone Number', familyDetails['DIL2 PhoneNumber'])}
        {renderDetailRow('Daughter in law\'s Occupation', familyDetails['DIL2 Occupation'])}
        {renderDetailRow('Granddaughter\'s Name', familyDetails['GD1 Name'])}
        {renderDetailRow('Granddaughter\'s Birthdate', familyDetails['GD1 BirthDate'])}
        {renderDetailRow('Granddaughter\'s Phone Number', familyDetails['GD1 PhoneNumber'])}
        {renderDetailRow('Granddaughter\'s Education', familyDetails['GD1 Education'])}
        {renderDetailRow('Granddaughter\'s Occupation', familyDetails['GD1 Occupation'])}
        {renderDetailRow('Daughter\'s Name', familyDetails['Daughter1 Name'])}
        {renderDetailRow('Daughter\'s Birthdate', familyDetails['Daughter1 BirthDate'])}
        {renderDetailRow('Daughter\'s Phone Number', familyDetails['Daughter1 PhoneNumber'])}
        {renderDetailRow('Daughter\'s Education', familyDetails['Daughter1 Education'])}
        {renderDetailRow('Daughter\'s Occupation', familyDetails['Daughter1 Occupation'])}
        {renderDetailRow('Daughter\'s Name', familyDetails['Daughter2 Name'])}
        {renderDetailRow('Daughter\'s Birthdate', familyDetails['Daughter2 BirthDate'])}
        {renderDetailRow('Daughter\'s Phone Number', familyDetails['Daughter2 PhoneNumber'])}
        {renderDetailRow('Daughter\'s Education', familyDetails['Daughter2 Education'])}
        {renderDetailRow('Daughter\'s Occupation', familyDetails['Daughter2 Occupation'])}
        {renderDetailRow('Daughter\'s Name', familyDetails['Daughter3 Name'])}
        {renderDetailRow('Daughter\'s Birthdate', familyDetails['Daughter3 BirthDate'])}
        {renderDetailRow('Daughter\'s Phone Number', familyDetails['Daughter3 PhoneNumber'])}
        {renderDetailRow('Daughter\'s Education', familyDetails['Daughter3 Education'])}
        {renderDetailRow('Daughter\'s Occupation', familyDetails['Daughter3 Occupation'])}        
        {renderDetailRow('Grandson\'s Name', familyDetails['GS2 Name'])}
        {renderDetailRow('Grandson\'s Birthdate', familyDetails['GS2 BirthDate'])}
        {renderDetailRow('Grandson\'s Phone Number', familyDetails['GS2 PhoneNumber'])}
        {renderDetailRow('Grandson\'s Education', familyDetails['GS2 Education'])}
        {renderDetailRow('Grandson\'s Occupation', familyDetails['GS2 Occupation'])}
        {renderDetailRow('Grandson\'s Name', familyDetails['GS3 Name'])}
        {renderDetailRow('Grandson\'s Birthdate', familyDetails['GS3 BirthDate'])}
        {renderDetailRow('Grandson\'s Phone Number', familyDetails['GS3 PhoneNumber'])}
        {renderDetailRow('Grandson\'s Education', familyDetails['GS3 Education'])}
        {renderDetailRow('Grandson\'s Occupation', familyDetails['GS3 Occupation'])}        
        {renderDetailRow('Granddaughter\'s Name', familyDetails['GD2 Name'])}
        {renderDetailRow('Granddaughter\'s Birthdate', familyDetails['GD2 BirthDate'])}
        {renderDetailRow('Granddaughter\'s Phone Number', familyDetails['GD2 PhoneNumber'])}
        {renderDetailRow('Granddaughter\'s Education', familyDetails['GD2 Education'])}
        {renderDetailRow('Granddaughter\'s Occupation', familyDetails['GD2 Occupation'])}
        {renderDetailRow('Granddaughter\'s Name', familyDetails['GD3 Name'])}
        {renderDetailRow('Granddaughter\'s Birthdate', familyDetails['GD3 BirthDate'])}
        {renderDetailRow('Granddaughter\'s Phone Number', familyDetails['GD3 PhoneNumber'])}
        {renderDetailRow('Granddaughter\'s Education', familyDetails['GD3 Education'])}
        {renderDetailRow('Granddaughter\'s Occupation', familyDetails['GD3 Occupation'])}
        {renderDetailRow('Address', familyDetails['Address'])}


        

        {/* Add more details as needed */}
      </View>
    </ScrollView>
  );
};
const renderDetailRow = (label, value) => {
  if (value !== null && value !== undefined) {
    return (
      <View style={styles.detailBox}>
        <Text style={styles.detailText}>{label}: <Text style={styles.detailValue}>{value}</Text></Text>
      </View>
    );
  } else {
    return null;
  }
};

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
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  detailBox: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    // marginLeft:5,
    marginRight:5,
    marginBottom: 5,
    color: '#333',
    fontFamily: 'Arial',
  },
  detailValue: {
    fontSize: 20,
    color: '#000',
    marginLeft:5,
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'Courier New',
  },
  image: {
    height: 20,
    width: 25,
  },
});

export default FamilyDetails;