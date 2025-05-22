import { useState } from "react";

export default function UploadForm({ onUpload }: any) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.image)
      return alert("Please fill in all fields");
    onUpload(formData);
    setFormData({ name: "", description: "", price: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <h3>Add New NFT</h3>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input name="price" placeholder="Price (in Pi)" value={formData.price} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
