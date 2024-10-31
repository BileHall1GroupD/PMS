import mongoose from 'mongoose';

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_number: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  lease_start_date: { type: Date, required: true },
  lease_end_date: { type: Date, required: true },
  rent_amount: { type: Number, required: true },
  payment_status: { 
    type: String, 
    required: true, 
    enum: ['Paid', 'Due', 'Overdue'], 
    default: 'Due' 
  },
  lease_agreement: { type: String, required: true },
}, {
  timestamps: true
});

const Tenant = mongoose.model('Tenant', tenantSchema);
export default Tenant;
