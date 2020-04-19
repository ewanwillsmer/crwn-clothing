import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component.jsx";

// Renders CollectionItems from the nested items array in the SHOP_DATA file
// Filters to only show the first four items
const CollectionPreview = ({ id, title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
