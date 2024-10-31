import mongoose from 'mongoose';

const leaseAgreementSchema = new mongoose.Schema({
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  property_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  agreement_details: { type: String, required: true }, 
  created_at: { type: Date, default: Date.now }
});

const LeaseAgreement = mongoose.model('LeaseAgreement', leaseAgreementSchema);
export default LeaseAgreement;
