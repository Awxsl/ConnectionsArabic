import { Oval } from "react-loader-spinner";

import React from "react";

function LoadingSpinner({classname}) {
  return (
    <div className={classname}>

        <Oval
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
    </div>
  );
}

export default LoadingSpinner;
