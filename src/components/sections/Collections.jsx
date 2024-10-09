import React from "react";
import colletion3 from "../../assets/collection3.png";

const Collections = () => {
  return (
    <div className="w-full py-16 px-4 ">
      <div className="py-10 max-w-[1240px] mx-auto">
        <div className="headings text-center mx-auto">
          <h1 className="md:text-5xl text-4xl font-bold mb-5">
            Fashion Collection That You <br /> Will Love
          </h1>
          <p className="md:text-xxl text-lg">
            Fashion service offers innovative and unique styles that go beyond{" "}
            <br /> conventional fashion trends.
          </p>
        </div>

        <div className="container-image-gallery my-10 grid md:grid-cols-3">
          <div className="left grid grid-rows-5 grid-cols-3">
            <div className="row-span-5 mr-2 my-2 md:my-10">
              <img
                className="w-[100%] h-[100%] object-cover rounded-md hover:scale-110 duration-300"
                src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwd2VhcmluZyUyMGZhc2hpb24lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-3 mx-2 my-2">
              <img
                className="w-[100%] h-[100%] object-cover rounded-md hover:scale-110 duration-300"
                src="https://st3.depositphotos.com/3250631/13244/i/450/depositphotos_132446602-stock-photo-portrait-of-elegant-brutal-man.jpg"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-2 mx-2 my-2">
              <img
                className="w-[100%] h-[100%] object-cover rounded-md hover:scale-110 duration-300"
                src={colletion3}
                alt=""
              />
            </div>
          </div>
          <div className="middle grid mx-2 my-2">
            {/* h-[400px] w-[300px] */}
            <img
              className="w-[100%] h-[100%] object-cover rounded-md hover:scale-110 duration-300"
              src="https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3NlcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="right grid grid-rows-5 grid-cols-3">
            <div className="row-span-5 order-1 ml-2 my-2 md:my-10">
              <img
                className="w-[100%] h-[100%] object-cover rounded-md hover:scale-110 duration-300"
                src="https://sofashionitaly.files.wordpress.com/2021/11/screenshot_20211207-124053_samsung-internet.jpg?w=401"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-2 order-1 mx-2 my-2">
              <img
                className="w-[100%] h-[100%] object-cover rounded-md hover:scale-110 duration-300"
                src="https://previews.123rf.com/images/alonesdj/alonesdj2206/alonesdj220600451/187618765-fashionable-handsome-man-hipster-with-hairstyle-and-vintage-eyewear-in-trendy-outfit-jeans-with.jpg"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-3 mx-2 my-2">
              <img
                className="w-[100%] h-[100%] object-cover rounded-md hover:scale-110 duration-300"
                src="https://img.freepik.com/premium-photo/fashion-women-s-clothes-shopping-mall-windows_1112-5261.jpg?w=900"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
