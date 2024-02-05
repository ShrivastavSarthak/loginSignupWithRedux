import { Avatar, Button, Card, CardContent, Fab } from "@mui/material";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1536867520774-5b4f2628a69b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "loren longer description",
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1674651649361-43a51600293a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "loren longer description",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1517146783983-418c681b56c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "loren longer description",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1591625591034-75d303d2e1a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "loren longer description",
  },
];

const Home = () => {
  return (
    <>
      <center>
        <div className="mt-8 categories">
          <h3 className="mt-3 mb-10">Categories</h3>
          <div className="flex justify-center">
            {[0, 1, 2, 3, 4, 5].map((items) => (
              <Avatar
                className="my-5 mx-20"
                key={items}
                sizes="large"
                img="https://random.imagecdn.app/v1/image?width=500&height=150&category=cloth&format=json"
              />
            ))}
            <Button size="large">
              <FaChevronRight />
            </Button>
          </div>
        </div>
        <div className="mt-20 mb-10  mx-5">
          <h3 className="mb-10">Featured Products</h3>
          <div className="flex justify-center overflow-x-hidden">
            {data.map((value) => (
              <Card
                sx={{ width: 400, height: 400 }}
                key={value.id}
                className="mx-5 my-3 bg-cover bg-center-bottom bg-no-repeat"
                style={{ backgroundImage: `url(${value.img})` }}
              >
                <CardContent>
                  <h1 className=" text-2xl font-bold absolute  bottom-0 ">{value.desc}</h1>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Fab className="mb-10">
          <FaChevronRight />
        </Fab>
        <div className="flex justify-center my-6">
          <button className="mx-3 btn">Login as a guset</button>
          <button className="btn">Become a member</button>
        </div>
      </center>

      <div className="footer mt-4"></div>
    </>
  );
};

export default Home;
