import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export function EditPropertyForm() {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    location: '',
    squareFootage: '',
    bedrooms: 0,
    bathrooms: 0,
    features: '',
    imageUrl: '',
    type: 'House',
    city: '',
    neighborhood: '',
  });

  const navigate = useNavigate();
  const { id } = useParams(); 

  // Fetch existing property details if editing
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/api/property/${id}`)
        .then(response => {
          const data = response.data;
          setFormState({
            name: data.name,
            description: data.description,
            location: data.location,
            squareFootage: data.square_footage,
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            features: data.features,
            imageUrl: data.image_url,
            type: data.type,
            city: data.city,
            neighborhood: data.neighborhood,
          });
        })
        .catch(error => {
          console.error('Error fetching property:', error);
        });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === 'bedrooms' || name === 'bathrooms' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Edit existing property
        await axios.put(`http://localhost:3000/api/property/${id}`, {
          ...formState,
          square_footage: formState.squareFootage,
          image_url: formState.imageUrl,
        });
        alert('Property updated successfully');
        navigate('/property');
      } else {
        // Create new property
        await axios.post('http://localhost:3000/api/property', {
          ...formState,
          square_footage: formState.squareFootage,
          image_url: formState.imageUrl,
        });
        alert('Property registered successfully');
        navigate('/Dashboard');
      }
    } catch (error) {
      console.error(id ? 'Error updating property:' : 'Error registering property:', error);
    }
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {id ? 'Edit Property' : 'Create New Property'}
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit} method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { label: 'Name', name: 'name', type: 'text', placeholder: 'Property name' },
                    { label: 'Description', name: 'description', type: 'text', placeholder: 'Property description' },
                    { label: 'Location', name: 'location', type: 'text', placeholder: 'Property location' },
                    { label: 'Square Footage', name: 'squareFootage', type: 'text', placeholder: 'Square footage' },
                    { label: 'Bedrooms', name: 'bedrooms', type: 'number', placeholder: 'No. of bedrooms' },
                    { label: 'Bathrooms', name: 'bathrooms', type: 'number', placeholder: 'No. of bathrooms' },
                    { label: 'Features', name: 'features', type: 'text', placeholder: 'Property features' },
                    { label: 'Image URL', name: 'imageUrl', type: 'text', placeholder: 'Image URL' },
                    { label: 'City', name: 'city', type: 'text', placeholder: 'City' },
                    { label: 'Neighborhood', name: 'neighborhood', type: 'text', placeholder: 'Neighborhood (optional)' },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="text-base font-medium text-gray-900">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={formState[name]}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                        className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                        required={name !== 'neighborhood'}
                      />
                    </div>
                  ))}

                  {/* Type */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Type</label>
                    <select
                      name="type"
                      value={formState.type}
                      onChange={handleInputChange}
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    >
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700"
                  >
                    {id ? 'Update Property' : 'Submit Property'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditPropertyForm;
