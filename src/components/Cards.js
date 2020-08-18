import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cards = () => {
  const [images, setImages] = useState([]);
  const key = '16386444-091359d04dda414c8b6fa03f0';
  const url = `https://pixabay.com/api/?key=${key}&q=switzerland&image_type=photo&pretty=true`;

  useEffect(() => {
    async function getImages() {
      const res = await axios.get(url);
      setImages(res.data.hits);
    }
    getImages();
  }, [url]);

  return (
    <React.Fragment>
      {images.map((image) => (
        <div
          key={image.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src={image.webformatURL}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Photo taken by {image.user}
            </div>
            <p className="text-gray-700 text-base">Views: {image.views}</p>
            <p className="text-gray-700 text-base">
              Downloads: {image.downloads}
            </p>
            <p className="text-gray-700 text-base">Likes: {image.likes}</p>
            <p className="text-gray-700 text-base">
              Comments: {image.comments}
            </p>
          </div>
          <div className="px-6 py-4">
            {images.map((t) => (
              <span
                key={t.id}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                #{t.tags.split(',')}
              </span>
            ))}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Cards;
