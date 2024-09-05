import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = ` ${title} || Bistro Boss`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [title]);
};

export default useTitle;
