import { useState, useCallback } from "react";
import { Tooltip } from "antd";

const useCopyToClipBoard = (text: string) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    if (navigator) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    }
  };

  const ToolTip = useCallback(
    ({ children }) => {
      const [isCopied, setIsCopied] = useState(false);
      return (
        <Tooltip
          placement="top"
          title={isCopied ? "Copied" : "Copy"}
          arrowPointAtCenter
          destroyTooltipOnHide
          mouseLeaveDelay={0.25}
          onVisibleChange={() => {
            setCopied(false);
            setIsCopied(false);
          }}
        >
          <div
            onClick={async () => {
              copyToClipboard(children);
              setIsCopied(true);
            }}
            style={{ fontSize: 14 }}
          >
            {children}
          </div>
        </Tooltip>
      );
    },
    [text],
  );

  const copy = useCallback(() => {
    if (!copied) copyToClipboard(text);
  }, [text, copied]);

  return {
    copied,
    copy,
    ToolTip,
  };
};

export { useCopyToClipBoard };
