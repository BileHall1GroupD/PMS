const express = require("express");
const router = express.Router();
const tenantController = require("../controller/Tenants");

// Create a new tenant
router.post("/create_tenant", tenantController.createTenant);
// Get all tenants
router.get("/get_tenants", tenantController.getTenants);
// Update a tenant by ID
router.put("/:id", tenantController.updateTenant);
// Delete a tenant by ID
router.delete("/:id", tenantController.deleteTenant);

module.exports = router;
