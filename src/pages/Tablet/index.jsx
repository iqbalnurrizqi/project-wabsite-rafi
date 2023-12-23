import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import TabletColumnlogo from "components/TabletColumnlogo";

const TabletPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-200 flex flex-col font-inter items-center justify-start mx-auto pb-2 w-full">
        <div className="flex flex-col justify-start w-full">
          <header className="bg-teal-700_d8 flex flex-col items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <Line className="bg-black-900 h-0.5 w-full" />
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-5 w-[91%] md:w-full">
                <TabletColumnlogo className="flex flex-col font-dmsans items-center justify-start" />
                <Button
                  className="cursor-pointer font-bold font-inter h-[54px] rounded-[27px] text-base text-center tracking-[0.50px] w-[311px]"
                  color="white_A700"
                  size="md"
                  variant="outline"
                >
                  CARI
                </Button>
              </div>
              <Line className="bg-black-900 h-px mt-4 w-full" />
            </div>
          </header>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[861px] mt-[19px] mx-auto md:px-5 w-full">
            <Text
              className="common-pointer sm:mt-0 mt-2 text-black-900 text-xl tracking-[0.50px]"
              size="txtInterMedium20"
              onClick={() => navigate("/masihdalampengembangan")}
            >
              Program
            </Text>
            <Text
              className="common-pointer sm:ml-[0] ml-[305px] sm:mt-0 mt-1 text-black-900 text-xl tracking-[0.50px]"
              size="txtInterMedium20"
              onClick={() => navigate("/masihdalampengembangan")}
            >
              About Us
            </Text>
            <Text
              className="common-pointer sm:ml-[0] ml-[25px] sm:mt-0 mt-[5px] text-black-900 text-xl tracking-[0.50px]"
              size="txtInterMedium20"
              onClick={() => navigate("/masihdalampengembangan")}
            >
              Hall Of Fame
            </Text>
            <Text
              className="common-pointer sm:ml-[0] ml-[19px] sm:mt-0 mt-1.5 text-black-900 text-xl tracking-[0.50px]"
              size="txtInterMedium20"
              onClick={() => navigate("/masihdalampengembangan")}
            >
              Partnership
            </Text>
            <Button
              className="common-pointer cursor-pointer font-medium min-w-[79px] sm:ml-[0] ml-[11px] text-center text-xl tracking-[0.50px]"
              onClick={() => navigate("/masihdalampengembangan")}
              shape="round"
              color="amber_600"
              size="xs"
            >
              Login
            </Button>
          </div>
          <Line className="bg-black-900 h-px mr-0.5 mt-3.5 w-full" />
          <Text
            className="md:ml-[0] ml-[299px] mt-[27px] sm:text-[31px] md:text-[33px] text-[35px] text-shadow-ts text-teal-700 tracking-[0.50px]"
            size="txtInterBold35"
          >
            Top Contest This Week
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[89px] items-start justify-center max-w-[676px] mt-[9px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[156px] md:h-auto sm:mt-0 mt-[35px] object-cover w-[23%] sm:w-full"
              src="images/img_image4.png"
              alt="imageFour"
            />
            <Img
              className="sm:flex-1 h-[203px] md:h-auto object-cover w-[29%] sm:w-full"
              src="images/img_ig1.png"
              alt="ig1"
            />
            <Img
              className="sm:flex-1 h-[156px] md:h-auto sm:mt-0 mt-[35px] object-cover w-[23%] sm:w-full"
              src="images/img_image2.png"
              alt="imageTwo"
            />
          </div>
          <div className="bg-amber-300 flex flex-col gap-2.5 items-center justify-start mt-[19px] pb-[9px] w-full">
            <Line className="bg-black-900 h-px w-full" />
            <Text
              className="text-base text-gray-900 tracking-[0.50px]"
              size="txtInterSemiBold16"
            >
              Cobain Compete sekarang untuk akselerasi masa depanmu
            </Text>
          </div>
          <Line className="bg-black-900 h-0.5 w-full" />
          <div className="md:h-[221px] h-[241px] max-w-[676px] mt-6 mx-auto md:px-5 relative w-full">
            <Text
              className="absolute inset-x-[0] mx-auto sm:text-[31px] md:text-[33px] text-[35px] text-shadow-ts text-teal-700 top-[0] tracking-[0.50px] w-max"
              size="txtInterBold35"
            >
              Top Event This Week
            </Text>
            <Img
              className="absolute bottom-[0] h-[197px] inset-x-[0] mx-auto object-cover w-[29%]"
              src="images/img_whatsappimage20231128.png"
              alt="whatsappimageTwenty"
            />
            <Img
              className="absolute bottom-[8%] h-[178px] object-cover right-[0] w-[24%]"
              src="images/img_whatsappimage20231128_178x156.png"
              alt="whatsappimageTwenty_One"
            />
            <Img
              className="absolute bottom-[8%] h-[166px] left-[0] object-cover w-[23%]"
              src="images/img_whatsappimage20231128_166x153.png"
              alt="whatsappimageTwenty_Two"
            />
          </div>
          <Line className="bg-teal-700 h-0.5 mr-[274px] mt-[18px] w-[74%]" />
          <Line className="bg-amber-600 h-0.5 md:ml-[0] ml-[600px] mt-[17px] w-[42%]" />
          <div className="h-[136px] md:h-[158px] max-w-[863px] mt-[22px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-gradient  h-[136px] inset-[0] justify-center m-auto rounded-[20px] w-[99%]"></div>
            <Text
              className="absolute inset-x-[0] leading-[40.00px] mx-auto text-center text-lg text-white-A700 top-[17%] tracking-[1.00px] w-full"
              size="txtInterBold18"
            >
              Compete adalah sebuah platform yang membantu para pelajar di
              seluruh Indonesia untuk mendapatkan informasi terkait lomba atau
              event yang sedang berlangsung.
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[271px] mt-[15px] md:px-5 w-[47%] md:w-full">
            <div className="h-24 sm:mt-0 mt-[3px] relative w-24">
              <Img
                className="h-8 mb-[-13.07px] mx-auto z-[1]"
                src="images/img_iconusersicon.svg"
                alt="iconusersicon"
              />
              <div className="bg-blue_gray-100 flex flex-col gap-[5px] items-center justify-center mt-auto mx-auto p-0.5 rounded-[20px] w-full">
                <Text
                  className="mt-[21px] text-[15px] text-black-900 text-center tracking-[0.50px]"
                  size="txtInterBold15"
                >
                  5.000.000
                </Text>
                <Text
                  className="mb-3 text-[10px] text-black-900 text-center tracking-[0.50px]"
                  size="txtInterRegular10"
                >
                  Jumlah Pengguna
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-9 sm:ml-[0] sm:mt-0 mt-[5px] w-[21%] sm:w-full">
              <div className="h-[94px] relative w-full">
                <Img
                  className="h-8 mb-[-15px] mx-auto z-[1]"
                  src="images/img_ticket.svg"
                  alt="ticket"
                />
                <div className="bg-blue_gray-100 flex flex-col items-center justify-center mt-auto mx-auto p-2.5 rounded-[20px] w-full">
                  <Text
                    className="mt-[17px] text-[15px] text-black-900 text-center tracking-[0.50px]"
                    size="txtInterBold15"
                  >
                    1.000
                  </Text>
                  <Text
                    className="mb-[5px] text-[10px] text-black-900 text-center tracking-[0.50px]"
                    size="txtInterRegular10"
                  >
                    Jumlah Lomba
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-7 sm:ml-[0] w-[21%] sm:w-full">
              <div className="h-[99px] relative w-full">
                <Img
                  className="h-[41px] mb-[-19.91px] mx-auto z-[1]"
                  src="images/img_close_deep_orange_200.svg"
                  alt="close"
                />
                <div className="bg-blue_gray-100 flex flex-col items-center justify-center mt-auto mx-auto p-3 rounded-[20px] w-full">
                  <Text
                    className="mt-[15px] text-[15px] text-black-900 text-center tracking-[0.50px]"
                    size="txtInterBold15"
                  >
                    1.500
                  </Text>
                  <Text
                    className="mb-[3px] text-[10px] text-black-900 text-center tracking-[0.50px]"
                    size="txtInterRegular10"
                  >
                    Jumlah Event
                  </Text>
                </div>
              </div>
            </div>
            <div className="sm:h-20 h-24 md:h-[83px] sm:ml-[0] ml-[27px] sm:mt-0 mt-[3px] relative w-24">
              <div className="absolute bg-blue_gray-100 bottom-[0] h-[77px] inset-x-[0] mx-auto rounded-[20px] w-full"></div>
              <div className="absolute flex flex-col items-center justify-start right-[5%] top-[0] w-[78px]">
                <div className="flex flex-col gap-[5px] items-center justify-start w-[78px] md:w-full">
                  <Img
                    className="h-[38px]"
                    src="images/img_iconhandshake.svg"
                    alt="iconhandshake"
                  />
                  <Text
                    className="text-[15px] text-black-900 text-center tracking-[0.50px]"
                    size="txtInterBold15"
                  >
                    390
                  </Text>
                  <Text
                    className="text-[10px] text-black-900 text-center tracking-[0.50px]"
                    size="txtInterRegular10"
                  >
                    Jumlah Partner
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-amber-600 h-0.5 md:ml-[0] ml-[261px] mt-[13px] w-3/4" />
          <Line className="bg-teal-700 h-0.5 mr-[281px] mt-[25px] w-[73%]" />
          <Text
            className="md:ml-[0] ml-[321px] mt-[7px] sm:text-[31px] md:text-[33px] text-[35px] text-shadow-ts text-teal-700 tracking-[0.50px]"
            size="txtInterBold35"
          >
            Program Partnership
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[850px] mt-[13px] mx-auto md:px-5 w-full">
            <div className="bg-orange-400 flex md:flex-1 flex-col items-center justify-start p-[19px] w-[49%] md:w-full">
              <div className="flex flex-col gap-2 justify-start mb-[21px] mt-[18px] w-[99%] md:w-full">
                <Text
                  className="leading-[24.00px] md:ml-[0] ml-[52px] sm:text-[21px] md:text-[23px] text-[25px] text-shadow-ts text-white-A700 tracking-[0.50px] w-[77%] sm:w-full"
                  size="txtInterBold25"
                >
                  Informasi Partnership
                </Text>
                <div className="flex flex-row gap-[31px] items-center justify-between w-full">
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[103px] rounded-[20px] text-[10px] text-center tracking-[0.50px]"
                    onClick={() => navigate("/masihdalampengembangan")}
                    shape="round"
                  >
                    Upload Lomba
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[103px] rounded-[20px] text-[10px] text-center tracking-[0.50px]"
                    onClick={() => navigate("/masihdalampengembangan")}
                    shape="round"
                  >
                    Upload Event
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[103px] rounded-[20px] text-[10px] text-center tracking-[0.50px]"
                    onClick={() => navigate("/masihdalampengembangan")}
                    shape="round"
                  >
                    Upload Iklan
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-orange-400 flex md:flex-1 flex-col gap-7 items-center justify-start p-[37px] sm:px-5 w-[39%] md:w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-shadow-ts text-white-A700 tracking-[0.50px]"
                size="txtInterBold25"
              >
                Daftar Partnership
              </Text>
              <Button
                className="common-pointer cursor-pointer font-bold min-w-[150px] rounded-[20px] text-[10px] text-center tracking-[0.50px]"
                onClick={() => navigate("/masihdalampengembangan")}
                shape="round"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
          <div className="h-11 md:h-[66px] mt-[22px] md:px-5 relative w-full">
            <Button
              className="cursor-pointer font-semibold m-auto min-w-[1024px] md:min-w-full text-base text-center tracking-[0.50px]"
              shape="square"
              color="amber_300"
            >
              Cobain Compete sekarang untuk akselerasi masa depanmu
            </Button>
            <Line className="absolute bg-black-900 h-0.5 inset-x-[0] mx-auto top-[0] w-full" />
          </div>
          <div className="flex flex-col md:px-5 relative w-full">
            <Line className="bg-black-900 h-0.5 mx-auto w-full" />
            <div className="bg-teal-700_d8 flex flex-col items-start justify-end mb-auto mt-[-1px] mx-auto p-[21px] sm:px-5 w-full z-[1]">
              <div className="flex flex-col gap-[30px] justify-start md:ml-[0] ml-[61px] w-[77%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[54%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Img
                        className="sm:flex-1 h-10 md:h-auto mb-3.5 object-cover w-[33%] sm:w-full"
                        src="images/img_appstore3ed33217png.png"
                        alt="appstore3ed3321"
                      />
                      <Text
                        className="common-pointer sm:ml-[0] ml-[84px] sm:mt-0 mt-[39px] text-[13px] text-gray-100 tracking-[0.50px]"
                        size="txtInterRegular13"
                        onClick={() => navigate("/masihdalampengembangan")}
                      >
                        About Us
                      </Text>
                      <Text
                        className="common-pointer sm:ml-[0] ml-[50px] sm:mt-0 mt-[39px] text-[13px] text-gray-100 tracking-[0.50px]"
                        size="txtInterRegular13"
                        onClick={() => navigate("/masihdalampengembangan")}
                      >
                        Partnership
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[85px] items-start justify-start mt-[3px] w-[90%] md:w-full">
                      <Img
                        className="h-10 md:h-auto object-cover w-[37%]"
                        src="images/img_playstore68914c4apng.png"
                        alt="playstore68914c"
                      />
                      <div className="flex flex-col items-start justify-start w-2/5">
                        <div className="flex flex-row gap-[27px] items-start justify-between w-full">
                          <Text
                            className="common-pointer mb-0.5 text-[13px] text-gray-100 tracking-[0.50px]"
                            size="txtInterRegular13"
                            onClick={() => navigate("/masihdalampengembangan")}
                          >
                            Hall Of Fame
                          </Text>
                          <a className="mt-0.5 text-[13px] text-gray-100 tracking-[0.50px]">
                            <Text
                              className="common-pointer"
                              size="txtInterRegular13"
                              onClick={() =>
                                navigate("/masihdalampengembangan")
                              }
                            >
                              Login
                            </Text>
                          </a>
                        </div>
                        <Text
                          className="common-pointer text-[13px] text-gray-100 tracking-[0.50px]"
                          size="txtInterRegular13"
                          onClick={() => navigate("/masihdalampengembangan")}
                        >
                          Program
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[35px] w-[32%] md:w-full">
                    <Text
                      className="text-[13px] text-gray-100 tracking-[0.50px]"
                      size="txtInterRegular13"
                    >
                      Socials
                    </Text>
                    <div className="flex flex-row gap-[33px] items-start justify-between w-full">
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[43%]">
                        <Img
                          className="h-[19px]"
                          src="images/img_instagramnew1b88d608svg.svg"
                          alt="instagramnew1bEight"
                        />
                        <Text
                          className="mt-0.5 text-[13px] text-gray-100 tracking-[0.50px]"
                          size="txtInterRegular13"
                        >
                          compete.id
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[43%]">
                        <Img
                          className="h-4 mb-[3px]"
                          src="images/img_link.svg"
                          alt="link"
                        />
                        <Text
                          className="mt-[3px] text-[13px] text-gray-100 tracking-[0.50px]"
                          size="txtInterRegular13"
                        >
                          compete.id
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start ml-1 md:ml-[0] mt-0.5 w-[41%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="mt-0.5 text-[13px] text-gray-100 tracking-[0.50px]"
                        size="txtInterRegular13"
                      >
                        compete.id
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-end md:ml-[0] ml-[297px] w-2/5 md:w-full">
                  <Img
                    className="h-[17px]"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="text-[15px] text-gray-100 tracking-[0.50px]"
                    size="txtInterBold15Gray100"
                  >
                    2023 Compete. All rights reserved
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabletPage;
