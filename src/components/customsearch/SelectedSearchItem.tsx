import { Input } from "antd";

interface SelectedItemsProps {
  selectedItems: string[];
}
const SelectedSearchItem = (props: SelectedItemsProps) => {
  console.log(props.selectedItems);
  return (
    <div style={{ textAlign: "left", paddingTop: "60px" }}>
      <div>Selected Search With</div>
      {props.selectedItems.map((item, index) => (
        <Input
          key={index}
          placeholder={`Search By ${item}`}
          style={{ marginTop: "14px" }}
        />
      ))}
    </div>
  );
};

export default SelectedSearchItem;
