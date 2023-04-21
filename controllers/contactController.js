//@desc Get a contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.json({ message: `Get contact for ${req.params.id}` });
};

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.json({ message: "Get all contacts" });
};

//@desc Create a contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  res.json({ message: "Create an contact" });
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
