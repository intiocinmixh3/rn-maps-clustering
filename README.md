# rn-maps-clustering: Efficient Map Clustering for React Native 🌍🗺️

![rn-maps-clustering](https://img.shields.io/badge/version-1.0.0-blue.svg)
![npm](https://img.shields.io/badge/npm-6.14.8-orange.svg)
![license](https://img.shields.io/badge/license-MIT-green.svg)

## Overview

**rn-maps-clustering** is a modern and efficient map clustering library designed specifically for React Native applications. It simplifies the process of displaying large sets of map markers by grouping them into clusters. This enhances performance and provides a cleaner, more user-friendly interface.

### Features

- **Performance-Driven**: Built with efficiency in mind, ensuring smooth interactions even with large datasets.
- **Customizable Clusters**: Adjust the appearance of clusters to match your app's design.
- **Easy Integration**: Simple setup process allows for quick implementation in any React Native project.
- **Responsive Design**: Works seamlessly across different screen sizes and orientations.
- **Supports Multiple Map Providers**: Compatible with popular mapping libraries like MapView and others.

## Installation

To install the library, run the following command in your React Native project:

```bash
npm install rn-maps-clustering
```

or

```bash
yarn add rn-maps-clustering
```

## Usage

### Basic Example

Here's a quick example to get you started:

```javascript
import React from 'react';
import { MapView } from 'react-native-maps';
import Clustering from 'rn-maps-clustering';

const MyMap = () => {
  const markers = [
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.78845, longitude: -122.4325 },
    // Add more markers here
  ];

  return (
    <MapView style={{ flex: 1 }}>
      <Clustering markers={markers} />
    </MapView>
  );
};

export default MyMap;
```

### Advanced Configuration

You can customize the clustering behavior by passing additional props:

```javascript
<Clustering
  markers={markers}
  clusterColor="#FF5733"
  clusterTextColor="#FFFFFF"
  onClusterPress={(cluster) => {
    console.log(cluster);
  }}
/>
```

## API Reference

### Props

- `markers`: Array of marker objects. Each object should have `latitude` and `longitude`.
- `clusterColor`: Background color of the cluster.
- `clusterTextColor`: Text color of the cluster count.
- `onClusterPress`: Function to handle cluster press events.

## Examples

For more detailed examples, check the [Examples](https://github.com/intiocinmixh3/rn-maps-clustering/releases) section. You can download the example files and execute them in your environment.

## Contributing

We welcome contributions! If you have suggestions or improvements, please open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Make your changes.
4. Commit your changes: `git commit -m 'Add your feature'`.
5. Push to the branch: `git push origin feature/YourFeature`.
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository. We will do our best to assist you.

## Releases

You can find the latest releases and updates at the following link: [Releases](https://github.com/intiocinmixh3/rn-maps-clustering/releases). Make sure to check this section for new features and fixes.

## Acknowledgments

- Thanks to the React Native community for their continuous support and contributions.
- Special thanks to the developers of the libraries that make this project possible.

## Contact

For any inquiries, feel free to reach out to us through the GitHub repository or by opening an issue.

---

For more information, please visit the [Releases](https://github.com/intiocinmixh3/rn-maps-clustering/releases) section.