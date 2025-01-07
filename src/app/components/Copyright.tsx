"use client";

import React, { useEffect, useState } from "react";

type Props = {
  blog: string;
};

const Copyright: React.FC<Props> = ({ blog }) => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  // Update the year once when the component mounts
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <p className="text-sm text-black font-bold">
        &copy; Copyright {currentYear} {blog}. All rights reserved
      </p>
    </div>
  );
};

export default Copyright;
