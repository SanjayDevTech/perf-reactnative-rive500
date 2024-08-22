import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import Rive from 'rive-react-native';
import { riveObjects } from '../constants/rive';

export default function App() {
  const multipleRiveObjects = riveObjects
  .concat(riveObjects)
  .concat(riveObjects)
  .concat(riveObjects)
  .concat(riveObjects)
  .concat(riveObjects)
  .concat(riveObjects)
  .concat(riveObjects)
  .concat(riveObjects)
  .concat(riveObjects);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Start Animations</Text>
          {chunkList(multipleRiveObjects, 3).map((riveList, i) => {
            return <View key={i} style={styles.row}>
              {riveList.map(rive => <Rive style={{
                width: 120,
                height: 120
              }} key={rive.resId} resourceName={rive.resId} stateMachineName={rive.stateMachineName ?? undefined} artboardName={rive.artboardName ?? undefined} autoplay />)}
            </View>;
          })}
          <Text>End Animations</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function chunkList<T>(list: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    const end = i + chunkSize > list.length ? list.length : i + chunkSize;
    chunks.push(list.slice(i, end));
  }
  return chunks;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "scroll"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start"
  }
});
