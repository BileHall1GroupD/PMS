import Property from "../model/properties.js";

// Create a new Property
export const createProperty = async (req, res) => {
  try {
    const { name, description, location, square_footage, bedrooms, bathrooms, features, image_url,type,city,neighborhood } = req.body;

    const newProperty = new Property({
      name,
      description,
      location,
      square_footage,
      bedrooms,
      bathrooms,
      features,
      image_url,
      type,
      city,
      neighborhood
    });

    await newProperty.save();
    res.status(201).json({ message: 'Property registered successfully', data: newProperty });
  } catch (error) {
    console.error('Error in registering property:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get All Properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error in fetching properties:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a Single Property by ID
export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    console.error('Error in fetching property:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update Property by ID
export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedProperty = await Property.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.status(200).json({ message: 'Property updated successfully', data: updatedProperty });
  } catch (error) {
    console.error('Error in updating property:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete Property by ID
export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error in deleting property:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
