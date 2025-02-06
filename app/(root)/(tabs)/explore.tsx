import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions, Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import Header from "@/components/header";

export default function HomeScreen() {
  const [scanned, setScanned] = useState<boolean>(false);
  const [qrData, setQrData] = useState<string | null>(null);
  const cameraRef = useRef<typeof Camera | null>(null);
  const isFocused = useIsFocused();

  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    setQrData(data);
  };

  if (!permission) {
    return <Text style={styles.textCenter}>Requesting camera permission...</Text>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>No access to camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && !scanned ? (
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      ) : (
        <View style={styles.resultContainer}>
          {qrData ? (
            <ScrollView style={styles.dataContainer}>
              <Text style={styles.header}>Product Details</Text>
              {qrData.split("\n").map((line, index) => (
                <Text key={index} style={styles.qrText}>
                  {line}
                </Text>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.noDataText}>No data scanned</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
            <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  resultContainer: {
    width: "90%",
    height: "auto",
    padding: 20,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    alignItems: "center",
  },
  dataContainer: {
    width: "100%",
    height: "auto",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  qrText: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
  noDataText: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },
  permissionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textCenter: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0061FF", // Primary Blue Color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

