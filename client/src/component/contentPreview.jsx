import React, { useState } from 'react';

function ContentPreview({ contentUrl }) {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div>
      <h1>内容预览示例</h1>
      <button onClick={togglePreview}>
        {showPreview ? '关闭预览' : '打开预览'}
      </button>
      {showPreview && (
        <iframe
          title="Content Preview"
          width="800"
          height="600"
          src={contentUrl}
          frameBorder="0"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default ContentPreview;
