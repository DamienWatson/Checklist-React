const SelectedUsers = ({
  selectedIds,
}) => {
  return (
    <section>
      <div id="selected-ids">
        <h2>Selected IDs</h2>
        <pre>{selectedIds.map(value => value+'\n')}</pre>
      </div>
    </section>
  );
};

export default SelectedUsers;
