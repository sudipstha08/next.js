/* eslint-disable @next/next/no-img-element */
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Spin, Upload, message, notification } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import ImgCrop from "antd-img-crop";
import { fileUpload } from "../../../services/fileUpload";

interface ImageUploadProps {
  height?: string;
  width?: string;
  cover?: boolean;
  isDefaultImage?: boolean;
  onChange?: (fileName?: any, value?: any) => void;
  loading?: boolean;
  value?: any;
  model?: string;
  showLoading?: boolean;
  type?: string;
  pdfName?: string;
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

const FileUpload: React.FC<ImageUploadProps> = (props) => {
  const {
    cover = false,
    isDefaultImage = true,
    value,
    onChange,
    // type,
    model,
    pdfName,
    width = "768px",
    height = "432px",
  } = props;
  const [file, setFile] = useState<any>(null);
  const { t } = useTranslation();

  const defaultImage = isDefaultImage
    ? "/images/image-01.jpg"
    : "/images/image-02.jpg";

  const { mutate, isLoading: uploadLoading } = useMutation(
    "fileUpload",
    fileUpload,
    {
      onSuccess: (result: any) => {
        onChange && onChange(null, result?.data);
        setFile({
          url: result?.data,
          alt: cover ? "Cover image " : "Thumb ",
        });
      },
      onError: (error?: any) => {
        const msg = error.data.error;
        notification.error({
          message: msg ? t(`${msg}`) : t("An error has occurred"),
        });
      },
    },
  );

  useEffect(() => {
    setFile({
      url: value ? value : defaultImage,
      alt: value && cover ? "Cover image " : "Thumb",
    });
  }, [value, pdfName]);

  const handleDeleteClick = () => {
    setFile(null);
    onChange && onChange(null, null);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error(t("You can only upload JPG/PNG file!"));
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error(t("Image must smaller than 2MB!"));
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = async (info) => {
    if (info.file.status === "done") {
      const bodyFormData = new FormData();
      bodyFormData.append("image", info?.file?.originFileObj);
      bodyFormData.append("model", model ? model : "default");
      mutate(bodyFormData as any);
    }
  };

  return (
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
      <Spin spinning={uploadLoading} delay={500} className="image-spin-wrapper">
        <img
          src={file ? file?.url : "/assets/images/cover_default.png"}
          alt={file ? file?.alt : "Thumbnail image"}
          style={{
            height: "100%",
            objectFit: "contain",
            width: "100%",
          }}
        />
        <ImgCrop
          minZoom={1}
          maxZoom={10}
          aspect={1 / 1.2}
          zoom={true}
          quality={1}
          cropperProps={{
            crop: { x: 3, y: 6 },
          }}
        >
          <Upload
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            accept="image/*"
          >
            <div className="upload-btn">
              <UploadOutlined />
            </div>
          </Upload>
          <div className="delete-btn" onClick={handleDeleteClick}>
            <DeleteOutlined />
          </div>
        </ImgCrop>
      </Spin>
    </Wrapper>
  );
};

export { FileUpload };
