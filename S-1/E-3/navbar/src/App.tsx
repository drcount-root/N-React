import React from "react";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import Logo from "./components/Logo";

export default function App() {
  return (
    <React.Fragment>
      <div className="px-4 h-16 flex justify-between items-center bg-slate-100">
        <Logo />
        <SearchBar />
        <UserProfile />
      </div>
    </React.Fragment>
  );
}
