const Tenant = require("../model/Tenants");

const createTenant = async (req, res) => {
  try {
    const tenant = new Tenant(req.body);
    await tenant.save();
    res.status(201).json(tenant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTenants = async (req, res) => {
  try {
    const tenants = await Tenant.find();
    res.status(200).json(tenants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a tenant by ID
const updateTenant = async (req, res) => {
  const { id } = req.params;
  try {
    const tenant = await Tenant.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true,
    });
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res.status(200).json(tenant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a tenant by ID
const deleteTenant = async (req, res) => {
  const { id } = req.params;
  try {
    const tenant = await Tenant.findByIdAndDelete(id);
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res.status(200).json({ message: "Tenant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTenant, getTenants, updateTenant, deleteTenant };
