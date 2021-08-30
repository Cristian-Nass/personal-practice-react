interface SelectedItemsProps {
  selectedItems: string[];
}
const SelectedSearchItem = (props: SelectedItemsProps) => {
  console.log(props.selectedItems);
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default SelectedSearchItem;
