import React, { useState } from 'react';
import axios from 'axios';
import './UpdateRemark.css';

function UpdateRemark() {
  const [configId, setConfigId] = useState('');
  const [remark, setRemark] = useState('');
  const [response, setResponse] = useState('');

  const updateRemark = async () => {
    try {
      const res = await axios.put(`http://localhost:8080/api/configurations/${configId}`, {
        remark,
      });
      setResponse(res.data.message);
    } catch (err) {
      alert('Error updating remark');
    }
  };

  return (
    <div className="remark-card">
      <h2 className="title">Update Remark</h2>
      <input
        className="input"
        type="text"
        placeholder="Enter Config ID"
        value={configId}
        onChange={(e) => setConfigId(e.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Enter remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        rows={4}
      />
      <button className="button" onClick={updateRemark}>Submit</button>
      {response && <p className="response">{response}</p>}
    </div>
  );
}

export default UpdateRemark;