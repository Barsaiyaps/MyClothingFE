import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css'; // Optional CSS

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    brand: '',
    category: '',
    sizes: '',
    colors: '',
    imageUrls: '',
    stock: '',
    isFeatured: false,
    discount: '',
    gender: 'Unisex',
    material: '',
    tags: '',
    sku: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      sizes: formData.sizes.split(',').map(s => s.trim()),
      colors: formData.colors.split(',').map(c => c.trim()),
      imageUrls: formData.imageUrls.split(',').map(img => img.trim()),
      tags: formData.tags.split(',').map(tag => tag.trim()),
      price: Number(formData.price),
      discount: Number(formData.discount),
      stock: Number(formData.stock),
    };

    try {
      const res = await axios.post('http://localhost:5000/api/products', payload);
      alert('Product Created!');
      setFormData({ ...formData, name: '', description: '', price: '', sku: '' }); // reset fields
    } catch (error) {
      console.error(error);
      alert('Error creating product');
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        {[
          'name', 'description', 'price', 'brand', 'category', 'sizes', 'colors',
          'imageUrls', 'stock', 'discount', 'material', 'tags', 'sku'
        ].map((field) => (
          <div key={field}>
            <label>{field}</label>
            <input
              type={field === 'price' || field === 'stock' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={['name', 'description', 'price', 'category', 'imageUrls', 'stock'].includes(field)}
            />
          </div>
        ))}

        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Unisex">Unisex</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        <div>
          <label>
            Featured
            <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} />
          </label>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
