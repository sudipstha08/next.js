/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useCallback, useRef, useEffect, FC } from "react";
import ReactCrop from "react-image-crop";
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
  const [upImg, setUpImg] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [file, setFile] = useState<any>(null);
  setFile("");
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState<any>({
    unit: "px",
    width: 200,
    height: 200,
    // aspect: 16 / 9,
  });
  const [completedCrop, setCompletedCrop] = useState<any>(null);

  const onSelectFile = async (e) => {
    if (e.file.status === "done") {
      const reader: any = new FileReader();
      await reader.addEventListener("load", () => setUpImg(reader.result));
      await reader.readAsDataURL(e?.file?.originFileObj);
      setIsModalVisible(true);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const handleOk = async (canvas, crop) => {
    console.log("ok");
    console.log("crop", crop);
    console.log("canvas", canvas);
    if (!crop || !canvas) {
      return;
    }
    const img = canvas.toDataURL("image/png");
    console.log("images", img);
    // return new Promise((resolve, reject) => {
    //   canvas.toBlob(
    //     (blob) => {
    //       blob.name = "ddd";
    //       resolve(blob);
    //     },
    //     "image/jpeg",
    //     1,
    //   );
    // });
    // await return canvas.toBlob(
    //   (blob) => {
    //     const previewUrl = window.URL.createObjectURL(blob);

    //     const anchor = document.createElement("a");
    //     anchor.download = "cropPreview.png";
    //     anchor.href = URL.createObjectURL(blob);
    //     anchor.click();

    //     window.URL.revokeObjectURL(previewUrl);
    //   },
    //   "image/png",
    //   1,
    // );
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image: any = imgRef.current;
    const canvas: any = previewCanvasRef.current;
    const crop: any = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY,
    );
  }, [completedCrop]);

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
      <div>
        <canvas
          ref={previewCanvasRef}
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0),
            display: "none",
          }}
        />
      </div>

      <Modal
        title="Select the area to crop"
        visible={isModalVisible}
        onOk={() => handleOk(previewCanvasRef.current, completedCrop)}
        onCancel={handleCancel}
      >
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
          disabled={false}
          locked={true}
          imageStyle={{ width: 700, objectFit: "contain" }}
        />
      </Modal>
    </div>
  );
};

export { ReactImageCrop };
// https://codepen.io/qertis/pen/RNPXee
