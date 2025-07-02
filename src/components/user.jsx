const User = ({
  uuid,
  username,
  onClick,
}) => {
  const onCheckBoxClick = (e) => {
		const parent = e.target.parentNode;
		if (e.target.checked) {
			parent.classList.add('checked');
		} else {
			parent.classList.remove('checked');
		}
		onClick(uuid);
	}

  return (
    <div className="form-check">
      <input
        type="checkbox"
        id={uuid}
        className="form-check-input"
        onClick={onCheckBoxClick}/>

      <label
        title=""
        type="checkbox"
        for={uuid}
        className="form-check-label">
        {username}
      </label>
    </div>
  );
};

export default User;
