import React, { FC } from "react";
import { Skeleton, Space } from "antd";
import { SkeletonProps } from "antd/lib";
import { DotChartOutlined } from "@ant-design/icons";

type SizeType = "default" | "small" | "large";
type ButtonShapeType = "circle" | "square" | "round" | "default";
type AvatarShapeType = "circle" | "square";

interface ISkeletonLoader extends SkeletonProps {
  size: SizeType;
  buttonShape: ButtonShapeType;
  avatarShape: AvatarShapeType;
  active: boolean;
  block: boolean;
}

const SkeletonLoader: FC<ISkeletonLoader> = ({
  active,
  size,
  buttonShape,
  avatarShape,
  block,
  ...rest
}) => {
  return (
    <>
      <Space>
        <Skeleton.Button
          active={active}
          size={size}
          shape={buttonShape}
          block={block}
          {...rest}
        />
        <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
        <Skeleton.Input active={active} size={size} />
      </Space>
      <br />
      <br />
      <Skeleton.Button
        active={active}
        size={size}
        shape={buttonShape}
        block={block}
      />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Space>
        <Skeleton.Image active={active} />
        <Skeleton.Node active={active}>
          <DotChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
        </Skeleton.Node>
      </Space>
    </>
  );
};

export { SkeletonLoader };
