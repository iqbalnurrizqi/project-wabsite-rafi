import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const TabletColumnlogo = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="md:h-[58px] h-[62px] relative rounded-[10px] shadow-bs w-full">
          <Text
            className="ml-[45px] mt-[11px] text-[15.79px] text-indigo-300 tracking-[0.12px]"
            size="txtDMSansBold1579"
          >
            {props?.logotext}
          </Text>
          <div
            className="common-pointer absolute bg-amber-600 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full"
            onClick={() => navigate("/tablet")}
          >
            <Img
              className="h-[38px] my-[3px]"
              src="images/img_compete_green_900.svg"
              alt="compete"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TabletColumnlogo.defaultProps = { logotext: "logo" };

export default TabletColumnlogo;
