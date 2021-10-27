import React from "react";

const Nft = ({ nft }) => {
  return (
    <div>
      <div className="col-xl-3 col-lg-4 col-md-5 col-md-5 col-sm-12  mb-5">
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "0 auto",
            paddingBottom: "10px",
            minHeight: "500px",
            boxShadow: "2px 3px 7px rgb(0 0 0 / 0.2)",
          }}
        >
          <iframe
            className="card-img-top"
            style={{ maxHeight: "15rem", minHeight: "15rem",border:"0" }}
            src={`https://66ia4ucrzf2hc3qxmqo2kgfnzytouvha3llknc3nu2iux2saf57q.arweave.net/95AOUFHJdHFuF2QdpRitzibqVODa1qaLbaaRS-pAL38`}
            title={nft.id}
            alt="nft"
          />
          <div className="card-body">
            <h5 className="card-title">
             {nft.name}
            </h5>
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
            <p style={{ display: "inline-block", paddingRight: "5px" }}>
             <b>Views:</b> {nft.views}
              <a style={{ display: "block" }} target="_blank" href={`https://koi.rocks/content-details/${nft.id}`}  className="btn btn-primary">
                View NFT!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
