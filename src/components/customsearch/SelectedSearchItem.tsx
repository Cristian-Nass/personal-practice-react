interface SelectedItemsProps {
  selectedItems: string[];
}
const SelectedSearchItem = (props: SelectedItemsProps) => {
  console.log(props.selectedItems);
  return (
    <div style={{ textAlign: "left", paddingTop: "20px" }}>
      <div>Selected Search With</div>
    </div>
  );
};

export default SelectedSearchItem;
