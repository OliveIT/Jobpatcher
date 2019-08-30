import React from "react";
import {Highlight,} from 'react-instantsearch-dom';


const ProductItem = ({item}) => {
  console.log(item);
  const icons = [];
  for (let i = 0; i < 5; i++) {
    const suffixClassName = i >= item.rating ? '--empty' : '';
    const suffixXlink = i >= item.rating ? 'Empty' : '';

    icons.push(
      <svg
        key={i}
        className={`ais-RatingMenu-starIcon ais-RatingMenu-starIcon${suffixClassName}`}
        aria-hidden="true"
        width="24"
        height="24"
      >
        <use xlinkHref={`#ais-RatingMenu-star${suffixXlink}Symbol`}/>
      </svg>
    );
  }
  return (
    <div className="gx-product-item gx-product-vertical">
      <div className="gx-product-image">
        <img
          src={`https://res.cloudinary.com/hilnmyskv/image/fetch/h_300,q_100,f_auto/${
            item.image
            }`} alt=''
        />
      </div>
      <div className="gx-product-body">

        <div className="gx-product-name">
          <Highlight attribute="name" hit={item}/>
        </div>
        <div className="gx-mb-3">
          <Highlight attribute="type" hit={item}/>
        </div>
        <div className="ais-RatingMenu-link">{icons}</div>
        <div className="gx-product-price">${item.price}</div>

      </div>
    </div>
  );
};

export default ProductItem;
