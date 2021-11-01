import React from "react";
import LazyLoad from 'react-lazyload';

const Nft = ({ nft }) => {
  return (

      <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12  mb-5">
        <div
          className="card"
          style={{
            width: "100%",
            margin: "0 auto",
            paddingBottom: "10px",
            minHeight: "500px",
            boxShadow: "2px 3px 7px rgb(0 0 0 / 0.2)",
          }}
        >
          <LazyLoad offset={100}>
          <iframe
          loading="lazy"
            className="card-img-top"
            style={{ maxHeight: "15rem", minHeight: "15rem",border:"0" }}
            src={`https://arweave.net/${nft.id}`}
            title={nft.id}
            alt="nft"
          />
          </LazyLoad>
          <div className="card-body">
            <h5 className="card-title">
             {nft.id}
            </h5>
            {/*
            <p
              className="card-text"
              style={{
                width: "250px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {nft.description||"description"}
            </p>
            */}
            <p style={{ display: "inline-block", paddingRight: "5px" }}>
             <b>Views:</b> {nft.views}
              <a style={{ display: "block" }} target="_blank" href={`https://koi.rocks/content-details/${nft.id}`}  className="btn btn-primary">
                View NFT!
              </a>
            </p>
          </div>
        </div>
      </div>

  );
};

export default Nft;
