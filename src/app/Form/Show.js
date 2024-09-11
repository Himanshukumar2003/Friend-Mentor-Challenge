"use client";

import { useSelector } from "react-redux";

const ShowData = () => {
  const formData = useSelector((state) => state.formData.data);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Submitted Data</h1>
      {formData.name ? (
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default ShowData;
