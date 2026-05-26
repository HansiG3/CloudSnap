import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/images"
      );

      setImages(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {

    fetchImages();

  }, []);

  const uploadImage = async () => {

    try {

      const formData = new FormData();

      formData.append("image", image);

      await axios.post(
        "http://localhost:5000/api/images/upload",
        formData
      );

      fetchImages();

    } catch (err) {

      console.log(err);

    }
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>CloudSnap</h1>

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        onClick={uploadImage}
        style={{
          marginLeft: "10px",
          padding: "5px 10px"
        }}
      >
        Upload
      </button>

      <div style={{ marginTop: "20px" }}>

        {images.map((img) => (

          <img
            key={img._id}
            src={img.imageUrl}
            alt="uploaded"
            width="200"
            style={{
              margin: "10px",
              borderRadius: "10px"
            }}
          />

        ))}

      </div>

    </div>
  );
}

export default App;