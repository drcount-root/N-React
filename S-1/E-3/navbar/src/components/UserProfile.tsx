import React from "react";

export default function UserProfile() {
  return (
    <React.Fragment>
      <div className="relative">
        <img
          className="w-10 h-10 rounded-full"
          src="https://scontent.fdel11-2.fna.fbcdn.net/v/t1.18169-9/23659351_1333564626752304_1902702803352084934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Q1bbNqGTp0YAX9bU6-4&_nc_ht=scontent.fdel11-2.fna&oh=00_AfB0qhm-V1M7xlGqwges_EFADGaFMkCBtYlygwKTWnEgAg&oe=64A37AB9"
          alt=""
        />
        <span className="bottom-0 left-7 absolute  w-3 h-3 bg-green-400 border-4 border-green-300 rounded-full"></span>
      </div>
    </React.Fragment>
  );
}
