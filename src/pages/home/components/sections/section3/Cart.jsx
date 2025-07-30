import React from "react";

const Cart = () => {
  const cartData = [
    {
      header: "Customer Testimonial",
      text: "Everybody is different, which is why we offer styles for every body...",
      user: [
        {
          name: "Petty Cruiser",
          position: "Designer at Colorlib",
        },
      ],
    },
    {
      header: "Customer Testimonial",
      text: "Everybody is different, which is why we offer styles for every body...",
      user: [
        {
          name: "John Doe",
          position: "Developer at Colorlib",
        },
      ],
    },
    {
      header: "Customer Testimonial",
      text: "Everybody is different, which is why we offer styles for every body...",
      user: [
        {
          name: "Jane Smith",
          position: "Manager at Colorlib",
        },
      ],
    },
  ];

  return (
    <>
      {cartData.slice(0,1).map((items, idx) => (
        <div key={idx} className="my-4 p-4 border">
          <div className="mb-2">
            <h1 className="text-xl font-bold">{items.header}</h1>
            <p>{items.text}</p>
          </div>
          {items.user.map((userItem, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div>
                <img
                  src="/img" // burada real şəkil linki olmalıdır
                  alt="user"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <p className="font-medium">{userItem.name}</p>
                <p className="text-sm text-gray-600">{userItem.position}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Cart;
