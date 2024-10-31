import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function AddPropertyForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [squareFootage, setSquareFootage] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [features, setFeatures] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [type, setType] = useState('House');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/property', {
        name,
        description,
        location,
        square_footage: squareFootage,
        bedrooms,
        bathrooms,
        features,
        image_url: imageUrl,
        type,
        city,
        neighborhood,
      });
      alert('Property registered successfully');
      navigate('/Dashboard');
    } catch (error) {
      console.error("Error registering property:", error);
    }
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Create New Property
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit} method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Name */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Property name"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Description</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Property description"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Property location"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Square Footage */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Square Footage</label>
                    <input
                      type="text"
                      value={squareFootage}
                      onChange={(e) => setSquareFootage(e.target.value)}
                      placeholder="Square footage"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Bedrooms</label>
                    <input
                      type="number"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(parseInt(e.target.value))}
                      placeholder="No. of bedrooms"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Bathrooms */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Bathrooms</label>
                    <input
                      type="number"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(parseInt(e.target.value))}
                      placeholder="No. of bathrooms"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Features */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Features</label>
                    <input
                      type="text"
                      value={features}
                      onChange={(e) => setFeatures(e.target.value)}
                      placeholder="Property features"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Image URL</label>
                    <input
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Image URL"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Type */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Type</label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    >
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="text-base font-medium text-gray-900">City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                      required
                    />
                  </div>

                  {/* Neighborhood */}
                  <div>
                    <label className="text-base font-medium text-gray-900">Neighborhood</label>
                    <input
                      type="text"
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      placeholder="Neighborhood (optional)"
                      className="block w-full py-3 px-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    on
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700"
                  >
                    Submit Property
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

export default AddPropertyForm;
