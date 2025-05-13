const db = require("../config/db");

// READ all contacts
const getAllContacts = async () => {
  const [rows] = await db.query("SELECT * FROM contacts");
  return rows;
};

// CREATE a new contact
const createContact = async ({ name, phone, avatar }) => {
  const [result] = await db.query(
    "INSERT INTO contacts (name, phone, avatar) VALUES (?, ?, ?)",
    [name, phone, avatar]
  );
  return result.insertId;
};

// UPDATE a contact
const updateContact = async (id, { name, phone, avatar }) => {
  const [result] = await db.query(
    "UPDATE contacts SET name = ?, phone = ?, avatar = ? WHERE id = ?",
    [name, phone, avatar, id]
  );
  return result.affectedRows;
};

// DELETE a contact
const deleteContact = async (id) => {
  const [result] = await db.query("DELETE FROM contacts WHERE id = ?", [id]);
  return result.affectedRows;
};

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
};
