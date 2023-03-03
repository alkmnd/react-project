import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileCard from '../components/ ProfileCard';
import AchievementList from '../components/AchievementList';
const Browse = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.contentContainer}>
        <AchievementList/>
      </View> */}
      <ProfileCard/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Browse;