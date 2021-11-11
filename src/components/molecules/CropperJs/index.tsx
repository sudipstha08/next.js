/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, createRef, useEffect, FC } from "react";
import styled from "styled-components";
import "react-image-crop/dist/ReactCrop.css";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { Spin, Upload, Modal } from "antd";

interface IProps {
  width?: any;
  height?: any;
}

const Wrapper = styled.div`
  .upload-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 60px;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: #65b798;
    border: 1px solid grey;
    cursor: pointer;
    & svg {
      fill: white;
      height: 15px;
      width: 15px;
    }
  }
  .delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 15px;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: 1px solid grey;
    background-color: white;
    cursor: pointer;
    & svg {
      fill: #cf1322;
    }
  }
  & .ant-spin-nested-loading,
  .ant-spin-container {
    height: 100%;
  }
`;

const ReactImageCrop: FC<IProps> = ({ width = "500px", height }) => {
  const [imageDestination, setImageDestination] = useState("");
  const imageElement = createRef<any>();
  const [file, setFile] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  imageDestination && setFile(imageDestination);

  const onSelectFile = async (e) => {
    if (e.file.status === "done") {
      const reader: any = new FileReader();
      await reader.addEventListener("load", () =>
        setImageDestination(reader.result),
      );
      await reader.readAsDataURL(e?.file?.originFileObj);
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const cropper = new Cropper(imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      viewMode: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        setImageDestination(canvas.toDataURL("image/png"));
      },
    });
  }, []);

  return (
    <div className="App">
      <Wrapper
        style={{
          position: "relative",
          width: width,
          height: height,
          background: "#E6E6E6",
          border: "1px solid #D9D9D9",
          borderRadius: "2px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Spin delay={500} className="image-spin-wrapper" spinning={false}>
          <img
            src={file ? file?.url : "/images/image-01.jpg"}
            alt={file ? file?.alt : "Thumbnail image"}
            style={{
              height: "100%",
              objectFit: "contain",
              width: "100%",
            }}
          />

          <Upload
            showUploadList={false}
            onChange={onSelectFile}
            accept="image/*"
          >
            <div className="upload-btn">
              <UploadOutlined />
            </div>
          </Upload>
          <div className="delete-btn">
            <DeleteOutlined />
          </div>
        </Spin>
      </Wrapper>
      <Modal
        title="Select the area to crop"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
};

export { ReactImageCrop };
// https://codepen.io/qertis/pen/RNPXee
