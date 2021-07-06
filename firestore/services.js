import firestore from '@react-native-firebase/firestore';

export const getData = async () => {
  const restaurantData = await firestore()
    .collection('restaurants')
    .get()
    .then(querySnap => {
      let array = querySnap.docs.map(doc => {
        return {...doc.data()};
      });
      return array;
    })
    .catch(e => console.log(e));

  return restaurantData;
};
