import React, { useState } from 'react';
import axios from 'axios';
import './FetchConfig.css';

function FetchConfig() {
  const [configId, setConfigId] = useState('');
  const [matrix, setMatrix] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/api/configurations/${configId}`);
      setMatrix(res.data);
    } catch (err) {
      alert('Error fetching config');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fetch-card">
      <h2 className="title">Fetch Configuration</h2>
      <input
        className="input"
        type="text"
        placeholder="Enter Config ID"
        value={configId}
        onChange={(e) => setConfigId(e.target.value)}
      />
      <button className="button" onClick={fetchData}>Submit</button>

      {loading && <p>Loading...</p>}

      {matrix && (
        <div className="output">
          <h3>Matrix Output</h3>
          <table className="matrix-table">
            <tbody>
              {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FetchConfig;
