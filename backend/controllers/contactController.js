const Contact = require('../models/contactModel');

// GET
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.getAllContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// POST
const addContact = async (req, res) => {
  try {
    const id = await Contact.createContact(req.body);
    res.status(201).json({ message: 'Contact created', id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
};

// PUT
const editContact = async (req, res) => {
  try {
    const updated = await Contact.updateContact(req.params.id, req.body);
    if (updated) {
      res.json({ message: 'Contact updated' });
    } else {
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

// DELETE
const removeContact = async (req, res) => {
  try {
    const deleted = await Contact.deleteContact(req.params.id);
    if (deleted) {
      res.json({ message: 'Contact deleted' });
    } else {
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};

module.exports = {
  getContacts,
  addContact,
  editContact,
  removeContact,
};
