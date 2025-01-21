import React from "react";

function Item({ item }) {
    return (
      <div className="flex flex-col md:flex-row items-start md:items-center rounded-lg">
        {/* Left Column: Content */}
      <div className="flex-1">
        {/* Name Section: Fixed Height */}
        <div className="mb-3 h-[50px]">
          <h2 className="text-2xl font-bold">{item.name}</h2>
        </div>

        {/* Content Section */}
        <p dangerouslySetInnerHTML={{ __html: item.content }}
        style={{
            paddingRight: "20px", // Adjust padding-right
            marginTop: "10px",    // Adjust margin-top
            lineHeight: "1.6",    // Adjust line height
            fontSize: "16px",     // Adjust font size
          }}
          ></p>
      </div>
  
        {/* Right Column: Photo */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={item.photo}
            alt={item.name}
            style={{
              width: item.photoWidth,
              height: item.photoHeight,
            }}
            className="rounded-md"
          />
        </div>
      </div>
    );
  }
  
  export default Item;