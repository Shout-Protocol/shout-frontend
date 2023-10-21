import { VisuallyHidden, cn, useRadio } from "@nextui-org/react";

export const BoostSelectItem = (props: {
  value: string;
  balance: number;
  symbol: string;
  children: React.ReactNode;
}) => {
  const {
    Component,
    children,
    isSelected,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        <span className="text-small text-foreground opacity-70">
          Balance: {props.balance} {props.symbol}
        </span>
      </div>
    </Component>
  );
};
