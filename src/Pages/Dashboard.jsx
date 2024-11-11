import React, { useState } from 'react';
import SideBar from '../admindashboard/SideBar';
import UpdateBlog from '../admindashboard/UpdateBlog';
import MyProfile from '../admindashboard/MyProfile';
import WriteBlog from '../admindashboard/WriteBlog';
import MyBlog from '../admindashboard/MyBlog';

const Dashboard = () => {
  const [component, setComponent] = useState("My Blogs");

  return (
    <div>
      <div>
        <SideBar setComponent={setComponent} />
        {component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <WriteBlog />
        ) : component === "Update Blog" ? (
          <UpdateBlog />
        ) : (
          <MyBlog />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
