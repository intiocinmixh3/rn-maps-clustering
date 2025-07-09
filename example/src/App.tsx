import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import ClusteredMapView, { type ClusterFeature } from 'rn-maps-clustering';

const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const markers = Array.from({ length: 500 }, (_, index) => ({
  id: index,
  latitude: 37.78825 + (Math.random() - 0.5) * 0.15,
  longitude: -122.4324 + (Math.random() - 0.5) * 0.15,
}));

export default function App() {
  const renderCluster = (cluster: ClusterFeature, onPress: () => void) => {
    const { point_count, cluster_id } = cluster.properties;
    const { width, height } = getClusterSize(point_count);

    return (
      <Marker
        key={`cluster-${cluster_id}`}
        coordinate={{
          longitude: cluster.geometry.coordinates[0],
          latitude: cluster.geometry.coordinates[1],
        }}
        style={{ zIndex: point_count }}
        onPress={onPress}
      >
        <View
          style={[
            styles.customCluster,
            {
              width,
              height,
            },
          ]}
        >
          <Text style={styles.clusterText}>{point_count}</Text>
        </View>
      </Marker>
    );
  };

  const getClusterSize = (pointCount: number) => {
    if (pointCount >= 100) {
      return { width: 64, height: 64 };
    }
    if (pointCount >= 50) {
      return { width: 56, height: 56 };
    }
    if (pointCount >= 20) {
      return { width: 48, height: 48 };
    }
    return { width: 40, height: 40 };
  };

  return (
    <View style={styles.container}>
      <ClusteredMapView
        style={styles.map}
        initialRegion={INITIAL_REGION}
        renderCluster={renderCluster}
        onClusterPress={(cluster, containedMarkers) => {
          console.log('--- Cluster Pressed ---');
          console.log('Cluster ID:', cluster?.properties.cluster_id);
          console.log('Contained Markers:', containedMarkers?.length, 'points');
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={`Marker #${marker.id}`}
          />
        ))}
      </ClusteredMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  customCluster: {
    backgroundColor: '#AB3428',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  clusterText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
