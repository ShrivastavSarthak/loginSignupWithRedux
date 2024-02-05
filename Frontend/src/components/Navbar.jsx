import { Card, CardContent } from "@mui/material";
import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
const Navbar = () => {
  return (
    <Card sx={{ maxHeight: 100 }} className="mt-5 mx-10">
      <CardContent className="flex justify-between">
        <div>
          <h3>Search</h3>
        </div>
        <div>
          <MdOutlineAccountCircle className=""/>
        </div>
      </CardContent>
    </Card>
  );
};

export default Navbar;
