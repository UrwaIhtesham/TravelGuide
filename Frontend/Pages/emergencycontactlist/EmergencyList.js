import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Modal,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EmergencyContactList = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedPhone, setEditedPhone] = useState("");

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://192.168.1.3:3000/contacts");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleEditPress = (contact) => {
    setSelectedContact(contact);
    setEditedName(contact.name);
    setEditedPhone(contact.phone);
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (selectedContact) {
      try {
        const response = await fetch(
          `http://192.168.1.3:3000/contacts/${selectedContact.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: editedName,
              phone: editedPhone,
              avatar: selectedContact.avatar,
            }),
          }
        );

        if (response.ok) {
          const updatedContacts = data.map((c) =>
            c.id === selectedContact.id
              ? { ...c, name: editedName, phone: editedPhone }
              : c
          );

          setData(updatedContacts);
          setModalVisible(false);
        } else {
          console.error("Failed to update contact");
        }
      } catch (error) {
        console.error("Error updating contact:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.3:3000/contacts/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setData(data.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#61dafb" />
        <Text style={styles.loadingText}>Loading contacts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="#fff"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <Text style={styles.title}>Emergency Contact List</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/OBJECTS.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Contact List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((contact) => (
          <View key={contact.id} style={styles.card}>
            <Image source={contact.avatar} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{contact.name}</Text>
              <Text style={styles.phone}>{contact.phone}</Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons
                name="person-outline"
                size={20}
                color="#fff"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEditPress(contact)}>
              <MaterialIcons
                name="edit"
                size={20}
                color="#fff"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(contact.id)}>
              <MaterialIcons
                name="delete"
                size={20}
                color="#FF6B6B"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Edit Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Contact</Text>
            <TextInput
              style={styles.input}
              value={editedName}
              onChangeText={setEditedName}
              placeholder="Name"
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              value={editedPhone}
              onChangeText={setEditedPhone}
              placeholder="Phone"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EmergencyContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    padding: 20,
    paddingTop: 50,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins",
    marginLeft: 10,
  },
  illustrationContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  illustration: {
    width: 300,
    height: 180,
  },
  card: {
    backgroundColor: "#1C2333",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins",
  },
  phone: {
    color: "#E3F2FD",
    fontSize: 13,
    marginTop: 2,
  },
  icon: {
    marginLeft: 12,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: "#0D1117",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#B3CDE0",
    fontSize: 16,
    fontFamily: "Poppins",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#1C2333",
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 15,
    fontFamily: "Poppins",
  },
  input: {
    backgroundColor: "#2A2F3A",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#61dafb",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Poppins",
  },
});
